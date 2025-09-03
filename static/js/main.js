// Inspirational Quotes Data
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House"
    },
    {
        text: "First, solve the problem. Then, write the code.",
        author: "John Johnson"
    },
    {
        text: "Experience is the name everyone gives to their mistakes.",
        author: "Oscar Wilde"
    },
    {
        text: "In order to be irreplaceable, one must always be different.",
        author: "Coco Chanel"
    },
    {
        text: "Java is to JavaScript what car is to Carpet.",
        author: "Chris Heilmann"
    },
    {
        text: "The best error message is the one that never shows up.",
        author: "Thomas Fuchs"
    },
    {
        text: "Debugging is twice as hard as writing the code in the first place.",
        author: "Brian Kernighan"
    }
];

// Global variables
let currentQuoteIndex = 0;
let quoteInterval;
let isScrolling = false;
let scrollThumb;
let contentInner;
let customScrollbar;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCustomScrollbar();
    initializeQuoteRotation();
    setupMouseWheelHandling();
    initializeMobileMenu();
    
    // Set dark theme permanently
    document.documentElement.setAttribute('data-theme', 'dark');
});

// Custom Scrollbar Implementation
function initializeCustomScrollbar() {
    scrollThumb = document.getElementById('scroll-thumb');
    contentInner = document.getElementById('content-inner');
    customScrollbar = document.getElementById('custom-scrollbar');
    
    if (!scrollThumb || !contentInner || !customScrollbar) return;
    
    updateScrollThumb();
    
    // Content scroll event
    contentInner.addEventListener('scroll', function() {
        if (!isScrolling) {
            updateScrollThumb();
        }
    });
    
    // Scrollbar click handling
    customScrollbar.addEventListener('click', function(e) {
        if (e.target === customScrollbar) {
            const rect = customScrollbar.getBoundingClientRect();
            const clickY = e.clientY - rect.top;
            const percentage = clickY / rect.height;
            
            const maxScroll = contentInner.scrollHeight - contentInner.clientHeight;
            contentInner.scrollTop = maxScroll * percentage;
        }
    });
    
    // Thumb drag functionality
    let isDragging = false;
    let dragStartY = 0;
    let scrollStartTop = 0;
    
    scrollThumb.addEventListener('mousedown', function(e) {
        isDragging = true;
        isScrolling = true;
        dragStartY = e.clientY;
        scrollStartTop = contentInner.scrollTop;
        document.body.style.userSelect = 'none';
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const deltaY = e.clientY - dragStartY;
        const scrollbarHeight = customScrollbar.clientHeight;
        const thumbHeight = scrollThumb.clientHeight;
        const maxThumbTop = scrollbarHeight - thumbHeight;
        
        const percentage = deltaY / maxThumbTop;
        const maxScroll = contentInner.scrollHeight - contentInner.clientHeight;
        
        contentInner.scrollTop = scrollStartTop + (maxScroll * percentage);
        
        e.preventDefault();
    });
    
    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            isScrolling = false;
            document.body.style.userSelect = '';
        }
    });
    
    // Update scroll thumb on window resize
    window.addEventListener('resize', function() {
        updateScrollThumb();
    });
}

function updateScrollThumb() {
    if (!scrollThumb || !contentInner || !customScrollbar) return;
    
    const contentHeight = contentInner.scrollHeight;
    const visibleHeight = contentInner.clientHeight;
    const scrollbarHeight = customScrollbar.clientHeight;
    
    if (contentHeight <= visibleHeight) {
        scrollThumb.style.display = 'none';
        return;
    }
    
    scrollThumb.style.display = 'block';
    
    // Calculate thumb height and position
    const thumbHeight = Math.max(30, (visibleHeight / contentHeight) * scrollbarHeight);
    const scrollPercentage = contentInner.scrollTop / (contentHeight - visibleHeight);
    const thumbTop = scrollPercentage * (scrollbarHeight - thumbHeight);
    
    scrollThumb.style.height = thumbHeight + 'px';
    scrollThumb.style.top = thumbTop + 'px';
}

