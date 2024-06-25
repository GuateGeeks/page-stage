
// Function menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navList = document.querySelector('nav ul');

    hamburgerMenu.addEventListener('click', () => {
        navList.classList.toggle('open');
    });

    // Function Button
    const contactButton = document.getElementById('contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', function(event) {
            event.preventDefault(); // Previene el comportamiento predeterminado del enlace
            document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
        });
    }
});