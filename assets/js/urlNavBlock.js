// EN DESARROLLO
function urlNavBlock(status = true) {
  if (status === true) {
    // Obtén la URL actual del navegador
    var urlActual = window.location.href;

    // Define la URL permitida (en este caso, la página "index")
    var urlPermitida =
      "file:///C:/laragon/www/Challenge_oracle_one_g5_codificador/views/index.html";

    // Compara la URL actual con la URL permitida
    if (urlActual !== urlPermitida) {
      // Redirige al usuario a la página "index"
      alert("No tienes permiso para acceder a esta página.");
      window.location.href = "../views/index.html";
      // O muestra un mensaje de error
    }
  }
}
