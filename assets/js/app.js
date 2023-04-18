document.addEventListener("DOMContentLoaded", () => {
  // Declaración de inputs
  const txtInputEncriptar = document.getElementById("txtInputEncriptar");
  const txtOutpuEncriptar = document.getElementById("txtOutpuEncriptar");

  // Declaración de botones
  const btnEncriptar = document.getElementById("btnEncriptar");
  const btnDesencriptar = document.getElementById("btnDesencriptar");

  // Declaración de interacciones de eventos
  btnEncriptar.addEventListener("click", () => {
    const input = txtInputEncriptar.value;
    const output = encriptar(input);
    txtOutpuEncriptar.value = output;
  });
  btnDesencriptar.addEventListener("click", () => {
    const input = txtOutpuEncriptar.value;
    const output = desencriptar(input);
    txtInputEncriptar.value = output;
  });
});
