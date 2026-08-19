/* ==========================================
   FULLSCREEN SPA PORTAL CONTROLLER
   ========================================== */
let overlayActiveDb = [];
let overlayCurrentCategory = '';
let overlayCurrentCategoryName = '';
let overlayCurrentPortalType = '';

function openPortal(type) {
    const overlay = document.getElementById('portal-overlay');
    const bodyContent = document.getElementById('overlay-content-body');
    const scrollContainer = document.querySelector('.overlay-scroll-container');
    if (!overlay || !bodyContent) return;

    // Lock page scroll
    document.body.style.overflow = 'hidden';

    // Reset white theme
    if (scrollContainer) {
        scrollContainer.classList.remove('white-theme');
    }

    // Clear and set loader
    bodyContent.innerHTML = '<div style="text-align:center; padding:100px 0; color:#ffffff;"><i class="fa-solid fa-spinner fa-spin" style="font-size:3rem; color:#e30613;"></i><p style="margin-top:20px;">Loading...</p></div>';

    // Show overlay
    overlay.classList.add('active');

    // Close mobile nav menu if open
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (mobileToggle && navMenu) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }

    // Load content after small timeout for smooth animation
    setTimeout(() => {
        if (type === 'history') {
            renderHistoryTimeline(bodyContent);
        } else if (type === 'partners') {
            renderPartnersGrid(bodyContent);
        }
    }, 300);
}

function closePortal() {
    const overlay = document.getElementById('portal-overlay');
    const scrollContainer = document.querySelector('.overlay-scroll-container');
    if (overlay) {
        overlay.classList.remove('active');
    }
    if (scrollContainer) {
        scrollContainer.classList.remove('white-theme');
    }
    // Unlock page scroll
    document.body.style.overflow = '';
}

function renderPropertiesPortal(type, container) {
    overlayCurrentPortalType = type;
    const isRes = type === 'residential';
    // Provide fallback empty arrays if db variables are undefined
    overlayActiveDb = isRes ? (typeof residentialPropertiesDb !== 'undefined' ? residentialPropertiesDb : []) 
                            : (typeof commercialPropertiesDb !== 'undefined' ? commercialPropertiesDb : []);
    const categories = isRes ? (typeof residentialCategories !== 'undefined' ? residentialCategories : [])
                             : (typeof commercialCategories !== 'undefined' ? commercialCategories : []);
    
    const titleText = isRes ? "Residential Property Portal" : "Commercial Property Portal";
    const subtitleText = isRes 
        ? "Browse premium luxury apartments, plots, villas, and independent houses across Mumbai." 
        : "Discover premium grade-A office spaces, retail shops, showrooms, and warehouse hubs.";

    const heroDiv = document.createElement('div');
    heroDiv.className = 'portal-hero';
    heroDiv.innerHTML = `
        <div class="section-container">
            <h1 class="portal-page-title">${titleText}</h1>
            <p class="portal-page-subtitle">${subtitleText}</p>
        </div>
    `;

    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'portal-section';
    
    const sectionContainer = document.createElement('div');
    sectionContainer.className = 'section-container';

    // VIEW 1: Categories
    const viewCategories = document.createElement('div');
    viewCategories.id = 'view-categories';
    viewCategories.className = 'view-block';
    
    const categoriesGrid = document.createElement('div');
    categoriesGrid.className = 'categories-grid';
    
    categories.forEach(c => {
        const catCard = document.createElement('div');
        catCard.className = 'category-card';
        catCard.onclick = () => showOverlayCategory(c.id, c.name);
        
        const catImg = document.createElement('div');
        catImg.className = 'category-card-image';
        catImg.style.backgroundImage = `url('${c.image}')`;
        const overlayDiv = document.createElement('div');
        overlayDiv.className = 'category-card-overlay';
        catImg.appendChild(overlayDiv);
        
        const catBody = document.createElement('div');
        catBody.className = 'category-card-body';
        
        const h3 = document.createElement('h3');
        h3.textContent = c.name;
        const pDesc = document.createElement('p');
        pDesc.textContent = c.desc;
        const linkSpan = document.createElement('span');
        linkSpan.className = 'category-card-link';
        linkSpan.innerHTML = 'View Listings &nbsp;&rarr;';
        
        catBody.appendChild(h3);
        catBody.appendChild(pDesc);
        catBody.appendChild(linkSpan);
        
        catCard.appendChild(catImg);
        catCard.appendChild(catBody);
        
        categoriesGrid.appendChild(catCard);
    });
    viewCategories.appendChild(categoriesGrid);
    
    // VIEW 2: Listings
    const viewListings = document.createElement('div');
    viewListings.id = 'view-listings';
    viewListings.className = 'view-block';
    viewListings.style.display = 'none';
    
    const backCatBtn = document.createElement('button');
    backCatBtn.className = 'back-button';
    backCatBtn.onclick = showOverlayCategories;
    backCatBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Back to Categories';
    
    const listingsTitle = document.createElement('h2');
    listingsTitle.id = 'listings-title';
    listingsTitle.className = 'section-title';
    listingsTitle.style.marginBottom = '30px';
    listingsTitle.style.color = '#ffffff';
    listingsTitle.textContent = 'Properties';
    
    const listingsGrid = document.createElement('div');
    listingsGrid.className = 'listings-grid';
    listingsGrid.id = 'listings-grid-content';
    
    viewListings.appendChild(backCatBtn);
    viewListings.appendChild(listingsTitle);
    viewListings.appendChild(listingsGrid);
    
    // VIEW 3: Details
    const viewDetails = document.createElement('div');
    viewDetails.id = 'view-details';
    viewDetails.className = 'view-block';
    viewDetails.style.display = 'none';
    
    const backListBtn = document.createElement('button');
    backListBtn.className = 'back-button';
    backListBtn.onclick = showOverlayListings;
    backListBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Back to Listings';
    
    const detailsContainerContent = document.createElement('div');
    detailsContainerContent.className = 'details-container';
    detailsContainerContent.id = 'details-container-content';
    
    viewDetails.appendChild(backListBtn);
    viewDetails.appendChild(detailsContainerContent);
    
    // Assemble
    sectionContainer.appendChild(viewCategories);
    sectionContainer.appendChild(viewListings);
    sectionContainer.appendChild(viewDetails);
    sectionDiv.appendChild(sectionContainer);
    
    container.innerHTML = '';
    container.appendChild(heroDiv);
    container.appendChild(sectionDiv);
}

