const fs = require('fs');
const path = require('path');

const propertiesDir = path.join(__dirname, 'content/properties');
const indexFile = path.join(__dirname, 'index.html');

if (!fs.existsSync(propertiesDir)) {
  console.log('No properties found. Skipping.');
  process.exit(0);
}

const files = fs.readdirSync(propertiesDir).filter(f => f.endsWith('.json'));
if (files.length === 0) {
  console.log('No property JSON files found.');
  process.exit(0);
}

// Ensure stable sort to maintain order
files.sort();

let generatedHTML = '';

const bgClasses = ['bg-cream', 'bg-peach', 'bg-green', 'bg-blue'];

files.forEach((file, idx) => {
  const content = fs.readFileSync(path.join(propertiesDir, file), 'utf-8');
  let data;
  try {
    data = JSON.parse(content);
  } catch (e) {
    console.error(`Error parsing JSON in ${file}:`, e);
    process.exit(1);
  }

  // Basic validation for grouped schema
  if (!data.basic_info || !data.basic_info.title || !data.basic_info.property_type || !data.pricing || data.pricing.price === undefined) {
    console.error(`Malformed property data in ${file}`);
    process.exit(1);
  }

  const basic_info = data.basic_info || {};
  const pricing = data.pricing || {};
  const location_specs = data.location_specs || {};
  const media_description = data.media_description || {};

  if (!media_description.featured) return;

  const category = basic_info.property_type.toLowerCase();
  const bgClass = bgClasses[idx % bgClasses.length];

  let priceStr = `₹${pricing.price} ${pricing.price_unit === 'Lakh' ? 'L' : 'Cr'}`;
  if (basic_info.listing_type === 'Rent' || basic_info.listing_type === 'Lease') {
    priceStr += '/mo';
  }

  let imgAlt = basic_info.title;
  let imgUrl = media_description.photos && media_description.photos.length > 0 ? media_description.photos[0] : 'assets/images/hero3.jpg';
  
  if (imgUrl.startsWith('/')) imgUrl = imgUrl.substring(1);

  let wpText = encodeURIComponent(`Hi Manka Realty, I am interested in the ${basic_info.title} property.`);

  generatedHTML += `
                        <div class="property-card ${bgClass}" data-category="${category}">
                            <div class="property-card-header">
                                <h3>${basic_info.title}</h3>
                                <p class="property-count">${basic_info.status}</p>
                            </div>
                            <div class="property-image-wrapper">
                                <span class="property-price-badge">${priceStr}</span>
                                <img src="${imgUrl}" alt="${imgAlt}">
                            </div>
                            <div class="property-card-body">
                                <p class="property-desc">${media_description.description || ''}</p>
                                <a href="https://wa.me/918928770059?text=${wpText}" target="_blank" class="card-action-btn">
                                    INQUIRE VIA WHATSAPP &rarr;
                                </a>
                            </div>
                        </div>
`;
});

let indexContent = fs.readFileSync(indexFile, 'utf-8');

const regex = /(<div class="properties-carousel-track" id="properties-slider-track">)([\s\S]*?)(<\/div>\s*<\/div>\s*<button class="carousel-nav next-btn")/i;

if (regex.test(indexContent)) {
  const newContent = indexContent.replace(regex, `$1\n${generatedHTML}                    $3`);
  fs.writeFileSync(indexFile, newContent);
  console.log('Successfully injected properties into index.html');
} else {
  console.error('Could not find injection markers in index.html');
  process.exit(1);
}
