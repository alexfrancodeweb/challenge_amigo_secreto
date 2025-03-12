/* Variables de nombres */
let amigosParticipantes = [];

function agregarAmigo() {
  let inputAmigo = document.getElementById("amigo"); // Obtenemos el input
  let nombre = inputAmigo.value.trim(); // Capturamos y limpiamos el valor del input

  if (nombre !== "") {
    amigosParticipantes.push(nombre); // Agregamos el nombre al array
    console.log(amigosParticipantes); // Mostramos la lista en consola
    inputAmigo.value = ""; // Limpiamos el campo de texto después de agregar
  } else {
    alert("Por favor, inserte un nombre.");
  }
}