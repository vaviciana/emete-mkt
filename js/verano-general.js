const botonFormulario = document.getElementById('botonFormulario');
const seccionFormulario = document.getElementById('formulario');

botonFormulario.addEventListener('click', () => {
    if (seccionFormulario) {
        seccionFormulario.scrollIntoView({ behavior: 'smooth' });
    }
});

const botonServicios = document.getElementById('boton-landing-servicios');
const seccionServicios = document.getElementById('servicios');

botonServicios.addEventListener('click', () => {
    if (seccionServicios) {
        seccionServicios.scrollIntoView({ behavior: 'smooth' });
    }
});
