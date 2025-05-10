import { eliminarRegistro } from './leer.js';
import { abrirPopupEditar } from './editar.js';

const tabla = document.querySelector("#tablaDatos");

export function pintarHTML(DB) {
  const tbody = tabla.querySelector("tbody");
  tbody.innerHTML = "";

  DB.forEach((registro) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${registro.id}</td>
      <td>${registro.nombre}</td>
      <td>${registro.apellido}</td>
      <td>${registro.email}</td>
      <td></td>
    `;

    const contenedorBotones = fila.children[4];

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.style.color = "red";
    botonEliminar.addEventListener("click", () => eliminarRegistro(registro.id));

    const botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar";
    botonEditar.style.marginLeft = "10px";
    botonEditar.addEventListener("click", () => abrirPopupEditar(registro));

    contenedorBotones.appendChild(botonEliminar);
    contenedorBotones.appendChild(botonEditar);

    tbody.appendChild(fila);
  });
}
