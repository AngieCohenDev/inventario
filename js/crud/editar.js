export const crearBotonEditar = (fila) => {
    const boton = document.createElement('button');
    boton.textContent = 'Editar';
    boton.id = 'btn_editar';
  
    boton.addEventListener('click', () => {
        alert('Usted esta editando..')
    });
  
    return boton;
  };