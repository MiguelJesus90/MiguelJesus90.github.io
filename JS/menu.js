// Función para generar las secciones del menú dinámicamente y manejar el despliegue de elementos
// Función para generar las secciones del menú dinámicamente y manejar el despliegue de elementos
function generarMenu() {
    const menuItems = [
        { categoria: 'Bebidas', imagenes: ['../IMG/bebidas1.jpg', '../IMG/bebidas2.jpg', '../IMG/bebidas3.jpg'], platos: ['Refrescos', 'Cervezas', 'Vinos',] },
        { categoria: 'Aperitivos', imagenes: ['../IMG/aperitivos1.jpg', '../IMG/aperitivos2.jpg', '../IMG/aperitivos3.jpg'], platos: ['Patatas bravas', 'Aceitunas aliñadas', 'Nachos con queso',] },
        { categoria: 'Platos Principales', imagenes: ['../IMG/platos_principales1.jpg', '../IMG/platos_principales2.jpg', '../IMG/platos_principales3.jpg'], platos: ['Gazpachuelo', 'Fritura malagueña', ' Espetos de sardinas',] },
        { categoria: 'Postres', imagenes: ['../IMG/postres1.jpg', '../IMG/postres2.jpg', '../IMG/postres3.jpg'], platos: ['Loca malagueña ', 'Pestiños', 'Alfajores',] }
    ];

    const menuSection = $('#menu');

    menuItems.forEach(item => {
        const section = $('<section></section>');
        const heading = $('<h2></h2>').text(item.categoria).addClass('heading');
        const ul = $('<ul></ul>');

        section.addClass('menu-section');
        section.append(heading);

        item.platos.forEach(plato => {
            const li = $('<li></li>').text(plato);
            ul.append(li);
        });

        section.append(ul);
        menuSection.append(section);

        const imagenContainer = $('<div></div>').addClass('image-container');
        const imagen = $('<img>');

        section.append(imagenContainer);

        let currentImageIndex = 0;
        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % item.imagenes.length;
            imagen.attr('src', item.imagenes[currentImageIndex]);
        }, 3000);

        imagen.attr('src', item.imagenes[0]);
        imagenContainer.append(imagen);
        imagenContainer.hide();

        heading.on('click', function () {
            ul.slideToggle('slow');
            imagenContainer.slideToggle('slow');
        });
    });
}

// Llamar a la función para generar el menú al cargar la página
$(document).ready(generarMenu);



/*********************************************************************************** */

$(document).ready(function() {
    // Script para aplicar efecto de giro a los elementos <h2>
    $('.menu-section h2').click(function() {
        $(this).animate({ deg: 360 }, {
            duration: 1000,
            step: function(now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
        });
    });
});



