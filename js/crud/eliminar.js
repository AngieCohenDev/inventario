export const crearBotonEliminar = (fila) => {
  const boton = document.createElement('button');
  boton.textContent = 'X';
  boton.id = 'btn_eliminar';

  boton.addEventListener('click', () => {
      fila.remove();
  });

  return boton;
};
