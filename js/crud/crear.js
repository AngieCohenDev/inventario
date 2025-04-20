export const insertData = ({ id, nombre, apellido, email }, tabla, formulario) => {
  const fila = tabla.insertRow();
  fila.insertCell(0).textContent = id;
  fila.insertCell(1).textContent = nombre;
  fila.insertCell(2).textContent = apellido;
  fila.insertCell(3).textContent = email;
  formulario.reset();
}