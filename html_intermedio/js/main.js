if (window.AOS) {
    AOS.init();
}

let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    const desplazamientoActual = window.pageYOffset;

    if (nav) {
        if (ubicacionPrincipal >= desplazamientoActual) {
            nav.style.top = "0";
        } else {
            nav.style.top = "-100px";
        }
    }

    ubicacionPrincipal = desplazamientoActual;
});

// Menu

const enlacesHeader = document.querySelector(".enlaces-header");
const hamburger = document.querySelector(".hamburger");

if (hamburger && enlacesHeader) {
    enlacesHeader.id = "menu-principal";

    function cerrarMenu() {
        enlacesHeader.classList.remove("menudos");
        hamburger.classList.remove("activo");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Abrir menú");
    }

    hamburger.addEventListener("click", function () {
        const abierto = enlacesHeader.classList.toggle("menudos");
        hamburger.classList.toggle("activo", abierto);
        hamburger.setAttribute("aria-expanded", String(abierto));
        hamburger.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    });

    hamburger.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            hamburger.click();
        }
    });

    enlacesHeader.querySelectorAll("a").forEach(function (enlace) {
        enlace.addEventListener("click", cerrarMenu);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            cerrarMenu();
            hamburger.focus();
        }
    });
}