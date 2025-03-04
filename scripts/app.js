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

    document.addEventListener('scroll', function () {
        const nav = document.querySelector('header');
        if (window.scrollY > 100) { // Ajusta el valor según sea necesario
        //        nav.className.remove('nav-transparent');
            nav.className = "scrolled"
        } else {
            nav.className = ""
          //  nav.className.add('nav-transparent');
        }
    });
