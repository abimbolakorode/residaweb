document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const contactInfo = document.querySelector('.contact-info');

    menuToggle.addEventListener('click', function () {
        contactInfo.classList.toggle('active');
    });
});
