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
        if (!header) return;
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    if (header) {
        window.addEventListener('scroll', toggleHeaderState);
        toggleHeaderState(); // Check on init
    }

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
                
                // Toggle matching View All Properties CTA button so it's 100% centered
                const ctaButtons = document.querySelectorAll('[data-cta]');
                ctaButtons.forEach(cta => {
                    if (cta.getAttribute('data-cta') === filterValue) {
                        cta.style.display = 'inline-flex';
                    } else {
                        cta.style.display = 'none';
                    }
                });

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
        if (!element) return;
        const targetAttr = element.getAttribute('data-target');
        if (!targetAttr) return;
        
        const isFloat = targetAttr.includes('.');
        const target = parseFloat(targetAttr);
        const prefix = element.getAttribute('data-prefix') || '';
        const suffix = element.getAttribute('data-suffix') || '';
        const duration = 1500;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Apply ease-out-cubic equivalent manually
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            let currentValue;
            if (isFloat) {
                currentValue = (easeProgress * target).toFixed(1);
            } else {
                currentValue = Math.floor(easeProgress * target);
            }
            
            element.textContent = prefix + currentValue + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = prefix + targetAttr + suffix;
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
    
    if (statNumbers.length > 0) {
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
    }

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
            if (!icon) return;
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
    
    if (svgLines && centerCircle) {
        window.addEventListener('resize', updateDiagramLines);
        window.addEventListener('scroll', updateDiagramLines);
        setTimeout(updateDiagramLines, 500);
    }

    /* ==========================================
       6. CONTACT FORM HANDLING
       ========================================== */
    const form = document.getElementById('property-form');
    const successMsg = document.getElementById('form-success');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameEl = document.getElementById('name');
            const phoneEl = document.getElementById('phone');
            const emailEl = document.getElementById('email');
            const interestEl = document.getElementById('interest');
            const intentEl = document.getElementById('intent');
            const timelineEl = document.getElementById('timeline');
            const budgetEl = document.getElementById('budget');
            const messageEl = document.getElementById('message');

            const name = nameEl ? nameEl.value.trim() : '';
            const phone = phoneEl ? phoneEl.value.trim() : '';
            const email = emailEl ? emailEl.value.trim() : '';
            
            let interest = '';
            if (interestEl && interestEl.options && interestEl.options.length > 0 && interestEl.selectedIndex >= 0) {
                interest = interestEl.options[interestEl.selectedIndex].text;
            }

            let intent = '';
            if (intentEl && intentEl.options && intentEl.options.length > 0 && intentEl.selectedIndex >= 0) {
                intent = intentEl.options[intentEl.selectedIndex].text;
            }

            let timeline = '';
            if (timelineEl && timelineEl.options && timelineEl.options.length > 0 && timelineEl.selectedIndex >= 0) {
                timeline = timelineEl.options[timelineEl.selectedIndex].text;
            }

            const budget = budgetEl ? budgetEl.value.trim() : '';
            const message = messageEl ? messageEl.value.trim() : '';

            let msg = `Hi Manka Realty, I'm ${name}.
`;
            msg += `Phone: ${phone}
`;
            if (email) msg += `Email: ${email}
`;
            if (interest) msg += `Property Interest: ${interest}
`;
            if (intent) msg += `Intent: ${intent}
`;
            if (timeline) msg += `Timeline: ${timeline}
`;
            if (budget) msg += `Budget: ${budget}
`;
            if (message) msg += `
Message: ${message}`;

            window.location.href = `https://wa.me/918928770059?text=${encodeURIComponent(msg)}`;
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
    
    if (reviewTabBtns.length > 0) {
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
    }

        /* ==========================================
       9. DYNAMIC ACTIVE NAV INDICATOR
       ========================================== */
            let currentPath = window.location.pathname.replace(/\/$/, ""); // Remove trailing slash
    if (!currentPath || currentPath === "") {
        currentPath = '/';
    }
    
    // First remove all active classes to be safe
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelectorAll('.dropdown-link').forEach(link => link.classList.remove('active'));

    // Highlight the correct main nav link or dropdown child
    let found = false;
    
    // Helper function to check if href matches current path
    const matchesPath = (href, path) => {
        if (!href) return false;
        // Exact match or matches the path (e.g. href="/about" matches path "/about" or "/about.html")
        // Also strip .html from path just in case
        const cleanPath = path.replace(/\.html$/, '');
        return href === cleanPath || href === cleanPath + '/';
    };
    
    // Check dropdown links first
    document.querySelectorAll('.dropdown-link').forEach(link => {
        const href = link.getAttribute('href');
        if (matchesPath(href, currentPath)) {
            link.classList.add('active');
            // Also highlight the parent PROPERTIES nav link
            const parentDropdownToggle = link.closest('.dropdown')?.querySelector('.dropdown-toggle');
            if (parentDropdownToggle) {
                parentDropdownToggle.classList.add('active');
            }
            found = true;
        }
    });

    // Check main nav links
    if (!found) {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (matchesPath(href, currentPath) && !link.classList.contains('dropdown-toggle')) {
                link.classList.add('active');
            }
        });
    }

    /* ==========================================
       10. GLOBAL SCROLL REVEAL (IntersectionObserver)
       ========================================== */
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
        });
        
        revealElements.forEach(el => revealObserver.observe(el));
    }
});

// Added for Mobile-First Pass: Close mobile nav when clicking outside
document.addEventListener('click', (e) => {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navMenu && mobileToggle && navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }

    /* ==========================================
       IN-PAGE PROPERTY FILTERING LOGIC
       ========================================== */
    const subTypeSelect = document.getElementById('filter-subtype');
    const listingTypeSelect = document.getElementById('filter-listing-type');
    const clearFiltersBtn = document.getElementById('clear-page-filters');
    const pageGridCards = document.querySelectorAll('.properties-grid-container .property-card');

    if (subTypeSelect && listingTypeSelect && pageGridCards.length > 0) {
        function applyInPageFilters() {
            const selectedSubtype = subTypeSelect.value;
            const selectedListingType = listingTypeSelect.value;

            pageGridCards.forEach(card => {
                const cardSubtype = card.getAttribute('data-subtype');
                const cardListingType = card.getAttribute('data-listing-type');

                const matchesSubtype = (selectedSubtype === 'all' || cardSubtype === selectedSubtype);
                const matchesListingType = (selectedListingType === 'all' || cardListingType === selectedListingType);

                if (matchesSubtype && matchesListingType) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        subTypeSelect.addEventListener('change', applyInPageFilters);
        listingTypeSelect.addEventListener('change', applyInPageFilters);

        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', () => {
                subTypeSelect.value = 'all';
                listingTypeSelect.value = 'all';
                applyInPageFilters();
            });
        }
    }
});
