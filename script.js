// Lazy loading for hero images
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('.hero-slide.lazy');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize AOS (Animate On Scroll) with fallback
try {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
} catch (error) {
    console.log('AOS not available, ensuring content is visible');
    // Fallback: ensure all content is visible
    document.querySelectorAll('[data-aos]').forEach(element => {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        element.style.transform = 'none';
    });
}

// Check if booking modal exists
document.addEventListener('DOMContentLoaded', function() {
    // Initialize lazy loading for hero images
    initLazyLoading();
    
    const modal = document.getElementById('bookingModal');
    if (modal) {
        console.log('✅ Booking modal found in HTML');
    } else {
        console.error('❌ Booking modal not found in HTML');
    }
    
    const buttons = document.querySelectorAll('.book-tour-btn');
    console.log(`Found ${buttons.length} Book Now buttons`);
});

// Force remove any search overlays
function removeSearchOverlays() {
    const searchElements = document.querySelectorAll('.search-overlay, .search-container, [class*="search"], [id*="search"]');
    searchElements.forEach(element => {
        if (element && element.parentNode) {
            element.parentNode.removeChild(element);
        }
    });
    
    // Also remove any elements containing the specific text
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        if (element.textContent && element.textContent.includes('Find Your Dream Job or Adventure')) {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }
    });
}

// Initialize modal state on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize booking modal elements
    bookingModal = document.getElementById('bookingModal');
    modalClose = document.getElementById('modalClose');
    bookingForm = document.getElementById('bookingForm');
    
    // Remove search overlays immediately
    removeSearchOverlays();
    
    // Remove search overlays periodically to catch any dynamically created ones
    setInterval(removeSearchOverlays, 500);
    
    // Force visibility of all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'block';
        section.style.visibility = 'visible';
        section.style.opacity = '1';
    });
    
    // Force visibility of all containers
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'block';
        container.style.visibility = 'visible';
        container.style.opacity = '1';
    });
    
    // Force visibility of all text content
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div').forEach(element => {
        element.style.visibility = 'visible';
        element.style.opacity = '1';
    });
    
    // Force visibility of all images
    document.querySelectorAll('img').forEach(img => {
        img.style.display = 'block';
        img.style.visibility = 'visible';
        img.style.opacity = '1';
    });
    
    // Initialize booking modal functionality
    initializeBookingModal();
});

// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const searchToggle = document.getElementById('searchToggle');
// const searchOverlay = document.getElementById('searchOverlay'); // Temporarily removed
const searchClose = document.getElementById('searchClose');
// const searchInput = document.getElementById('searchInput'); // Removed
const heroSearch = document.getElementById('heroSearch');
const cvForm = document.getElementById('cvForm');
const contactForm = document.getElementById('contactForm');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevTestimonial = document.getElementById('prevTestimonial');
const nextTestimonial = document.getElementById('nextTestimonial');
const testimonialDots = document.querySelectorAll('.dot');

// Floating Action Button Functionality
const fabMain = document.getElementById('fabMain');
const fabContainer = document.querySelector('.fab-container');

if (fabMain) {
    fabMain.addEventListener('click', () => {
        fabContainer.classList.toggle('active');
        fabMain.classList.toggle('active');
    });
}

// Handle FAB option clicks
document.querySelectorAll('.fab-option').forEach(option => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = option.getAttribute('data-action');
        
        switch(action) {
            case 'cv-upload':
                // Scroll to CV upload section
                document.getElementById('recruitment').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                break;
            case 'contact':
                // Scroll to contact section
                document.getElementById('contact').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                break;
            case 'search':
                // Open search overlay - Completely removed
                // document.getElementById('searchOverlay').classList.add('active');
                // document.getElementById('searchInput').focus();
                break;
            case 'whatsapp':
                // Open WhatsApp
                window.open('https://wa.me/27112345678', '_blank');
                break;
        }
        
        // Close FAB
        fabContainer.classList.remove('active');
        fabMain.classList.remove('active');
    });
});

// Close FAB when clicking outside
document.addEventListener('click', (e) => {
    if (fabContainer && !fabContainer.contains(e.target)) {
        fabContainer.classList.remove('active');
        if (fabMain) fabMain.classList.remove('active');
    }
});

// Global Variables
let heroSlideIndex = 0;
let heroSlides = document.querySelectorAll('.hero-slide');
let searchTimeout;

// Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Search Overlay - Temporarily Removed
/*
searchToggle.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    searchInput.focus();
});

searchClose.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
});

// Close search overlay when clicking outside
searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
    }
});
*/

// Search functionality - Temporarily Removed
/*
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const query = e.target.value.toLowerCase();
        performSearch(query);
    }, 300);
});

heroSearch.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const query = e.target.value.toLowerCase();
        performSearch(query);
    }, 300);
});
*/

function performSearch(query) {
    // Search through destinations, tours, and content
    const searchResults = [];
    
    // Search destinations
    const destinations = document.querySelectorAll('.destination-card');
    destinations.forEach(dest => {
        const title = dest.querySelector('h4').textContent.toLowerCase();
        if (title.includes(query)) {
            searchResults.push({
                type: 'destination',
                element: dest,
                title: dest.querySelector('h4').textContent
            });
        }
    });
    
    // Search tours
    const tours = document.querySelectorAll('.tour-card');
    tours.forEach(tour => {
        const title = tour.querySelector('h3').textContent.toLowerCase();
        const destination = tour.querySelector('.tour-destination').textContent.toLowerCase();
        if (title.includes(query) || destination.includes(query)) {
            searchResults.push({
                type: 'tour',
                element: tour,
                title: tour.querySelector('h3').textContent
            });
        }
    });
    
    // Highlight search results
    highlightSearchResults(searchResults);
}

function highlightSearchResults(results) {
    // Remove previous highlights
    document.querySelectorAll('.search-highlight').forEach(el => {
        el.classList.remove('search-highlight');
    });
    
    // Add highlights to new results
    results.forEach(result => {
        result.element.classList.add('search-highlight');
    });
}

// Destination suggestions - Temporarily Removed
/*
document.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
        const destination = item.dataset.destination;
        searchOverlay.classList.remove('active');
        scrollToDestination(destination);
    });
});
*/

function scrollToDestination(destination) {
    const element = document.querySelector(`[data-destination="${destination}"]`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Hero Slideshow
function startHeroSlideshow() {
    setInterval(() => {
        heroSlides[heroSlideIndex].classList.remove('active');
        heroSlideIndex = (heroSlideIndex + 1) % heroSlides.length;
        heroSlides[heroSlideIndex].classList.add('active');
    }, 5000);
}

// Enhanced Hero Slideshow
function startHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Booking Modal Variables
let bookingModal, modalClose, bookingForm;
let selectedTour = '';
let selectedPrice = 0;
let selectedDuration = 0;

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    // Remove active class from all dots
    document.querySelectorAll('.dot').forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show current testimonial
    testimonials[index].classList.add('active');
    
    // Activate corresponding dot
    document.querySelectorAll('.dot')[index].classList.add('active');
}

// Next testimonial
nextTestimonial.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
});

// Previous testimonial
prevTestimonial.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonial);
});

// Dot navigation
testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

// Auto-advance testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
}, 5000);

// Initialize Booking Modal Functionality
function initializeBookingModal() {
    if (!bookingModal || !modalClose || !bookingForm) {
        console.error('Booking modal elements not found');
        return;
    }
    
    // Book tour button click
    document.querySelectorAll('.book-tour-btn').forEach(button => {
        button.addEventListener('click', function() {
            console.log('Book Now button clicked!'); // Debug log
            selectedTour = this.getAttribute('data-tour');
            selectedPrice = parseInt(this.getAttribute('data-price'));
            selectedDuration = this.getAttribute('data-duration');
            
            console.log('Selected tour:', selectedTour, 'Price:', selectedPrice, 'Duration:', selectedDuration); // Debug log
            
            // Update modal content
            document.getElementById('selectedTour').textContent = selectedTour;
            document.getElementById('tourPrice').textContent = `Price: $${selectedPrice}`;
            document.getElementById('tourDuration').textContent = `Duration: ${selectedDuration}`;
            
            // Set minimum date to today
            const today = new Date().toISOString().split('T')[0];
            document.querySelector('input[name="startDate"]').min = today;
            
            // Calculate initial total
            updateTotal();
            
            // Show modal
            bookingModal.classList.add('active');
            console.log('Modal should be visible now'); // Debug log
        });
    });

    // Close modal
    modalClose.addEventListener('click', closeBookingModal);
    
    // Close modal when clicking outside
    bookingModal.addEventListener('click', function(e) {
        if (e.target === bookingModal) {
            closeBookingModal();
        }
    });

    // Update total when number of people changes
    const peopleInput = document.querySelector('input[name="people"]');
    if (peopleInput) {
        peopleInput.addEventListener('change', updateTotal);
    }
    
    // Update end date when start date changes
    const startDateInput = document.querySelector('input[name="startDate"]');
    if (startDateInput) {
        startDateInput.addEventListener('change', updateEndDate);
    }
    
    // Form submission
    bookingForm.addEventListener('submit', handleBookingSubmit);
    
    console.log('Booking modal initialized successfully'); // Debug log
}

