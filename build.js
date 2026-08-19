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

  // Basic validation
  if (!data.title || !data.property_type || data.price === undefined) {
    console.error(`Malformed property data in ${file}`);
    process.exit(1);
  }

  if (!data.featured) return;

  const category = data.property_type.toLowerCase();
  const bgClass = bgClasses[idx % bgClasses.length];

  let priceStr = `₹${data.price} ${data.price_unit === 'Lakh' ? 'L' : 'Cr'}`;
  if (data.listing_type === 'Rent' || data.listing_type === 'Lease') {
    priceStr += '/mo';
  }

  let imgAlt = data.title;
  let imgUrl = data.photos && data.photos.length > 0 ? data.photos[0] : 'assets/images/hero3.jpg';
  
  if (imgUrl.startsWith('/')) imgUrl = imgUrl.substring(1);

  let wpText = encodeURIComponent(`Hi Manka Realty, I am interested in the ${data.title} property.`);

  generatedHTML += `
                        <div class="property-card ${bgClass}" data-category="${category}">
                            <div class="property-card-header">
                                <h3>${data.title}</h3>
                                <p class="property-count">${data.status}</p>
                            </div>
                            <div class="property-image-wrapper">
                                <span class="property-price-badge">${priceStr}</span>
                                <img src="${imgUrl}" alt="${imgAlt}">
                            </div>
                            <div class="property-card-body">
                                <p class="property-desc">${data.description || ''}</p>
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
