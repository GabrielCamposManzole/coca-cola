/* $$ = function (id) {
    return document.getElementById(id);
}

window.onload = function () {
    $$("quantity-input").innerHTML = sessionStorage.getElementById("contador");
    $$("subtract-btn").onclik = function () {
        if (onclick.add - btn) {
            sessionStorage.contador = parseInt(sessionStorage.contador) + 1;
        } else {
            sessionStorage.contador = 1;
        }
    }
} */

let = {
    nome: 'Gabriel Campos Maznoli',
    universidade: 'UTFPR',
    printName: function () {
        console.log(this.nome);
    }
}

let gabrielJSON = JSON.stringify(gabriel);
console.log(gabriel);
console.log(gabrielJSON);

let gabrielWithProto = Object.setPrototypeOf(JSON.parse(gabrielJSON), gabriel);
console.log(gabrielWithProto);
gabrielWithProto.printName();

document.addEventListener("DOMContentLoaded", function () {
    const getById = function (id) {
        return document.getElementById(id);
    };

    const resultElement = getById("result");
    const myButtonElement = getById("myButton");

    resultElement.innerHTML = localStorage.getItem("counter") || 0;

    myButtonElement.addEventListener("click", function () {
        localStorage.counter = (parseInt(localStorage.counter) || 0) + 1;
        resultElement.innerHTML = localStorage.counter;
    });
});