document.addEventListener("DOMContentLoaded", function () {
    if (typeof Splide !== 'undefined') {
        // Inicializar el primer carrusel 
        new Splide('#splide1', {
            type: 'loop', 
            perPage: 3,
            perMove: 1,
            gap: '1rem',
        }).mount();

        // Inicializar el segundo carrusel
        new Splide('#splide2', {
            type: 'loop', 
            perPage: 3,
            perMove: 1,
            gap: '1rem',
        }).mount();
    } else {
        console.error("Splide no está definido. Asegúrate de incluir la librería.");
    }
});

// Agregar efecto de cambio en el header al hacer scroll
document.addEventListener('scroll', function () {
    const nav = document.querySelector('header');
     if (window.scrollY > 100) { // Ajusta el valor según sea necesario
            nav.className = "scrolled"
        } else {
            nav.className = ""
        }
});
