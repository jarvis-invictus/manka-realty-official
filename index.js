/**
 * Manka Realty - Website Interactive Logic
 * - Premium Video Background setup
 * - Responsive Header Scroll states
 * - Mobile Slide-out Menu
 * - Scroll-triggered Stats Count-up
 * - Contact Form validation & transition
 * - Properties Carousel Autoplay Slider Loop
 * - Dynamic SVG diagram lines calculations (7 lines)
 * - Commitment & Team Panel Slide-down Expander
 * - Reviews Tab Switcher (Residential vs Commercial)
 * - Navigation Scrollspy (Active Indicator)
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. HEADER NAV STATE ON SCROLL
       ========================================== */
    const header = document.getElementById('header');
    
    function toggleHeaderState() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', toggleHeaderState);
    toggleHeaderState(); // Check on init

    /* ==========================================
       2. MOBILE MENU & CLICK ACTIVE TOGGLES
       ========================================== */
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    let isScrolling = false;
    let scrollTimeout;
    
    // Close menu when clicking link & toggle active class immediately
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Do not close mobile drawer or block events if this is a dropdown toggle trigger
            if (link.classList.contains('dropdown-toggle')) {
                return;
            }
            if (mobileToggle && navMenu) {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
            
            // Add active state to clicked link immediately and lock it
            isScrolling = true;
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Unlock scrollspy updates after smooth scrolling completes (1000ms offset)
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 1000);
        });
    });

    /* ==========================================
       3. PROPERTIES SHOWCASE LOOP CAROUSEL SLIDER
       ========================================== */
    const track = document.getElementById('properties-slider-track');
    const nextBtn = document.getElementById('slide-next');
    const prevBtn = document.getElementById('slide-prev');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const propertyCards = document.querySelectorAll('.property-card');
    
    let currentIndex = 0;
    
    function getVisibleCards() {
        return Array.from(propertyCards).filter(card => !card.classList.contains('hide'));
    }
    
    function updateSliderPosition() {
        if (!track) return;
        const visibleCards = getVisibleCards();
        if (visibleCards.length === 0) return;
        
        const cardWidth = visibleCards[0].offsetWidth;
        const gap = 30; // matching CSS gap
        const amountToMove = currentIndex * (cardWidth + gap);
        
        track.style.transform = `translateX(-${amountToMove}px)`;
    }
    
    // Only execute homepage-specific slider initialization if the track element is present
    if (track) {
        // Filter tabs click handlers (Category tabs)
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                track.style.opacity = '0.3';
                
                setTimeout(() => {
                    propertyCards.forEach(card => {
                        if (card.getAttribute('data-category') === filterValue) {
                            card.classList.remove('hide');
                        } else {
                            card.classList.add('hide');
                        }
                    });
                    
                    currentIndex = 0;
                    updateSliderPosition();
                    track.style.opacity = '1';
                }, 250);
            });
        });
        
        // Slide controls (Continuous Autoplay Loop)
        if (nextBtn && prevBtn) {
            let autoSlideInterval;

            function moveSliderNext() {
                const visibleCards = getVisibleCards();
                let cardsPerPage = window.innerWidth > 1200 ? 3 : (window.innerWidth > 992 ? 2 : 1);
                
                if (currentIndex < visibleCards.length - cardsPerPage) {
                    currentIndex++;
                } else {
                    currentIndex = 0; // Loop back to start
                }
                updateSliderPosition();
            }

            function moveSliderPrev() {
                const visibleCards = getVisibleCards();
                let cardsPerPage = window.innerWidth > 1200 ? 3 : (window.innerWidth > 992 ? 2 : 1);
                
                if (currentIndex > 0) {
                    currentIndex--;
                } else {
                    currentIndex = Math.max(0, visibleCards.length - cardsPerPage); // Loop to end
                }
                updateSliderPosition();
            }

            function startAutoSlide() {
                stopAutoSlide();
                autoSlideInterval = setInterval(moveSliderNext, 4200); // 3 seconds interval
            }

            function stopAutoSlide() {
                if (autoSlideInterval) {
                    clearInterval(autoSlideInterval);
                }
            }

            nextBtn.addEventListener('click', () => {
                moveSliderNext();
                startAutoSlide(); // Reset autoplay timer on manual click
            });
            
            prevBtn.addEventListener('click', () => {
                moveSliderPrev();
                startAutoSlide(); // Reset autoplay timer on manual click
            });

            // Initialize autoplay (continuous loop, no pause on hover to prevent stuck states!)
            startAutoSlide();
        }
        
        // Set default tab on init (Residential) on homepage
        propertyCards.forEach(card => {
            if (card.getAttribute('data-category') === 'residential') {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
        setTimeout(updateSliderPosition, 300); // init position layout
        window.addEventListener('resize', updateSliderPosition);
    }

    /* ==========================================
       4. SCROLL INTERSECTION & STATS ANIMATION
       ========================================== */
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'), 10);
        const duration = 1500;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeProgress = progress * (2 - progress);
            const currentValue = Math.floor(easeProgress * target);
            
            element.textContent = currentValue;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
    
    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    statNumbers.forEach(num => statsObserver.observe(num));

    /* ==========================================
       5. DYNAMIC DIAGRAM SVG LINES (Desktop Only - 7 Lines)
       ========================================== */
    const svgLines = document.getElementById('svg-lines');
    const centerCircle = document.querySelector('.circle-content-overlap');
    const featureCards = document.querySelectorAll('.feature-card');
    
    function updateDiagramLines() {
        if (window.innerWidth <= 992 || !svgLines || !centerCircle) return;
        
        const svgRect = svgLines.getBoundingClientRect();
        const centerRect = centerCircle.getBoundingClientRect();
        
        const cx = (centerRect.left + centerRect.width / 2) - svgRect.left;
        const cy = (centerRect.top + centerRect.height / 2) - svgRect.top;
        const radius = centerRect.width / 2;
        
        featureCards.forEach((card, index) => {
            const line = document.getElementById(`line${index + 1}`);
            if (!line) return;
            
            const icon = card.querySelector('.feature-icon');
            const iconRect = icon.getBoundingClientRect();
            
            const targetX = iconRect.left - svgRect.left + (iconRect.width / 2);
            const targetY = iconRect.top - svgRect.top + (iconRect.height / 2);
            
            const angle = Math.atan2(targetY - cy, targetX - cx);
            
            const startX = cx + radius * Math.cos(angle);
            const startY = cy + radius * Math.sin(angle);
            
            line.setAttribute('x1', startX);
            line.setAttribute('y1', startY);
            line.setAttribute('x2', targetX);
            line.setAttribute('y2', targetY);
        });
    }
    
    window.addEventListener('resize', updateDiagramLines);
    window.addEventListener('scroll', updateDiagramLines);
    setTimeout(updateDiagramLines, 500);

    /* ==========================================
       6. CONTACT FORM HANDLING
       ========================================== */
    const form = document.getElementById('property-form');
    const successMsg = document.getElementById('form-success');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                interest: document.getElementById('interest').value,
                message: document.getElementById('message').value
            };
            
            console.log('Form submission received:', formData);
            
            form.style.opacity = '0';
            setTimeout(() => {
                form.style.display = 'none';
                successMsg.classList.add('active');
            }, 300);
        });
    }

    /* ==========================================
       7. PROPERTIES DROPDOWN TOGGLER & LOGIC
       ========================================== */
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownLi = document.querySelector('li.dropdown');

    if (dropdownToggle && dropdownMenu && dropdownLi) {
        // Tapping PROPERTIES on mobile expands/collapses the dropdown menu
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropdownLi.classList.toggle('active');
            dropdownMenu.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdownLi.contains(e.target)) {
                dropdownLi.classList.remove('active');
                dropdownMenu.classList.remove('active');
            }
        });
    }

    /* ==========================================
       8. REVIEWS TAB SWITCHER (Residential vs Commercial)
       ========================================== */
    const reviewTabBtns = document.querySelectorAll('.review-tab-btn');
    const reviewCards = document.querySelectorAll('.review-card');
    
    reviewTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            reviewTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const selectedType = btn.getAttribute('data-type');
            const gridTrack = document.getElementById('reviews-grid-track');
            
            if (gridTrack) {
                gridTrack.style.opacity = '0.3';
                
                setTimeout(() => {
                    reviewCards.forEach(card => {
                        if (card.getAttribute('data-category') === selectedType) {
                            card.classList.remove('hide');
                        } else {
                            card.classList.add('hide');
                        }
                    });
                    gridTrack.style.opacity = '1';
                }, 200);
            }
        });
    });
    
    // Set default reviews on init (Residential)
    reviewCards.forEach(card => {
        if (card.getAttribute('data-category') === 'residential') {
            card.classList.remove('hide');
        } else {
            card.classList.add('hide');
        }
    });

    /* ==========================================
       9. NAVIGATION SCROLLSPY (Active Indicator - Filtered)
       ========================================== */
    const sections = document.querySelectorAll('section[id="hero"], section[id="showcase"], section[id="about"], section[id="choose-us"], section[id="expertise"], section[id="contact"]');
    
    function scrollSpyActiveState() {
        if (isScrolling) return; // Skip updating active classes while programmatically scrolling
        
        const scrollPosition = window.scrollY + 120; // offset
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const hrefAttr = link.getAttribute('href');
                    if (hrefAttr === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', scrollSpyActiveState);
    scrollSpyActiveState();
});


