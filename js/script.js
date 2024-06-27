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

function switchMode() {
    const button = document.querySelector('.dark-light');
    const currentIcon = button.querySelector('i');
    const currentStyleSheet = document.querySelector('link[rel=\'stylesheet\']');
    const logoImg = document.querySelector('.nav-logo img');

    // Toggle icon
    if (currentIcon.classList.contains('bxs-sun')) {
        currentIcon.classList.replace('bxs-sun', 'bxs-moon');
    } else {
        currentIcon.classList.replace('bxs-moon', 'bxs-sun');
    }

    // Toggle stylesheet
    if (currentStyleSheet.href.endsWith('style-dark.css')) {
        currentStyleSheet.href = 'css/style-light.css';
    } else {
        currentStyleSheet.href = 'css/style-dark.css';
    }

    // Toggle logo image
    if (logoImg.src.endsWith('logo-dark.png')) {
        logoImg.src = 'images/logo-light.png';
    } else {
        logoImg.src = 'images/logo-dark.png';
    }
}