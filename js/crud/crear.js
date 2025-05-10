import { crearBotonEliminar } from "../crud/eliminar.js";
import { generarId } from "../utils/idGeneretor.js";
import { crearBotonEditar } from "./editar.js";

export const InsertarDatos = ({ nombre, apellido, email }, tabla, form) => {
  const fila = tabla.insertRow();
  fila.insertCell(0).textContent = generarId();
  fila.insertCell(1).textContent = nombre;
  fila.insertCell(2).textContent = apellido;
  fila.insertCell(3).textContent = email;
  const celdaAcciones = fila.insertCell(4);
  const botonEliminar = crearBotonEliminar(fila);
  const editar = crearBotonEditar(fila)
  celdaAcciones.appendChild(botonEliminar);
  celdaAcciones.appendChild(editar)

  form.reset();
};

 