// Mouse wheel handling for custom scrollbar
function setupMouseWheelHandling() {
    if (!contentInner) return;
    
    contentInner.addEventListener('wheel', function(e) {
        // Let the default scroll behavior work, then update the thumb
        setTimeout(updateScrollThumb, 0);
    });
}

// Quote Rotation System
function initializeQuoteRotation() {
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author');
    const currentQuote = document.getElementById('current-quote');
    
    if (!quoteText || !quoteAuthor || !currentQuote) return;
    
    function displayQuote(index) {
        const quote = quotes[index];
        
        // Fade out
        currentQuote.classList.add('fade-out');
        
        setTimeout(function() {
            quoteText.textContent = quote.text;
            quoteAuthor.textContent = '— ' + quote.author;
            
            // Fade in
            currentQuote.classList.remove('fade-out');
        }, 250);
    }
    
    function nextQuote() {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        displayQuote(currentQuoteIndex);
    }
    
    // Display initial quote
    displayQuote(currentQuoteIndex);
    
    // Set up rotation interval (5 minutes = 300000ms)
    quoteInterval = setInterval(nextQuote, 300000);
    
    // Optional: Click to advance quote manually
    currentQuote.addEventListener('click', function() {
        clearInterval(quoteInterval);
        nextQuote();
        quoteInterval = setInterval(nextQuote, 300000);
    });
}

// Topic filtering functionality removed - Hugo handles category filtering
// automatically through /categories/[slug]/ URLs via built-in taxonomy system

// Utility functions for smooth animations
function smoothScrollTo(element, target, duration) {
    const start = element.scrollTop;
    const change = target - start;
    const startTime = performance.now();
    
    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = elapsed / duration;
        
        if (progress < 1) {
            const easeInOutQuart = progress < 0.5 
                ? 8 * progress * progress * progress * progress
                : 1 - 8 * (--progress) * progress * progress * progress;
                
            element.scrollTop = start + change * easeInOutQuart;
            requestAnimationFrame(animateScroll);
        } else {
            element.scrollTop = target;
        }
    }
    
    requestAnimationFrame(animateScroll);
}

// Handle page navigation with smooth transitions
document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href^="/"]');
    if (link && !link.hasAttribute('target')) {
        // Add loading state for internal navigation
        link.style.opacity = '0.7';
        link.style.pointerEvents = 'none';
        
        setTimeout(function() {
            link.style.opacity = '1';
            link.style.pointerEvents = 'auto';
        }, 300);
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function(e) {
    // Refresh scroll position and update thumb
    setTimeout(function() {
        if (contentInner) {
            contentInner.scrollTop = 0;
            updateScrollThumb();
        }
    }, 100);
});

// Performance optimization: throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(function() {
                inThrottle = false;
            }, limit);
        }
    }
}

// Apply throttling to scroll updates
if (typeof updateScrollThumb === 'function') {
    updateScrollThumb = throttle(updateScrollThumb, 16); // ~60fps
}


// Mobile Menu Functionality
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (!mobileMenuToggle || !mainNav) return;
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        const isActive = mainNav.classList.contains('mobile-menu-active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
    
    // Close mobile menu when clicking nav links
    const navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            const isClickInsideMenu = mainNav.contains(e.target);
            const isClickOnToggle = mobileMenuToggle.contains(e.target);
            
            if (!isClickInsideMenu && !isClickOnToggle && mainNav.classList.contains('mobile-menu-active')) {
                closeMobileMenu();
            }
        }
    });
    
    // Close mobile menu on window resize if desktop view
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    function openMobileMenu() {
        mainNav.classList.add('mobile-menu-active');
        mobileMenuToggle.classList.add('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
        
        // Prevent body scrolling when mobile menu is open
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileMenu() {
        mainNav.classList.remove('mobile-menu-active');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        
        // Restore body scrolling
        document.body.style.overflow = '';
    }
}