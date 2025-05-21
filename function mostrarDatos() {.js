function mostrarDatos() {
  // Leer los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const edad = document.getElementById("edad").value;
  const genero = document.getElementById("genero").value;

  // Mostrar los valores en el div
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `
    <h3>Datos Registrados:</h3>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Correo:</strong> ${correo}</p>
    <p><strong>Edad:</strong> ${edad}</p>
    <p><strong>Género:</strong> ${genero}</p>
  `;
}
