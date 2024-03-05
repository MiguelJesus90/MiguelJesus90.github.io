
$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000, // Esto establece el intervalo en 3 segundos
        arrows: false, // Opcional: si no quieres flechas de navegación
        dots: false, // Opcional: si quieres añadir indicadores de navegación
        slidesToShow: 1, // Esto establece que solo se muestre una imagen a la vez
        slidesToScroll: 1 // Esto establece que solo se desplace una imagen a la vez
    });
});
