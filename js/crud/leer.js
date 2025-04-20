export const ObtenerDatos = () => {
    const id = document.getElementById("id").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    return { id, nombre, apellido, email };
}
