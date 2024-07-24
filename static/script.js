function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".mobileicon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}