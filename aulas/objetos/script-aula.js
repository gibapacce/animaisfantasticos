//OBJETOS
var pessoa = {
  nome: "André",
  idade: 28,
  profissao: "Designer",
  possuiFaculdade: true,
};

pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true

//MÉTODOS
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

//MÉTODOS NOVO MODO
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

//ORGANIZAR O CÓDIGO
Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

//CRIAR UM OBJETO
var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'

//DOT NOTATION GET
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

var bg = menu.backgroundColor; // '#84E'

//DOT NOTATION SET
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

menu.backgroundColor = "#000";
console.log(menu.backgroundColor); // '#000'

//ADICIONAR PROPRIEDADES E MÉTODOS
var menu = {
  width: 800,
};

menu.height = 50;
menu.position = "fixed";

//PALAVRA-CHAVE THIS
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};

menu.metadeHeight(); // 25
// sem o this, seria 60

//PROTÓTIPO E HERANÇA
var menu = {
  width: 800,
};

menu.hasOwnProperty("width"); // true
menu.hasOwnProperty("height"); // false

//TUDO É OBJETO
var nome = "André";

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace("ré", "rei"); // 'Andrei'
nome; // 'André'

//NÚMEROS
var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

//FUNÇÕES
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1

//ELEMENTOS DO DOM
var btn = document.querySelector(".btn");

btn.classList.add("azul"); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener("click", function () {
  console.log("Clicou");
});
