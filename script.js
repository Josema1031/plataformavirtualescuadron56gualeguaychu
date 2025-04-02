// Obtener los elementos del DOM
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Abrir la ventana modal automáticamente al cargar la página
window.onload = function() {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en la X, cierra la ventana modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera de la ventana modal, cierra la ventana modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
