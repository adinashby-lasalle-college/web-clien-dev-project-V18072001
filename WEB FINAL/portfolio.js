// Highlight active menu link
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    // Initialize AOS (Animate On Scroll) library
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        offset: 50, // Offset from the top of the viewport
        once: true // Ensures animation only happens once
    });
});

// Form validation for the contact page
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Message sent successfully!');
        contactForm.reset();
    });
}

// Button action on the home page
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        window.location.href = 'about.html';
    });
}

// Interactive project cards on the My Work page
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile navigation menu
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const navContainer = document.querySelector('.nav-container');
if (mobileMenuButton && navContainer) {
    mobileMenuButton.addEventListener('click', () => {
        navContainer.classList.toggle('open');
    });
}

// Back to top button functionality
const backToTopButton = document.createElement('button');
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '^';
// Replace ? with ^ logo
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Dynamic greeting on home page
const greetingElement = document.querySelector('.dynamic-greeting');
if (greetingElement) {
    const hours = new Date().getHours();
    let greeting = 'Hello';
    if (hours >= 5 && hours < 12) {
        greeting = 'Good Morning';
    } else if (hours >= 12 && hours < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }
    greetingElement.textContent = `${greeting}, welcome to my website!`;
}
document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.profile-slider-container img');
    let currentIndex = 0;

    function fadePhotos() {
        // Remove the active class from the current photo
        photos[currentIndex].classList.remove('active');

        // Move to the next photo, loop back to the first if at the end
        currentIndex = (currentIndex + 1) % photos.length;

        // Add the active class to the next photo
        photos[currentIndex].classList.add('active');
    }

    // Change photo every 5 seconds
    setInterval(fadePhotos, 3000);

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        offset: 50,     // Offset from the top of the viewport
        once: true      // Ensures animation only happens once
    });
});

// Carousel for project cards
const projectContainer = document.querySelector('.project-container');
if (projectContainer) {
    let scrollAmount = 0;

    const scrollStep = 200; // Adjust the scroll step as needed

   
}

document.addEventListener('DOMContentLoaded', () => {
    // Add a back-to-top button
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.textContent = '↑';
    document.body.appendChild(backToTopButton);

    // Back to top functionality
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show/hide the back-to-top button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
});
