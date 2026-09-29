const openMenu = document.querySelector(".open-menu")
const closeMenu = document.querySelector(".close-menu")
const navMenu = document.querySelector("nav")

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