function closeBookingModal() {
    if (bookingModal) {
        bookingModal.classList.remove('active');
    }
}

// Test function to manually open modal (for debugging)
function testBookingModal() {
    console.log('Testing booking modal...');
    if (bookingModal) {
        bookingModal.classList.add('active');
        console.log('Modal opened manually');
    } else {
        console.error('Modal element not found');
    }
}

// Make test function globally available
window.testBookingModal = testBookingModal;

function updateTotal() {
    const people = parseInt(document.querySelector('input[name="people"]').value) || 1;
    const total = selectedPrice * people;
    document.getElementById('totalAmount').textContent = `$${total.toLocaleString()}`;
}

function updateEndDate() {
    const startDate = document.querySelector('input[name="startDate"]').value;
    if (startDate) {
        const start = new Date(startDate);
        const duration = parseInt(selectedDuration);
        const end = new Date(start);
        end.setDate(start.getDate() + duration);
        
        const endDateInput = document.querySelector('input[name="endDate"]');
        endDateInput.value = end.toISOString().split('T')[0];
    }
}

function handleBookingSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(bookingForm);
    const bookingData = {
        tour: selectedTour,
        price: selectedPrice,
        duration: selectedDuration,
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        people: formData.get('people'),
        startDate: formData.get('startDate'),
        endDate: formData.get('endDate'),
        specialRequests: formData.get('specialRequests'),
        totalAmount: selectedPrice * parseInt(formData.get('people'))
    };
    
    // Initialize Paystack payment
    initializePayment(bookingData);
}

function initializePayment(bookingData) {
    const submitBtn = document.querySelector('#bookingForm button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    // Generate unique reference
    const reference = 'BOOK_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    fetch('/api/payment/initialize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: bookingData.email,
            amount: bookingData.totalAmount,
            reference: reference,
            payment_for: `Tour Booking: ${bookingData.tour}`
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to Paystack payment page
            window.location.href = data.data.authorization_url;
        } else {
            throw new Error('Payment initialization failed');
        }
    })
    .catch(error => {
        console.error('Payment Error:', error);
        showNotification('Payment initialization failed. Please try again.', 'error');
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

// Simple booking button handler
document.addEventListener('click', function(e) {
    // Handle Book Now button clicks
    if (e.target && e.target.classList && e.target.classList.contains('book-tour-btn')) {
        console.log('Book Now button clicked!');
        
        // Get tour data
        const tour = e.target.getAttribute('data-tour') || 'Tour';
        const price = parseInt(e.target.getAttribute('data-price')) || 0;
        const duration = e.target.getAttribute('data-duration') || '0 Days';
        
        console.log('Tour data:', { tour, price, duration });
        
        // Update modal content
        const tourElement = document.getElementById('selectedTour');
        const priceElement = document.getElementById('tourPrice');
        const durationElement = document.getElementById('tourDuration');
        
        if (tourElement) tourElement.textContent = tour;
        if (priceElement) priceElement.textContent = `Price: $${price}`;
        if (durationElement) durationElement.textContent = `Duration: ${duration}`;
        
        // Show modal
        const modal = document.getElementById('bookingModal');
        if (modal) {
            modal.classList.add('active');
            console.log('Modal opened successfully');
        } else {
            console.error('Modal element not found');
        }
    }
    
    // Handle modal close button
    if (e.target && (e.target.id === 'modalClose' || e.target.classList.contains('modal-close'))) {
        const modal = document.getElementById('bookingModal');
        if (modal) {
            modal.classList.remove('active');
            console.log('Modal closed');
        }
    }
    
    // Handle clicking outside modal to close
    if (e.target && e.target.id === 'bookingModal') {
        e.target.classList.remove('active');
        console.log('Modal closed by clicking outside');
    }
});



// Form Submissions
cvForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm(cvForm, 'CV Application submitted successfully! We\'ll contact you within 24 hours.');
});

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitForm(contactForm, 'Message sent successfully!');
    });
}

