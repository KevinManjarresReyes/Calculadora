// Obtén los elementos del HTML
const display = document.getElementById('display');
const keys = document.querySelectorAll('.keys button');

// Inicializa el display con un valor vacío
display.value = '';

// Variables para almacenar los números y la operación
let num1 = '';
let num2 = '';
let operator = '';
let puntoColocado = false;

// Agrega un evento de clic a cada botón
keys.forEach((key) => {
  key.addEventListener('click', () => {
    switch (key.id) {
      case 'AC':
        // Limpia el display y las variables
        display.value = '';
        num1 = '';
        num2 = '';
        operator = '';
        puntoColocado = false;
        break;
      case '=':
        // Evalúa la expresión matemática y muestra el resultado
        if (num1 !== '' && num2 !== '' && operator !== '') {
          let result = eval(num1 + operator + num2);
          display.value = result;
          num1 = result.toString();
          num2 = '';
          operator = '';
          puntoColocado = false;
        }
        break;
      case '+/-':
        // Cambia el signo del número en el display
        if (num1 !== '') {
          num1 = (num1 * -1).toString();
          display.value = num1;
        } else if (num2 !== '') {
          num2 = (num2 * -1).toString();
          display.value = num2;
        }
        break;
      case '.':
        // Agrega un punto decimal si no hay uno ya
        if (!puntoColocado) {
          if (display.value === '') {
            display.value = '0.';
            num1 = '0.';
          } else {
            display.value += '.';
            if (num1 !== '') {
              num1 += '.';
            } else {
              num2 += '.';
            }
          }
          puntoColocado = true;
        }
        break;
      default:
        // Agrega el valor del botón al display
        if (['+', '-', '*', '/'].includes(key.textContent)) {
          if (num1 !== '') {
            operator = key.textContent;
            display.value = '';
            puntoColocado = false;
          }
        } else {
          if (operator === '') {
            num1 += key.textContent;
            display.value = num1;
          } else {
            num2 += key.textContent;
            display.value = num2;
          }
        }
    }
  });
});