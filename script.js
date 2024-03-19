function calcular() {
  var soma = 0;
  for (var i = 1; i <= 100; i++) {
    soma += i;
  }

  window.alert('A soma dos números de 1 a 100 é: ' + soma);

  var resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerText = 'A soma dos números de 1 a 100 é: ' + soma;
}