// bookingForm.addEventListener('submit', (e) => { // Temporarily removed
//     e.preventDefault();
//     submitForm(bookingForm, 'Booking request submitted successfully!');
//     bookingModal.classList.remove('active');
// });

function submitForm(form, successMessage) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    
    // Simulate form submission
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Show success message
        showNotification(successMessage, 'success');
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
    }, 2000);
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.tour-card, .destination-card, .feature-card').forEach(el => {
    observer.observe(el);
});

// Lazy Loading for Images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Animated Counters for Statistics
function animateCounters() {
    const counters = document.querySelectorAll('.statistics .stat-number[data-target]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        if (isNaN(target)) return; // Skip if no valid target
        
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (target === 98 ? '%' : '+');
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer for Statistics Animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe statistics section
const statsSection = document.querySelector('.statistics');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Tour Card Interactions
document.querySelectorAll('.tour-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Destination Card Interactions
document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('click', () => {
        const destination = card.dataset.destination;
        // Navigate to destination page or show details
        console.log(`Navigating to ${destination}`);
    });
});

// Destination Modal Functionality - Temporarily Removed
/*
// Enhanced Destination Card Interactions
document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('click', function() {
        const destination = this.getAttribute('data-destination');
        // Add smooth scroll to destination section or show modal
        showDestinationModal(destination);
    });
});

function showDestinationModal(destination) {
    const destinations = {
        'malaysia': {
            name: 'Malaysia',
            description: 'A vibrant country known for its cultural diversity, modern cities, and booming tech sector.',
            jobs: ['Software Engineer', 'Data Analyst', 'Marketing Manager', 'Finance Specialist'],
            image: 'Web images /Malaysia_Arch Print_12.jpg'
        },
        'malaysia-kl': {
            name: 'Kuala Lumpur',
            description: 'The capital city of Malaysia, a modern metropolis with a thriving financial district and tech scene.',
            jobs: ['Financial Analyst', 'Tech Consultant', 'Business Development', 'Project Manager'],
            image: 'Web images /Malaysia_Arch Print_22.jpg'
        },
        'malaysia-penang': {
            name: 'Penang',
            description: 'A tech hub and manufacturing center known for its innovation and cultural heritage.',
            jobs: ['Manufacturing Engineer', 'Software Developer', 'Quality Assurance', 'Supply Chain Manager'],
            image: 'Web images /Malaysia_Arch Print_37.jpg'
        },
        'malaysia-langkawi': {
            name: 'Langkawi',
            description: 'A beautiful island destination perfect for tourism and hospitality careers.',
            jobs: ['Hotel Manager', 'Tourism Coordinator', 'Event Planner', 'Customer Service'],
            image: 'Web images /Malaysia_Arch Print_41.jpg'
        },
        'sri-lanka': {
            name: 'Sri Lanka',
            description: 'An island nation with rich history, beautiful landscapes, and growing tourism industry.',
            jobs: ['Tourism Manager', 'IT Consultant', 'Healthcare Professional', 'Education Specialist'],
            image: 'Web images /Sri Lanka_Arch Print_52-topaz-low resolution-4x.jpg'
        },
        'thailand': {
            name: 'Thailand',
            description: 'Known for its hospitality, beautiful beaches, and strong education sector.',
            jobs: ['English Teacher', 'Tourism Coordinator', 'Digital Marketing', 'Business Analyst'],
            image: 'Web images /IMG_5181.jpg'
        },
        'philippines': {
            name: 'Philippines',
            description: 'A rapidly growing economy with strong BPO and tech services sectors.',
            jobs: ['Customer Service', 'Software Developer', 'Content Writer', 'Virtual Assistant'],
            image: 'Web images /IMG_0728-Pano.jpg'
        },
        'vietnam': {
            name: 'Vietnam',
            description: 'A dynamic economy with manufacturing and technology opportunities.',
            jobs: ['Manufacturing Engineer', 'Tech Support', 'Sales Representative', 'Project Manager'],
            image: 'Web images /IMG_1517.jpg'
        },
        'indonesia': {
            name: 'Indonesia',
            description: 'Southeast Asia\'s largest economy with diverse opportunities.',
            jobs: ['E-commerce Specialist', 'Tourism Guide', 'Digital Marketing', 'Business Development'],
            image: 'Web images /IMG_3319.jpg'
        }
    };
    
    const dest = destinations[destination];
    if (!dest) return;
    
    // Create and show modal
    const modal = document.createElement('div');
    modal.className = 'destination-modal';
    modal.innerHTML = `
        <div class="destination-modal-content">
            <div class="destination-modal-header">
                <h2>${dest.name}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="destination-modal-body">
                <div class="destination-modal-image">
                    <img src="${dest.image}" alt="${dest.name}">
                </div>
                <div class="destination-modal-info">
                    <p>${dest.description}</p>
                    <h3>Popular Job Opportunities:</h3>
                    <ul>
                        ${dest.jobs.map(job => `<li><i class="fas fa-briefcase"></i> ${job}</li>`).join('')}
                    </ul>
                    <button class="btn btn-primary">Apply for Jobs in ${dest.name}</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Show modal
    setTimeout(() => modal.classList.add('show'), 10);
    
    // Close modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('modal-close')) {
            modal.classList.remove('show');
            setTimeout(() => document.body.removeChild(modal), 300);
        }
    });
}

// Add CSS for destination modal
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .destination-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .destination-modal.show {
        opacity: 1;
    }
    
    .destination-modal-content {
        background: white;
        border-radius: 20px;
        max-width: 800px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        transform: scale(0.8);
        transition: transform 0.3s ease;
    }
    
    .destination-modal.show .destination-modal-content {
        transform: scale(1);
    }
    
    .destination-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 2rem 1rem;
        border-bottom: 1px solid #eee;
    }
    
    .destination-modal-header h2 {
        margin: 0;
        color: var(--text-dark);
    }
    
    .modal-close {
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: var(--text-light);
    }
    
    .destination-modal-body {
        padding: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
    
    .destination-modal-image img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        border-radius: 15px;
    }
    
    .destination-modal-info h3 {
        margin: 1.5rem 0 1rem;
        color: var(--text-dark);
    }
    
    .destination-modal-info ul {
        list-style: none;
        padding: 0;
        margin-bottom: 2rem;
    }
    
    .destination-modal-info li {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
        color: var(--text-dark);
    }
    
    .destination-modal-info li i {
        color: var(--primary-color);
        margin-right: 0.5rem;
    }
    
    @media (max-width: 768px) {
        .destination-modal-body {
            grid-template-columns: 1fr;
        }
    }
`;
document.head.appendChild(modalStyles);
*/

// File Upload Preview
document.getElementById('cvFile').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const label = e.target.parentElement.querySelector('span');
    
    if (file) {
        label.textContent = file.name;
        label.style.color = '#2c5aa0';
    } else {
        label.textContent = 'Upload CV (PDF, DOC, DOCX)';
        label.style.color = '#7f8c8d';
    }
});

