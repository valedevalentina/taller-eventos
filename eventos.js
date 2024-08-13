document.getElementById('saludarBtn').addEventListener('click', function(event) {
    event.stopPropagation();
    alert('¡Hola!');
});

document.querySelector('div').addEventListener('click', function() {
    alert('Hola! Soy el div');
});