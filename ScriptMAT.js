function calcular() {
  const num1 = parseFloat(document.getElementById('numero1').value);
  const num2 = parseFloat(document.getElementById('numero2').value);
  const operacion = document.getElementById('operacion').value;
  let resultado;

  if (isNaN(num1) || isNaN(num2)) {
    resultado = "Por favor ingresa numeros válidos.";
  } else {
    switch (operacion) {
      case "suma":
        resultado = num1 + num2;
        break;
      case "resta":
        resultado = num1 - num2;
        break;
      case "multiplicacion":
        resultado = num1 * num2;
        break;
      case "division":
        if (num2 === 0) {
          resultado = "No se puede dividir entre cero.";
        } else {
          resultado = num1 / num2;
        }
        break;
      default:
        resultado = "Operación no valida.";
    }
  }

  document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}
