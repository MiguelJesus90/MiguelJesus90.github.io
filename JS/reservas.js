document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservaForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        const personas = document.getElementById('personas').value;

        // Definir los colores para los casos correctos e incorrectos
        const colorCorrecto = '#008000'; // Verde
        const colorIncorrecto = '#ff0000'; // Rojo

        // Validar los datos del formulario
        let valido = true; // Variable para indicar si el formulario es válido o no
        let mensaje = ''; // Variable para guardar el mensaje de error o de éxito

        // Función para establecer el color de fondo de un campo
        function setColorCampo(campo, color) {
            campo.style.backgroundColor = color;
        }

        // Validar el nombre
        if (nombre === '') {
            // Si el nombre está vacío, el formulario no es válido
            valido = false;
            // Cambiar el color de fondo del campo nombre a rojo
            setColorCampo(document.getElementById('nombre'), colorIncorrecto);
            // Añadir el mensaje de error al mensaje general
            mensaje += '<p>El nombre no puede estar vacío.</p>';
        } else {
            // Si el nombre no está vacío, el formulario es válido
            // Cambiar el color de fondo del campo nombre a verde
            setColorCampo(document.getElementById('nombre'), colorCorrecto);
        }

        // Validar la fecha
        if (fecha === '') {
            // Si la fecha está vacía, el formulario no es válido
            valido = false;
            // Cambiar el color de fondo del campo fecha a rojo
            setColorCampo(document.getElementById('fecha'), colorIncorrecto);
            // Añadir el mensaje de error al mensaje general
            mensaje += '<p>La fecha no puede estar vacía.</p>';
        } else {
            // Si la fecha no está vacía, el formulario es válido
            // Cambiar el color de fondo del campo fecha a verde
            setColorCampo(document.getElementById('fecha'), colorCorrecto);
        }

        // Validar la hora
        if (hora === '') {
            // Si la hora está vacía, el formulario no es válido
            valido = false;
            // Cambiar el color de fondo del campo hora a rojo
            setColorCampo(document.getElementById('hora'), colorIncorrecto);
            // Añadir el mensaje de error al mensaje general
            mensaje += '<p>La hora no puede estar vacía.</p>';
        } else {
            // Si la hora no está vacía, el formulario es válido
            // Cambiar el color de fondo del campo hora a verde
            setColorCampo(document.getElementById('hora'), colorCorrecto);
        }

        // Validar el número de personas
        if (personas === '') {
            // Si el número de personas está vacío, el formulario no es válido
            valido = false;
            // Cambiar el color de fondo del campo personas a rojo
            setColorCampo(document.getElementById('personas'), colorIncorrecto);
            // Añadir el mensaje de error al mensaje general
            mensaje += '<p>El número de personas no puede estar vacío.</p>';
        } else {
            // Si el número de personas no está vacío, el formulario es válido
            // Cambiar el color de fondo del campo personas a verde
            setColorCampo(document.getElementById('personas'), colorCorrecto);
        }

        // Mostrar el mensaje de error o de éxito según el resultado de la validación
        const mensajeElemento = document.getElementById('mensaje');
        if (valido) {
            // Si el formulario es válido, mostrar un mensaje de éxito
            mensaje = '<p>El formulario se ha enviado correctamente.</p>';
            // Cambiar el color del texto del mensaje a verde
            mensajeElemento.style.color = colorCorrecto;

            // Enviar los datos del formulario a través de AJAX
            enviarFormulario();
        } else {
            // Si el formulario no es válido, mostrar un mensaje de error
            // Cambiar el color del texto del mensaje a rojo
            mensajeElemento.style.color = colorIncorrecto;
        }

        // Mostrar el mensaje en la página
        mensajeElemento.innerHTML = mensaje;

        // Función para enviar el formulario a través de AJAX
        function enviarFormulario() {
            // Crear un objeto FormData con los datos del formulario
            const formData = new FormData(reservaForm);

            // Enviar los datos del formulario a través de AJAX
            fetch('../PHP/procesar_reservas.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                // Manejar la respuesta del servidor si es necesario
            })
            .catch(error => {
                // Manejar errores de la solicitud si es necesario
            });
        }
    });
});
