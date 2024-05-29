/* window.alert('Minha primeira mensagem!');
window.confirm('Proceguir?');Gabriel */
/* var nome = window.prompt('qual é o seu nome?');
window.alert('É um grande prazer te conhecer, ' + nome + ' ! '); */
var n1 = Number.parseFloat(window.prompt('Digite um número: '));
var n2 = Number.parseFloat(window.prompt('Dígite outro número: '));
var s = n1 + n2;
window.alert('A soma dos valores é : ' + s);
var n3 = Number(window.prompt('Dígite o terceiro valor: '));
var t = s + n3;
window.alert(
  `Total dos valores ${n1} + ${n2} é: ${s}. Somando com ${n3} , Fica: ${t} `
);
