function mostrarDatos() {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  const carrera = document.getElementById("carrera").value;
  const genero = document.getElementById("genero").value;
  const terminos = document.getElementById("terminos").checked;

  if (!terminos) {
    alert("Debes aceptar los términos y condiciones.");
    return;
  }

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `
    <h3>Datos Registrados:</h3>
    <p><strong>Usuario:</strong> ${usuario}</p>
    <p><strong>Contraseña:</strong> ${contrasena}</p>
    <p><strong>Carrera:</strong> ${carrera}</p>
    <p><strong>Género:</strong> ${genero}</p>
    <p><strong>Términos:</strong> Aceptados</p>
  `;
}
