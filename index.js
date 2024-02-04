document.addEventListener("DOMContentLoaded", function () {
    // Obtiene elementos del DOM
    const cantidadElement = document.querySelector('.cantidad');//<span class="cantidad">0</span>
    const precioInicialElement = document.querySelector('.precio-inicial');//<span class="precio-inicial">400000</span>
    const valorTotalElement = document.querySelector('.valor-total');//<span class="valor-total"></span>
      // Variables completas
    const botonSumar = document.querySelector('button[data-precio="400000"]');
    const botonRestar = document.querySelector('button[data-valor="400000"]');

    // Variables
    let cantidad = 0;
    let precioInicial = parseFloat(precioInicialElement.textContent);

    // Funciones
    function actualizarTotal() {
        let totalPagar = cantidad * precioInicial;
        valorTotalElement.textContent = totalPagar.toFixed(2);
      
    }

    // Manejadores de eventos
    botonSumar.addEventListener('click', function () {
        cantidad++;
        cantidadElement.textContent = cantidad;
        actualizarTotal();
    });

    botonRestar.addEventListener('click', function () {
        if (cantidad > 0) {
            cantidad--;
            cantidadElement.textContent = cantidad;////<span class="cantidad">0</span>
            actualizarTotal();
        }
    });
});

