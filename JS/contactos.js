// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el formulario
    var form = document.querySelector("form");

    // Agrega un event listener para el evento de envío del formulario
    form.addEventListener("submit", function(event) {
        // Evita el comportamiento predeterminado de enviar el formulario
        event.preventDefault();

        // Crea un nuevo objeto FormData para recolectar los datos del formulario
        var formData = new FormData(form);

        // Crea una nueva instancia de XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // Define la función de retorno de llamada cuando la solicitud AJAX esté completa
        xhr.onload = function() {
            if (xhr.status === 200) {
                // La solicitud fue exitosa, puedes manejar la respuesta aquí
                console.log(xhr.responseText);
                alert("Mensaje enviado correctamente");
            } else {
                // Hubo un error en la solicitud, maneja el error aquí
                console.error(xhr.responseText);
                alert("Error al enviar el mensaje");
            }
        };

        // Abre una nueva solicitud AJAX
        xhr.open("POST", "../PHP/procesar_contactos.php", true);

        // Envía la solicitud con los datos del formulario
        xhr.send(formData);
    });
});


