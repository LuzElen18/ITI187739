function actualizarTotal() {
  const seleccionado = document.querySelector('input[type="radio"][name="producto"]:checked');
  if (!seleccionado) {
    alert("Por favor selecciona un producto.");
    document.getElementById("total").textContent = "0";
    return;
  }

  const productoDiv = seleccionado.closest('.producto');
  const cantidadInput = productoDiv.querySelector('.cantidad');
  const precio = parseFloat(seleccionado.dataset.precio);
  const cantidad = parseInt(cantidadInput.value) || 1;
  const total = precio * cantidad;

  document.getElementById("total").textContent = total.toFixed(2);
}

async function generarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const rfc = document.getElementById("rfc").value;
  const razon = document.getElementById("razon").value;
  const direccion = document.getElementById("direccion").value;
  const banco = document.getElementById("banco").value;
  const total = document.getElementById("total").textContent;

  const seleccionado = document.querySelector('input[type="radio"][name="producto"]:checked');
  if (!seleccionado) {
    alert("Por favor selecciona un producto.");
    return;
  }

  const productoDiv = seleccionado.closest('.producto');
  const nombreProducto = seleccionado.value;
  const precio = parseFloat(seleccionado.dataset.precio);
  const cantidad = parseInt(productoDiv.querySelector('.cantidad').value) || 1;

  doc.text("Factura OLIVOS", 20, 20);
  doc.text(`Nombre: ${nombre}`, 20, 30);
  doc.text(`Correo: ${correo}`, 20, 40);
  doc.text(`RFC: ${rfc}`, 20, 50);
  doc.text(`Razón Social: ${razon}`, 20, 60);
  doc.text(`Dirección: ${direccion}`, 20, 70);
  doc.text(`Banco: ${banco}`, 20, 80);

  doc.text("Detalle de Compra:", 20, 100);
  doc.text(`Producto: ${nombreProducto}`, 20, 110);
  doc.text(`Cantidad: ${cantidad}`, 20, 120);
  doc.text(`Precio unitario: $${precio.toFixed(2)}`, 20, 130);
  doc.text(`Total: $${total}`, 20, 140);

  doc.save("factura_olivos.pdf");
}
