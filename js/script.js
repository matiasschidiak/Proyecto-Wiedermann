const sobreNosotros = document.querySelector('.sobre-nosotros');

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            sobreNosotros.classList.add('visible');
            observer.unobserve(sobreNosotros);
            }
        });
}, { threshold: 0.2 });

observer.observe(sobreNosotros);