// Search Suggestions
const searchSuggestions = [
    'Malaysia Classic Tour',
    'Sri Lanka Adventure',
    'Thailand Cultural Tour',
            'Philippines Island Adventure',
    'Vietnam Food Tour',
    'Software Engineering Jobs',
    'Teaching Opportunities',
    'Healthcare Careers'
];

// Search Suggestions Functionality - Temporarily Removed
/*
function showSearchSuggestions(query) {
    const suggestions = searchSuggestions.filter(suggestion => 
        suggestion.toLowerCase().includes(query.toLowerCase())
    );
    
    // Update suggestions display
    const suggestionsContainer = document.querySelector('.search-suggestions');
    if (suggestionsContainer && suggestions.length > 0) {
        suggestionsContainer.innerHTML = `
            <div class="suggestion-category">
                <h4>Quick Search</h4>
                <div class="suggestion-items">
                    ${suggestions.slice(0, 6).map(suggestion => `
                        <div class="suggestion-item" onclick="// searchInput.value='${suggestion}'; performSearch('${suggestion}')">
                            <i class="fas fa-search"></i>
                            <span>${suggestion}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

// Enhanced search with suggestions - Completely removed
// searchInput.addEventListener('input', (e) => {
//     const query = e.target.value;
//     if (query.length > 2) {
//         showSearchSuggestions(query);
//     }
// });

// Enhanced Search Functionality - Completely removed
// if (searchInput) {
//     searchInput.addEventListener('input', debounce((e) => {
//         const query = e.target.value.toLowerCase();
//         showSearchSuggestions(query);
//     }, 300));
// }

function showSearchSuggestions(query) {
    const suggestions = document.querySelectorAll('.suggestion-item');
    
    suggestions.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query) || query.length === 0) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}
*/

