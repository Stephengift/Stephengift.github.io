function toggleMenu(){
    let menu = document.querySelector('.menu-links');
    let icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('active');
    icon.classList.toggle('active');
}