/* ==========================================
   9. FULLSCREEN SPA PORTAL CONTROLLER
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
    overlayActiveDb = isRes ? residentialPropertiesDb : commercialPropertiesDb;
    const categories = isRes ? residentialCategories : commercialCategories;
    
    const titleText = isRes ? "Residential Property Portal" : "Commercial Property Portal";
    const subtitleText = isRes 
        ? "Browse premium luxury apartments, plots, villas, and independent houses across Mumbai." 
        : "Discover premium grade-A office spaces, retail shops, showrooms, and warehouse hubs.";

    let categoriesHtml = '';
    categories.forEach(c => {
        categoriesHtml += `
            <div class="category-card" onclick="showOverlayCategory('${c.id}', '${c.name}')">
                <div class="category-card-image" style="background-image: url('${c.image}')">
                    <div class="category-card-overlay"></div>
                </div>
                <div class="category-card-body">
                    <h3>${c.name}</h3>
                    <p>${c.desc}</p>
                    <span class="category-card-link">View Listings &nbsp;&rarr;</span>
                </div>
            </div>`;
    });

    container.innerHTML = `
        <div class="portal-hero">
            <div class="section-container">
                <h1 class="portal-page-title">${titleText}</h1>
                <p class="portal-page-subtitle">${subtitleText}</p>
            </div>
        </div>
        <div class="portal-section">
            <div class="section-container">
                <!-- VIEW 1: Categories View -->
                <div id="view-categories" class="view-block">
                    <div class="categories-grid">
                        ${categoriesHtml}
                    </div>
                </div>
                
                <!-- VIEW 2: Listings View -->
                <div id="view-listings" class="view-block" style="display: none;">
                    <button class="back-button" onclick="showOverlayCategories()"><i class="fa-solid fa-arrow-left"></i> Back to Categories</button>
                    <h2 id="listings-title" class="section-title" style="margin-bottom: 30px; color: #ffffff;">Properties</h2>
                    <div class="listings-grid" id="listings-grid-content"></div>
                </div>

                <!-- VIEW 3: Details View -->
                <div id="view-details" class="view-block" style="display: none;">
                    <button class="back-button" onclick="showOverlayListings()"><i class="fa-solid fa-arrow-left"></i> Back to Listings</button>
                    <div class="details-container" id="details-container-content"></div>
                </div>
            </div>
        </div>
    `;
}

function showOverlayCategories() {
    document.getElementById('view-listings').style.display = 'none';
    document.getElementById('view-details').style.display = 'none';
    document.getElementById('view-categories').style.display = 'block';
    document.querySelector('.overlay-scroll-container').scrollTop = 0;
}

function showOverlayCategory(catId, catName) {
    overlayCurrentCategory = catId;
    overlayCurrentCategoryName = catName;
    
    const filtered = overlayActiveDb.filter(p => p.category === catId);
    const gridContent = document.getElementById('listings-grid-content');
    
    document.getElementById('listings-title').textContent = catName + " Listings";
    gridContent.innerHTML = '';
    
    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'listing-card';
        card.innerHTML = `
            <div class="listing-img-wrapper" style="background-image: url('${p.image}')">
                <span class="listing-price-tag">${p.price}</span>
            </div>
            <div class="listing-body">
                <h3 class="listing-title">${p.title}</h3>
                <div class="listing-location"><i class="fa-solid fa-location-dot"></i> ${p.location}</div>
                <p class="listing-desc">${p.desc}</p>
                <div class="listing-specs">
                    <div class="listing-spec-item"><i class="fa-solid fa-maximize"></i> ${p.area}</div>
                    ${ p.beds && p.beds !== 'N/A' ? `<div class="listing-spec-item"><i class="fa-solid fa-bed"></i> ${p.beds}</div>` : '' }
                    ${ p.baths && p.baths !== 'N/A' ? `<div class="listing-spec-item"><i class="fa-solid fa-bath"></i> ${p.baths}</div>` : '' }
                </div>
                <div class="listing-actions">
                    <button class="btn btn-secondary" onclick="viewOverlayPropertyDetails('${p.id}')">VIEW DETAILS</button>
                    <a href="https://wa.me/918928770059?text=I%20am%20interested%20in%20${encodeURIComponent(p.title)}%20at%20${encodeURIComponent(p.location)}" target="_blank" class="btn btn-primary whatsapp-btn">
                        <i class="fa-brands fa-whatsapp"></i> ENQUIRE
                    </a>
                </div>
            </div>
        `;
        gridContent.appendChild(card);
    });
    
    document.getElementById('view-categories').style.display = 'none';
    document.getElementById('view-details').style.display = 'none';
    document.getElementById('view-listings').style.display = 'block';
    document.querySelector('.overlay-scroll-container').scrollTop = 0;
}

function showOverlayListings() {
    document.getElementById('view-categories').style.display = 'none';
    document.getElementById('view-details').style.display = 'none';
    document.getElementById('view-listings').style.display = 'block';
    document.querySelector('.overlay-scroll-container').scrollTop = 0;
}

function viewOverlayPropertyDetails(propId) {
    const p = overlayActiveDb.find(item => item.id === propId);
    if (!p) return;
    
    const detailsContent = document.getElementById('details-container-content');
    detailsContent.innerHTML = `
        <div class="details-media" style="background-image: url('${p.image}')"></div>
        <div class="details-info">
            <div class="details-header">
                <span class="section-tag">${p.specs.Type}</span>
                <h2 class="details-title">${p.title}</h2>
                <div class="listing-location" style="font-size: 1rem;"><i class="fa-solid fa-location-dot"></i> ${p.location}</div>
                <div class="details-price">${p.price}</div>
            </div>
            
            <p class="details-desc">${p.desc}</p>
            
            <div class="details-spec-grid">
                <div class="detail-spec-box">Area Size <strong>${p.area}</strong></div>
                ${ p.beds && p.beds !== 'N/A' ? `<div class="detail-spec-box">Configuration <strong>${p.beds}</strong></div>` : '' }
                ${ p.baths && p.baths !== 'N/A' ? `<div class="detail-spec-box">Bathrooms <strong>${p.baths}</strong></div>` : '' }
                <div class="detail-spec-box">Ownership <strong>${p.specs.Ownership}</strong></div>
                <div class="detail-spec-box">Possession <strong>${p.specs.Availability}</strong></div>
            </div>
            
            <div class="details-inquiry-box">
                <h3 style="color: #ffffff; margin-bottom: 20px;">Send Portal Inquiry</h3>
                <form class="portal-form" onsubmit="submitOverlayInquiryForm(event, '${p.title}')">
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
                </form>
                <div class="form-success-message" id="portal-success-msg" style="display: none; margin-top: 20px;">
                    <i class="fa-solid fa-circle-check" style="font-size: 2rem; color: #4caf50; margin-bottom: 12px;"></i>
                    <h3 style="color: #ffffff;">Inquiry Submitted!</h3>
                    <p style="color: rgba(255,255,255,0.7); margin-bottom: 16px;">We will contact you shortly. You can also chat directly with us via WhatsApp.</p>
                    <a href="https://wa.me/918928770059?text=I%20am%20enquiring%20about%20${encodeURIComponent(p.title)}" target="_blank" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 8px;">
                        <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('view-categories').style.display = 'none';
    document.getElementById('view-listings').style.display = 'none';
    document.getElementById('view-details').style.display = 'block';
    document.querySelector('.overlay-scroll-container').scrollTop = 0;
}

function submitOverlayInquiryForm(event, propTitle) {
    event.preventDefault();
    event.target.style.display = 'none';
    document.getElementById('portal-success-msg').style.display = 'block';
}

function renderHistoryTimeline(container) {
    const scrollContainer = document.querySelector('.overlay-scroll-container');
    if (scrollContainer) {
        scrollContainer.classList.add('white-theme');
    }
    container.innerHTML = `
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
    `;
}

function renderPartnersGrid(container) {
    const scrollContainer = document.querySelector('.overlay-scroll-container');
    if (scrollContainer) {
        scrollContainer.classList.add('white-theme');
    }

    let developersHtml = '';
    partnersDb.developers.forEach(p => {
        developersHtml += `
            <div class="partner-logo-card">
                <div class="partner-logo-inner">
                    ${p.html}
                </div>
                <div class="partner-logo-title">${p.title}</div>
            </div>`;
    });

    let brandsHtml = '';
    partnersDb.brands.forEach(p => {
        brandsHtml += `
            <div class="partner-logo-card">
                <div class="partner-logo-inner">
                    ${p.html}
                </div>
                <div class="partner-logo-title">${p.title}</div>
            </div>`;
    });

    container.innerHTML = `
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
                    ${developersHtml}
                </div>
                
                <h2 class="section-title text-center dark-text" style="margin-top: 80px; margin-bottom: 40px;">38+ Corporate Brands</h2>
                <div class="partners-grid-spa">
                    ${brandsHtml}
                </div>
            </div>
        </div>
    `;
}
