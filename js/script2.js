document.addEventListener("DOMContentLoaded", function() {
  const boton = document.getElementById("botonBienvenida");
  const mensaje = document.getElementById("mensaje");

  boton.addEventListener("click", function() {
    // Mostrar ventana emergente
    alert("¡Bienvenido/a la página!");
  });
});
