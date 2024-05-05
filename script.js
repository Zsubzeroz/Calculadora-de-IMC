function calcularIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resultado = document.getElementById("resultado");
  
    if (peso > 0 && altura > 0) {
      var imc = peso / (altura * altura);
      resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}.`;
  
      if (imc < 18.5) {
        resultado.innerHTML += " Você está abaixo do peso.";
      } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML += " Seu peso está normal.";
      } else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML += " Você está com sobrepeso.";
      } else {
        resultado.innerHTML += " Você está obeso.";
      }
    } else {
      resultado.innerHTML = "Por favor, insira valores válidos para peso e altura.";
    }
  }
  