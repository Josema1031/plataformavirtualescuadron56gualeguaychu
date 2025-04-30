window.onload = function () {
    // Modal
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    if (modal && span) {
        // Mostrar modal al cargar
        modal.style.display = "block";

        // Cerrar modal al hacer clic en la X
        span.onclick = function () {
            modal.style.display = "none";
        };

        // Cerrar modal si se hace clic fuera de él
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }

    // Menú hamburguesa
    const hamburger = document.getElementById("hamburger");
    const menuLinks = document.getElementById("menu-links");

    if (hamburger && menuLinks) {
        hamburger.addEventListener("click", () => {
            menuLinks.classList.toggle("active");
        });
    }
};




