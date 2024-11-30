// Capturar elementos del DOM
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultado = document.getElementById('resultado');

// Capturar botones
const btnSumar = document.getElementById('sumar');
const btnRestar = document.getElementById('restar');
const btnMultiplicar = document.getElementById('multiplicar');
const btnDividir = document.getElementById('dividir');

// Función para realizar la operación
function calcular(operacion) {
    const valor1 = parseFloat(num1.value);
    const valor2 = parseFloat(num2.value);

    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.textContent = 'Por favor, ingrese números válidos.';
        return;
    }

    let res = 0;

    switch (operacion) {
        case 'suma':
            res = valor1 + valor2;
            break;
        case 'resta':
            res = valor1 - valor2;
            break;
        case 'multiplicacion':
            res = valor1 * valor2;
            break;
        case 'division':
            if (valor2 === 0) {
                resultado.textContent = 'No se puede dividir entre 0.';
                return;
            }
            res = valor1 / valor2;
            break;
    }

    resultado.textContent = res;
}

// Asignar eventos a los botones
btnSumar.addEventListener('click', () => calcular('suma'));
btnRestar.addEventListener('click', () => calcular('resta'));
btnMultiplicar.addEventListener('click', () => calcular('multiplicacion'));
btnDividir.addEventListener('click', () => calcular('division'));