function showOverlayCategories() {
    document.getElementById('view-listings').style.display = 'none';
    document.getElementById('view-details').style.display = 'none';
    document.getElementById('view-categories').style.display = 'block';
    const sc = document.querySelector('.overlay-scroll-container');
    if (sc) sc.scrollTop = 0;
}

function showOverlayCategory(catId, catName) {
    overlayCurrentCategory = catId;
    overlayCurrentCategoryName = catName;
    
    const filtered = overlayActiveDb.filter(p => p.category === catId);
    const gridContent = document.getElementById('listings-grid-content');
    if(!gridContent) return;
    
    const titleEl = document.getElementById('listings-title');
    if(titleEl) titleEl.textContent = catName + " Listings";
    
    gridContent.innerHTML = '';
    
    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'listing-card';
        
        // Image wrapper
        const imgWrap = document.createElement('div');
        imgWrap.className = 'listing-img-wrapper';
        imgWrap.style.backgroundImage = `url('${p.image}')`;
        const priceTag = document.createElement('span');
        priceTag.className = 'listing-price-tag';
        priceTag.textContent = p.price;
        imgWrap.appendChild(priceTag);
        
        // Body
        const bodyWrap = document.createElement('div');
        bodyWrap.className = 'listing-body';
        
        const title = document.createElement('h3');
        title.className = 'listing-title';
        title.textContent = p.title;
        
        const loc = document.createElement('div');
        loc.className = 'listing-location';
        loc.innerHTML = '<i class="fa-solid fa-location-dot"></i> ';
        loc.appendChild(document.createTextNode(p.location));
        
        const desc = document.createElement('p');
        desc.className = 'listing-desc';
        desc.textContent = p.desc;
        
        const specs = document.createElement('div');
        specs.className = 'listing-specs';
        
        const area = document.createElement('div');
        area.className = 'listing-spec-item';
        area.innerHTML = '<i class="fa-solid fa-maximize"></i> ';
        area.appendChild(document.createTextNode(p.area));
        specs.appendChild(area);
        
        if (p.beds && p.beds !== 'N/A') {
            const beds = document.createElement('div');
            beds.className = 'listing-spec-item';
            beds.innerHTML = '<i class="fa-solid fa-bed"></i> ';
            beds.appendChild(document.createTextNode(p.beds));
            specs.appendChild(beds);
        }
        
        if (p.baths && p.baths !== 'N/A') {
            const baths = document.createElement('div');
            baths.className = 'listing-spec-item';
            baths.innerHTML = '<i class="fa-solid fa-bath"></i> ';
            baths.appendChild(document.createTextNode(p.baths));
            specs.appendChild(baths);
        }
        
        const actions = document.createElement('div');
        actions.className = 'listing-actions';
        
        const viewBtn = document.createElement('button');
        viewBtn.className = 'btn btn-secondary';
        viewBtn.textContent = 'VIEW DETAILS';
        viewBtn.onclick = () => viewOverlayPropertyDetails(p.id);
        
        const waBtn = document.createElement('a');
        waBtn.className = 'btn btn-primary whatsapp-btn';
        waBtn.target = '_blank';
        waBtn.href = `https://wa.me/918928770059?text=I%20am%20interested%20in%20${encodeURIComponent(p.title)}%20at%20${encodeURIComponent(p.location)}`;
        waBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> ENQUIRE';
        
        actions.appendChild(viewBtn);
        actions.appendChild(waBtn);
        
        bodyWrap.appendChild(title);
        bodyWrap.appendChild(loc);
        bodyWrap.appendChild(desc);
        bodyWrap.appendChild(specs);
        bodyWrap.appendChild(actions);
        
        card.appendChild(imgWrap);
        card.appendChild(bodyWrap);
        
        gridContent.appendChild(card);
    });
    
    document.getElementById('view-categories').style.display = 'none';
    document.getElementById('view-details').style.display = 'none';
    document.getElementById('view-listings').style.display = 'block';
    const sc = document.querySelector('.overlay-scroll-container');
    if (sc) sc.scrollTop = 0;
}

