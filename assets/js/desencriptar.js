/**
 *
 * @param {string} str_texto recibe una cadena codificada
 * @returns retorna la cadena decodificada
 */
function desencriptar(str_texto = "") {
  if (str_texto !== "") {
    let cadena = validadorTexto(str_texto);
    // Reemplazar "ai" por "a"
    cadena = cadena.replace(/ai/g, "a");

    // Reemplazar "enter" por "e"
    cadena = cadena.replace(/enter/g, "e");

    // Reemplazar "imes" por "i"
    cadena = cadena.replace(/imes/g, "i");

    // Reemplazar "ober" por "o"
    cadena = cadena.replace(/ober/g, "o");

    // Reemplazar "ufat" por "u"
    cadena = cadena.replace(/ufat/g, "u");
    return cadena;
  }
  return "";
}
