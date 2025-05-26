document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el ícono de hamburguesa y el menú
    const barsIcon = document.querySelector('.navbar .fa-bars');
    const menu = document.querySelector('.navbar .menu');

    // Verificar que los elementos existen antes de añadir el event listener
    if (barsIcon && menu) {
        barsIcon.addEventListener('click', function() {
            // Alternar la clase 'active' en el menú al hacer clic en el ícono de barras
            menu.classList.toggle('active');
        });
    }

    // Opcional: Cerrar el menú si se hace clic fuera de él o si se hace clic en un enlace del menú
    document.addEventListener('click', function(event) {
        // Si el menú está abierto y el clic no fue en el ícono de barras ni dentro del menú
        if (menu.classList.contains('active') && !barsIcon.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove('active');
        }
        // También puedes cerrar el menú si se hace clic en un enlace (si no quieres que se mantenga abierto)
        if (event.target.matches('.menu a') && menu.classList.contains('active')) {
             menu.classList.remove('active');
        }
    });
});