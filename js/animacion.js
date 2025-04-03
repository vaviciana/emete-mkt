document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.querySelector(".manifiesto");
    const duplicateText = textContainer.innerHTML; // Duplicamos el contenido
    textContainer.innerHTML += duplicateText;
});

const boton = document.getElementById('botonServicios');
const seccionServicios = document.getElementById('servicios');

boton.addEventListener('click', () => {
if (seccionServicios) {
    seccionServicios.scrollIntoView({ behavior: 'smooth' });
}
});
