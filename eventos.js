function saludar() {
    alert('¡Hola!');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('div').addEventListener('click', function() {
        alert('Hola! Soy el div');
    });
});
