const formulario = document.querySelector("#formulario");
const tabla = document.querySelector("#tablaDatos");
let DB = [];

eventListeners();

function eventListeners() {
  formulario.addEventListener("submit", insertarData);

  document.addEventListener("DOMContentLoaded", () => {
    DB = JSON.parse(localStorage.getItem("registros")) || [];
    pintarHTML();
  });
}

function insertarData(e) {
  e.preventDefault();

  const obtenerInformacion = () => {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    return { nombre, apellido, email };
  };

  const { nombre, apellido, email } = obtenerInformacion();

  if (!validarCamposLLenos(nombre, apellido, email)) {
    alert("Algo falló");
    return;
  }

  const registroId = {
    id: Date.now(),
    nombre,
    apellido,
    email,
  };

  DB = [...DB, registroId];
  localStorage.setItem("registros", JSON.stringify(DB));

  pintarHTML();

  console.log("Estos son los datos", DB);

  formulario.reset();
}

const validarCamposLLenos = (nombre, apellido, email) => {
  if (nombre === "") {
    alert("El campo Nombre no puede estar vacío.");
    return false;
  }
  if (apellido === "") {
    alert("El campo Apellido no puede estar vacío.");
    return false;
  }
  if (email === "") {
    alert("El campo Email no puede estar vacío.");
    return false;
  }
  return true;
};

const pintarHTML = () => {
  const tbody = tabla.querySelector("tbody");
  tbody.innerHTML = "";

  DB.forEach((registro) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
    <td>${registro.id}</td>
      <td>${registro.nombre}</td>
      <td>${registro.apellido}</td>
      <td>${registro.email}</td>
      <td></td> <!-- Dejar celda vacía para el botón -->
    `;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.style.color = "red";
    botonEliminar.addEventListener("click", () => eliminarRegistro(registro.id));

    fila.children[4].appendChild(botonEliminar);
    tbody.appendChild(fila);
  });
};

function eliminarRegistro(id) {
  if (confirm("¿Estás seguro de que quieres eliminar este registro?")) {
    DB = DB.filter(registro => registro.id !== id);
    localStorage.setItem("registros", JSON.stringify(DB));
    pintarHTML();
  }
}