function showOverlayListings() {
    document.getElementById('view-categories').style.display = 'none';
    document.getElementById('view-details').style.display = 'none';
    document.getElementById('view-listings').style.display = 'block';
    const sc = document.querySelector('.overlay-scroll-container');
    if (sc) sc.scrollTop = 0;
}

function viewOverlayPropertyDetails(propId) {
    const p = overlayActiveDb.find(item => item.id === propId);
    if (!p) return;
    
    const detailsContent = document.getElementById('details-container-content');
    if (!detailsContent) return;
    
    detailsContent.innerHTML = '';
    
    const mediaWrap = document.createElement('div');
    mediaWrap.className = 'details-media';
    mediaWrap.style.backgroundImage = `url('${p.image}')`;
    detailsContent.appendChild(mediaWrap);
    
    const infoWrap = document.createElement('div');
    infoWrap.className = 'details-info';
    
    // Header
    const headerWrap = document.createElement('div');
    headerWrap.className = 'details-header';
    
    const tag = document.createElement('span');
    tag.className = 'section-tag';
    tag.textContent = (p.specs && p.specs.Type) ? p.specs.Type : '';
    
    const title = document.createElement('h2');
    title.className = 'details-title';
    title.textContent = p.title;
    
    const loc = document.createElement('div');
    loc.className = 'listing-location';
    loc.style.fontSize = '1rem';
    loc.innerHTML = '<i class="fa-solid fa-location-dot"></i> ';
    loc.appendChild(document.createTextNode(p.location));
    
    const price = document.createElement('div');
    price.className = 'details-price';
    price.textContent = p.price;
    
    headerWrap.appendChild(tag);
    headerWrap.appendChild(title);
    headerWrap.appendChild(loc);
    headerWrap.appendChild(price);
    
    const desc = document.createElement('p');
    desc.className = 'details-desc';
    desc.textContent = p.desc;
    
    infoWrap.appendChild(headerWrap);
    infoWrap.appendChild(desc);
    
    // Spec grid
    const specGrid = document.createElement('div');
    specGrid.className = 'details-spec-grid';
    
    const createSpecBox = (label, val) => {
        const box = document.createElement('div');
        box.className = 'detail-spec-box';
        box.textContent = label + ' ';
        const strong = document.createElement('strong');
        strong.textContent = val;
        box.appendChild(strong);
        return box;
    };
    
    specGrid.appendChild(createSpecBox('Area Size', p.area));
    if (p.beds && p.beds !== 'N/A') specGrid.appendChild(createSpecBox('Configuration', p.beds));
    if (p.baths && p.baths !== 'N/A') specGrid.appendChild(createSpecBox('Bathrooms', p.baths));
    if (p.specs) {
        if (p.specs.Ownership) specGrid.appendChild(createSpecBox('Ownership', p.specs.Ownership));
        if (p.specs.Availability) specGrid.appendChild(createSpecBox('Possession', p.specs.Availability));
    }
    
    infoWrap.appendChild(specGrid);
    
    // Inquiry box
    const inquiryWrap = document.createElement('div');
    inquiryWrap.className = 'details-inquiry-box';
    
    const formTitle = document.createElement('h3');
    formTitle.style.color = '#ffffff';
    formTitle.style.marginBottom = '20px';
    formTitle.textContent = 'Send Portal Inquiry';
    inquiryWrap.appendChild(formTitle);
    
    const form = document.createElement('form');
    form.className = 'portal-form';
    form.onsubmit = (e) => submitOverlayInquiryForm(e, p.title);
    
    form.innerHTML = `
        <div class="form-group">
            <label>Your Name</label>
            <input type="text" required placeholder="John Doe">
        </div>
        <div class="form-group">
            <label>Phone Number</label>
            <input type="tel" required placeholder="+91 98765 43210">
        </div>
        <div class="form-group">
            <label>Inquiry Message</label>
            <textarea rows="3" required placeholder="Describe your requirement..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block">SUBMIT PORTAL INQUIRY</button>
    `;
    inquiryWrap.appendChild(form);
    
    const successMsg = document.createElement('div');
    successMsg.className = 'form-success-message';
    successMsg.id = 'portal-success-msg';
    successMsg.style.display = 'none';
    successMsg.style.marginTop = '20px';
    
    const checkIcon = document.createElement('i');
    checkIcon.className = 'fa-solid fa-circle-check';
    checkIcon.style.fontSize = '2rem';
    checkIcon.style.color = '#4caf50';
    checkIcon.style.marginBottom = '12px';
    
    const successH3 = document.createElement('h3');
    successH3.style.color = '#ffffff';
    successH3.textContent = 'Inquiry Submitted!';
    
    const successP = document.createElement('p');
    successP.style.color = 'rgba(255,255,255,0.7)';
    successP.style.marginBottom = '16px';
    successP.textContent = 'We will contact you shortly. You can also chat directly with us via WhatsApp.';
    
    const chatBtn = document.createElement('a');
    chatBtn.target = '_blank';
    chatBtn.className = 'btn btn-primary';
    chatBtn.style.display = 'inline-flex';
    chatBtn.style.alignItems = 'center';
    chatBtn.style.gap = '8px';
    chatBtn.href = `https://wa.me/918928770059?text=I%20am%20enquiring%20about%20${encodeURIComponent(p.title)}`;
    chatBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp';
    
    successMsg.appendChild(checkIcon);
    successMsg.appendChild(successH3);
    successMsg.appendChild(successP);
    successMsg.appendChild(chatBtn);
    
    inquiryWrap.appendChild(successMsg);
    infoWrap.appendChild(inquiryWrap);
    
    detailsContent.appendChild(infoWrap);
    
    document.getElementById('view-categories').style.display = 'none';
    document.getElementById('view-listings').style.display = 'none';
    document.getElementById('view-details').style.display = 'block';
    const sc = document.querySelector('.overlay-scroll-container');
    if (sc) sc.scrollTop = 0;
}

