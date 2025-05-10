export const crearBotonEliminar = (id) => {
  const boton = document.createElement('button');
  boton.textContent = 'Borrar';
  boton.id = 'btn_eliminar';

  boton.addEventListener('click', () => {
      fila.remove();
  });

  return boton;
};
