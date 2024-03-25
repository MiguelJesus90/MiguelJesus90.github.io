// Function to dynamically generate menu sections and handle element display
function generateMenu() {
    const menuItems = [
        { category: 'Drinks', images: ['../IMG/bebidas1.jpg', '../IMG/bebidas2.jpg', '../IMG/bebidas3.jpg'], dishes: ['Soft Drinks', 'Beers', 'Wines',] },
        { category: 'Appetizers', images: ['../IMG/aperitivos1.jpg', '../IMG/aperitivos2.jpg', '../IMG/aperitivos3.jpg'], dishes: ['Potato Bravas', 'Marinated Olives', 'Cheese Nachos',] },
        { category: 'Main Courses', images: ['../IMG/platos_principales1.jpg', '../IMG/platos_principales2.jpg', '../IMG/platos_principales3.jpg'], dishes: ['Gazpacho', 'Malaga Fried Fish', 'Sardine Skewers',] },
        { category: 'Desserts', images: ['../IMG/postres1.jpg', '../IMG/postres2.jpg', '../IMG/postres3.jpg'], dishes: ['Malaga Madness', 'Honey Cakes', 'Shortbread Cookies',] }
    ];
    
    const menuSection = $('#menu');

    menuItems.forEach(item => {
        const section = $('<section></section>');
        const heading = $('<h2></h2>').text(item.category).addClass('heading');
        const ul = $('<ul></ul>');

        section.addClass('menu-section');
        section.append(heading);

        item.dishes.forEach(dish => {
            const li = $('<li></li>').text(dish);
            ul.append(li);
        });

        section.append(ul);
        menuSection.append(section);

        const imageContainer = $('<div></div>').addClass('image-container');
        const image = $('<img>');

        section.append(imageContainer);

        let currentImageIndex = 0;
        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % item.images.length;
            image.attr('src', item.images[currentImageIndex]);
        }, 3000);

        image.attr('src', item.images[0]);
        imageContainer.append(image);
        imageContainer.hide();

        heading.on('click', function () {
            ul.slideToggle('slow');
            imageContainer.slideToggle('slow');
        });
    });
}

// Call the function to generate the menu when the page loads
$(document).ready(generateMenu);



/*********************************************************************************** */

$(document).ready(function() {
    // Script to apply rotation effect to <h2> elements
    $('.menu-section h2').click(function() {
        $(this).animate({ deg: 360 }, {
            duration: 1000,
            step: function(now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
        });
    });
});
