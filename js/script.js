document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navList = document.querySelector('nav ul');

    hamburgerMenu.addEventListener('click', () => {
        navList.classList.toggle('open');
    });
});
