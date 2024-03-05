
// Inicializar el mapa
var mymap = L.map('mapid').setView([37.19691, -4.04348], 15);

// Agregar capa de OpenStreetMap al mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    id: 'osm-bw'
}).addTo(mymap);

// Añadir marcador en Huétor Tájar
var marker = L.marker([37.19691, -4.04348]).addTo(mymap);
marker.bindPopup("<h2>La Esquina</h2><br>" +
    "<b>Horario de apertura:</b> Lunes a viernes: 18:00 - 02:00, Sábados y domingos: 12:00 - 02:00<br>" +
    "<b>Especialidades:</b> Disfruta de auténtica comida malagueña y hueteña, con una amplia selección de tapas tradicionales y deliciosos cócteles artesanales<br>" +
    "<b>Dirección:</b> Calle Quevedo, 1, Huétor Tájar, Granada<br>" +
    "<b>Contacto:</b> Teléfono: 692128009, Correo electrónico: miguelmotog90@gmail.com<br>" +
    "<b>Enlaces:</b> <a href='https://www.barlaesquina.com'>Sitio web</a>, <a href='https://www.facebook.com/barlaesquina'>Facebook</a><br>" +
    "<b>Comentarios:</b> \"Gran ambiente y deliciosas tapas. Muy recomendado.\"").openPopup();
