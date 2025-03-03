document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.getElementById("navbar");
    let lastScrollTop = 0; // Variable para detectar la dirección del scroll

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;

        if (scrollTop > 430) {
            navbar.classList.add("nav-fixed");
            navbar.classList.add("nav-show"); // Se muestra con animación
            navbar.classList.remove("nav-hide"); // Elimina la animación de ocultar
        } else {
            navbar.classList.remove("nav-fixed");
            navbar.classList.remove("nav-show");
            navbar.classList.add("nav-hide"); // Se oculta con animación suave
        }

        lastScrollTop = scrollTop;
    });
});