function submitOverlayInquiryForm(event, propTitle) {
    event.preventDefault();
    event.target.style.display = 'none';
    const successMsg = document.getElementById('portal-success-msg');
    if(successMsg) successMsg.style.display = 'block';
}

function renderHistoryTimeline(container) {
    const scrollContainer = document.querySelector('.overlay-scroll-container');
    if (scrollContainer) {
        scrollContainer.classList.add('white-theme');
    }
    // Static HTML is fine here since it doesn't process external untrusted data
    container.innerHTML = \`
        <div class="portal-hero white-hero">
            <div class="section-container">
                <h1 class="portal-page-title dark-text">Our History & Journey</h1>
                <p class="portal-page-subtitle dark-text">A timeline of trust, transparent consultancy, and unmatched service across Mumbai's real-estate sectors.</p>
            </div>
        </div>
        
        <div class="portal-section">
            <div class="section-container">
                <div class="history-timeline-spa">
                    <div class="timeline-spa-line"></div>
                    
                    <div class="timeline-spa-item left">
                        <div class="timeline-spa-dot"></div>
                        <div class="timeline-spa-card">
                            <span class="timeline-spa-date">2014</span>
                            <h3>Founding of Manka Realty</h3>
                            <p>Commenced operations as a local residential consultancy in Bandra West, focusing on premium rentals and home buyings. We started with a small office of just two consultants dedicated to absolute transparency.</p>
                        </div>
                    </div>
                    
                    <div class="timeline-spa-item right">
                        <div class="timeline-spa-dot"></div>
                        <div class="timeline-spa-card">
                            <span class="timeline-spa-date">2017</span>
                            <h3>Commercial Advisory Expansion</h3>
                            <p>Expanded our network to premium office spaces, corporate headquarters, and retail acquisitions in BKC, Lower Parel, and surrounding business districts. Formed key alliances with major developer groups.</p>
                        </div>
                    </div>
                    
                    <div class="timeline-spa-item left">
                        <div class="timeline-spa-dot"></div>
                        <div class="timeline-spa-card">
                            <span class="timeline-spa-date">2021</span>
                            <h3>Legal Support Cell</h3>
                            <p>Established an in-house legal support division to provide stress-free lease executions, agreement draftings, and absolute title checkups. This elevated our deal-closing success rate and trust levels.</p>
                        </div>
                    </div>
                    
                    <div class="timeline-spa-item right">
                        <div class="timeline-spa-dot"></div>
                        <div class="timeline-spa-card">
                            <span class="timeline-spa-date">Present</span>
                            <h3>Trusted Mumbai Advisors</h3>
                            <p>Now a leading RERA-authorized real-estate consultancy with over 12+ years of service, 500+ successful deals, and a client-first advisory model. Recognized as the first choice for premium HNIs and corporate rentals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    \`;
}

function renderPartnersGrid(container) {
    const scrollContainer = document.querySelector('.overlay-scroll-container');
    if (scrollContainer) {
        scrollContainer.classList.add('white-theme');
    }
    
    // Safety check if partnersDb exists
    const developers = typeof partnersDb !== 'undefined' && partnersDb.developers ? partnersDb.developers : [];
    const brands = typeof partnersDb !== 'undefined' && partnersDb.brands ? partnersDb.brands : [];

    let developersHtml = '';
    developers.forEach(p => {
        // Safe to interpolate if assuming partnersDb.html is static safe SVG/HTML strings from local data
        developersHtml += \`
            <div class="partner-logo-card">
                <div class="partner-logo-inner">
                    \${p.html}
                </div>
                <div class="partner-logo-title">\${p.title}</div>
            </div>\`;
    });

    let brandsHtml = '';
    brands.forEach(p => {
        brandsHtml += \`
            <div class="partner-logo-card">
                <div class="partner-logo-inner">
                    \${p.html}
                </div>
                <div class="partner-logo-title">\${p.title}</div>
            </div>\`;
    });

    container.innerHTML = \`
        <div class="portal-hero white-hero">
            <div class="section-container">
                <h1 class="portal-page-title dark-text">Authorized Partners & Brands</h1>
                <p class="portal-page-subtitle dark-text">We collaborate with Mumbai's most prestigious developers and leading national corporate networks.</p>
            </div>
        </div>
        
        <div class="portal-section white-section">
            <div class="section-container">
                <h2 class="section-title text-center dark-text" style="margin-bottom: 40px;">40+ Developer Partners</h2>
                <div class="partners-grid-spa">
                    \${developersHtml}
                </div>
                
                <h2 class="section-title text-center dark-text" style="margin-top: 80px; margin-bottom: 40px;">38+ Corporate Brands</h2>
                <div class="partners-grid-spa">
                    \${brandsHtml}
                </div>
            </div>
        </div>
    \`;
}
