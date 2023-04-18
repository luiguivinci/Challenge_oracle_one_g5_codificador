document.addEventListener("DOMContentLoaded", () => {
  // Declaración de inputs
  const txtInputEncriptar = document.getElementById("txtInputEncriptar");
  const txtOutpuEncriptar = document.getElementById("txtOutpuEncriptar");

  // Declaración de botones
  const btnEncriptar = document.getElementById("btnEncriptar");
  const btnDesencriptar = document.getElementById("btnDesencriptar");

  // Declaración de interacciones de eventos
  btnEncriptar.addEventListener("click", () => {
    if (txtInputEncriptar.value !== "") {
      let input = txtInputEncriptar.value;
      const output = encriptar(input);
      txtInputEncriptar.value = "";
      txtOutpuEncriptar.value = output;
    }
  });
  btnDesencriptar.addEventListener("click", () => {
    if (txtOutpuEncriptar.value !== "") {
      let input = txtOutpuEncriptar.value;
      const output = desencriptar(input);
      txtOutpuEncriptar.value = "";
      txtInputEncriptar.value = output;
    }
  });
});
