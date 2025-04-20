document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  const tabla = document.getElementById("tablaDatos").getElementsByTagName("tbody")[0];

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const id = document.getElementById("id").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();

    if (id && nombre && apellido && email) {
      const fila = tabla.insertRow();

      fila.insertCell(0).textContent = id;
      fila.insertCell(1).textContent = nombre;
      fila.insertCell(2).textContent = apellido;
      fila.insertCell(3).textContent = email;

      form.reset();
    } else {
      alert("Por favor, completá todos los campos.");
    }
  });
});
