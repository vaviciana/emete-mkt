document.addEventListener('DOMContentLoaded', () => {
    const seccionFormulario = document.getElementById('formulario');
    const botonRecursos1 = document.getElementById('botonRecursos1');
    const botonRecursos2 = document.getElementById('botonRecursos2');
  
    function scrollFormulario() {
      if (seccionFormulario) {
        seccionFormulario.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    if (botonRecursos1) botonRecursos1.addEventListener('click', scrollFormulario);
    if (botonRecursos2) botonRecursos2.addEventListener('click', scrollFormulario);
  });
  