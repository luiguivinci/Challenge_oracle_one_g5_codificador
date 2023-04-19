function validadorTexto(str_cadena = "") {
  if (str_cadena !== "") {
    let cadenaFormateada = str_cadena.replace(/[^\w\s]/gi, "");
    return cadenaFormateada.toLocaleLowerCase();
  }
}
