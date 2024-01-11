
/* 
*CONSIGNA
TODO -Crear un algoritmo con un condicional.
TODO -Crear un algoritmo utilizando un ciclo.
TODO -Armar un simulador interactivo, la estructura final de tu proyecto integrador.
*/

alert("Please input the number corresponding to your desired product.");

// Variables iniciales
let seleccionarProductos;
let seleccionarCantidad;
let total = 0;

// Función para calcular el monto
const calcularTotal = (cantidad, precio) => {
    return cantidad * precio;
};

// Bucle principal
do {
    // Obtener la selección del usuario
    seleccionarProductos = Number(prompt(
        "1. Solar Panels $300\n" +
        "2. Solar Batteries $1000\n" +
        "3. Solar Water Heaters $2000\n" +
        "4. Home Wind Generators $500\n" +
        "To exit, type '0'."
    ));

    // Procesar la selección del usuario
    switch (seleccionarProductos) {
        case 1:
            seleccionarCantidad = Number(prompt("You've chosen Solar Panels. How many units would you like to purchase?"));
            total += calcularTotal(seleccionarCantidad, 300);
            break;
        case 2:
            seleccionarCantidad = Number(prompt("You've chosen Solar Batteries. How many units would you like to purchase?"));
            total += calcularTotal(seleccionarCantidad, 1000);
            break;
        case 3:
            seleccionarCantidad = Number(prompt("You've chosen Solar Water Heaters. How many units would you like to purchase?"));
            total += calcularTotal(seleccionarCantidad, 2000);
            break;
        case 4:
            seleccionarCantidad = Number(prompt("You've chosen Home Wind Generators. How many units would you like to purchase?"));
            total += calcularTotal(seleccionarCantidad, 500);
            break;
        default:
            alert("Invalid option. Please try again.");
    }
} while (seleccionarProductos !== 0);

// Mostrar el total al usuario
alert(`The total purchase amount is: $${total}`);