/**
 *
 * @param {string} str_texto recibe una cadena de solo letras minúsculas
 * @returns retorna la cadena codificada
 */
function encriptar(str_texto = "") {
  if (str_texto !== "") {
    let textoArray = validadorTexto(str_texto);
    textoArray = textoArray.split("");
    let textoCodificadoArray = new Array();
    let textoCodificadoOutput;
    textoArray.forEach((letra) => {
      let codigo;
      switch (letra) {
        case "a":
          codigo = "ai";
          break;
        case "e":
          codigo = "enter";
          break;
        case "i":
          codigo = "imes";
          break;
        case "o":
          codigo = "ober";
          break;
        case "u":
          codigo = "ufat";
          break;

        default:
          codigo = letra;
          break;
      }
      textoCodificadoArray.push(codigo);
    });
    textoCodificadoOutput = textoCodificadoArray.join("");
    return textoCodificadoOutput;
  }
  return "";
}
