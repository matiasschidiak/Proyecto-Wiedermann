// aparicion al scrollear en el cartel "sobre-nosotros"
const sobreNosotros = document.querySelector('.sobre-nosotros');
if (sobreNosotros) {
    const observer1 = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                sobreNosotros.classList.add('visible');
                observer1.unobserve(sobreNosotros);
            }
        });
    }, { threshold: 0.2 });

    observer1.observe(sobreNosotros);
}

// aparicion al scrollear en servicios
const contenedor = document.querySelector('.contenedor');
if (contenedor) {
    const observer2 = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                contenedor.classList.add('visible');
                observer2.unobserve(contenedor);
            }
        });
    }, { threshold: 0.2 });

    observer2.observe(contenedor);
}

//mensaje de bienvenida
document.addEventListener("DOMContentLoaded", function() {
  const boton = document.getElementById("botonBienvenida");
  const mensaje = document.getElementById("mensaje");

  boton.addEventListener("click", function() {
    // Mostrar ventana emergente
    alert("¡El mejor Taller de detailing de toda la argentina, Esperamos que encuentres lo que buscas en Inter Car!");
  });
});
