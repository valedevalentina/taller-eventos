function saludar(event) {
    event.stopPropagation();  // Evita que el evento se propague al div
    alert('¡Hola!');
}

document.querySelector('div').addEventListener('click', function() {
    alert('Hola! Soy el div');
});