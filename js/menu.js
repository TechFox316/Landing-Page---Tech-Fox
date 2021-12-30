let show = true;

const menuSection = document.querySelector(".barraNavegar");
const menuToogle = document.querySelector(".menu-toggle")

menuToogle.addEventListener("click", () => {
    menuSection.classList.toggle("on", show);
    show = !show;
})