// Enhanced Form Validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
        
        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.classList.add('error');
                isValid = false;
            }
        }
        
        // Phone validation
        if (input.type === 'tel' && input.value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(input.value.replace(/\s/g, ''))) {
                input.classList.add('error');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Add error styles
const errorStyles = document.createElement('style');
errorStyles.textContent = `
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #dc3545;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
    
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in.active {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(errorStyles);

// Enhanced Form Submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        if (!validateForm(form)) {
            e.preventDefault();
            showNotification('Please fill in all required fields correctly.', 'error');
            return;
        }
    });
});

// Enhanced Loading States
function showLoading(element) {
    element.classList.add('loading');
    element.disabled = true;
    const originalText = element.textContent;
    element.textContent = 'Loading...';
    return originalText;
}

function hideLoading(element, originalText) {
    element.classList.remove('loading');
    element.disabled = false;
    element.textContent = originalText;
}

// Enhanced Notifications
function showNotification(message, type = 'info', duration = 5000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const notificationStyles = document.createElement('style');
        notificationStyles.id = 'notification-styles';
        notificationStyles.textContent = `
            .notification {
                position: fixed;
                top: 2rem;
                right: 2rem;
                background: white;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                padding: 1rem 1.5rem;
                display: flex;
                align-items: center;
                gap: 1rem;
                z-index: 10000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                max-width: 400px;
            }
            
            .notification.show {
                transform: translateX(0);
            }
            
            .notification-success {
                border-left: 4px solid #28a745;
            }
            
            .notification-error {
                border-left: 4px solid #dc3545;
            }
            
            .notification-info {
                border-left: 4px solid #17a2b8;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                flex: 1;
            }
            
            .notification-close {
                background: none;
                border: none;
                cursor: pointer;
                color: #6c757d;
                font-size: 1.1rem;
            }
            
            .notification-close:hover {
                color: #343a40;
            }
        `;
        document.head.appendChild(notificationStyles);
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto remove
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, duration);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    });
}

// Keyboard Navigation - Search functionality removed
document.addEventListener('keydown', (e) => {
    // Escape key closes modals
    if (e.key === 'Escape') {
        // searchOverlay.classList.remove('active'); // Removed
        // bookingModal.classList.remove('active'); // Removed
    }
    
    // Enter key in search - Removed
    // if (e.key === 'Enter' && document.activeElement === searchInput) {
    //     performSearch(searchInput.value);
    //     searchOverlay.classList.remove('active');
    // }
});

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    // Scroll-based animations and effects
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Start hero slideshow
    startHeroSlideshow();
    
    // Show first testimonial
    showTestimonial(0);
    
    // Add loading states to forms
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', () => {
            form.classList.add('loading');
        });
    });
    
    // Initialize tooltips
    initializeTooltips();
    
    // Add hover effects
    addHoverEffects();
});

// Tooltip System
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = e.target.dataset.tooltip;
            document.body.appendChild(tooltip);
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        });
        
        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                document.body.removeChild(tooltip);
            }
        });
    });
}

// Hover Effects
function addHoverEffects() {
    // Add hover effects to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
    
    // Add hover effects to cards
    document.querySelectorAll('.tour-card, .destination-card, .feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Add CSS for notifications and tooltips
const additionalStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        padding: 1rem;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        z-index: 10000;
        max-width: 300px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-success {
        border-left: 4px solid #27ae60;
    }
    
    .notification-info {
        border-left: 4px solid #3498db;
    }
    
    .notification-close {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: none;
        border: none;
        cursor: pointer;
        color: #7f8c8d;
    }
    
    .tooltip {
        position: absolute;
        background: #2c3e50;
        color: white;
        padding: 0.5rem;
        border-radius: 4px;
        font-size: 0.8rem;
        z-index: 1000;
        pointer-events: none;
    }
    
    .search-highlight {
        animation: highlight 0.5s ease;
    }
    
    @keyframes highlight {
        0% { background-color: rgba(44, 90, 160, 0.2); }
        100% { background-color: transparent; }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    .lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .lazy.loaded {
        opacity: 1;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet); 