const Redirent_to_top = document.getElementById("Logo");
Redirent_to_top.addEventListener('click', function () {
    window.location.href = 'index.html';
});



const openMenu = document.querySelector(".menuOpen");
const closeMenu = document.querySelector(".menuClose");
const navMenu = document.querySelector("nav");

openMenu.addEventListener('click', () => {
    navMenu.classList.add("active");
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove("active");
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
});