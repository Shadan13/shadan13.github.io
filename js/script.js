let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos < currentScrollPos) {
        navbar.style.transition = 'ease-in-out 0.8s';
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transition = 'ease-in-out 0.8s';
        navbar.style.transform = 'translateY(0)';
    }

    prevScrollPos = currentScrollPos;

    navbar.addEventListener('transitionend', () => {
        navbar.style.transition = 'ease 0.3s'; // change transition duration after transformation is complete
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
        scrollTopButton.style.opacity = '1';
        scrollTopButton.style.pointerEvents = 'auto';
    } else {
        scrollTopButton.style.opacity = '0';
        scrollTopButton.style.pointerEvents = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.dark-light');
    const currentIcon = button.querySelector('i');
    const logoImg = document.querySelector('.nav-logo img');

    // Check localStorage for theme preference
    let theme = localStorage.getItem('theme');

    // If no theme is set, initialize it to dark mode
    if (!theme) {
        theme = 'dark'; // Default theme
        localStorage.setItem('theme', theme); // Set the default theme in localStorage
    }

    // Apply the theme
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
        currentIcon.classList.replace('bxs-sun', 'bxs-moon');
        logoImg.src = 'images/logo-light.png';
    } else {
        currentIcon.classList.replace('bxs-moon', 'bxs-sun');
        logoImg.src = 'images/logo-dark.png';
    }
});

function switchMode() {
    const button = document.querySelector('.dark-light');
    const currentIcon = button.querySelector('i');
    const logoImg = document.querySelector('.nav-logo img');

    // Toggle icon
    if (currentIcon.classList.contains('bxs-sun')) {
        currentIcon.classList.replace('bxs-sun', 'bxs-moon');
        // Save preference to localStorage
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        currentIcon.classList.replace('bxs-moon', 'bxs-sun');
        // Save preference to localStorage
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Toggle logo image
    if (logoImg.src.endsWith('logo-dark.png')) {
        logoImg.src = 'images/logo-light.png';
    } else {
        logoImg.src = 'images/logo-dark.png';
    }
}



function celebrate() {
    // Create confetti
    var duration = 3 * 1000; // Duration in milliseconds
    var animationEnd = Date.now() + duration;
    var defaults = {
        startVelocity: 20,
        spread: 180,
        ticks: 240,
        gravity: 1,
        colors: ['#433d5d', '#ffcd40', '#f6f6f8', '#5e6974', '#090907']
    };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    (function frame() {
        // Launch confetti
        confetti(Object.assign({}, defaults, {
            particleCount: 2,
            origin: {
                x: randomInRange(0.1, 0.9),
                y: Math.random() - 0.2
            }
        }));

        // Continue until the duration is reached
        if (Date.now() < animationEnd) {
            requestAnimationFrame(frame);
        }
    })();
}