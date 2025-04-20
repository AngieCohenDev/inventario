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
      
      let emailExiste = false;
      for (let i = 0; i < tabla.rows.length; i++) {
        const emailTabla = tabla.rows[i].cells[3].textContent;
        if (emailTabla === email) {
          emailExiste = true;
          break;
        }
      }

      if (emailExiste) {
        alert("El correo ya existe.");
      } else {
        const fila = tabla.insertRow();
        fila.insertCell(0).textContent = id;
        fila.insertCell(1).textContent = nombre;
        fila.insertCell(2).textContent = apellido;
        fila.insertCell(3).textContent = email;
        form.reset();
      }
    } else {
      alert("Por favor, completá todos los campos.");
    }
  });
});
