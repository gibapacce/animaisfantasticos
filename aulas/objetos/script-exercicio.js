// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: "Gilberto",
  sobrenome: "Pacce",
  idade: 36,
};

dadosPessoais.nome;
dadosPessoais.sobrenome;
dadosPessoais.idade;

// Crie um método no objeto anterior, que mostre o seu nome completo

dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: "Labrador",
  idade: `${10} ${"anos"}`,
  cor: "Preto",
  latir(pessoa) {
    if (pessoa === "homem") {
      return "latir";
    } else {
      return "Não faz nada.";
    }
  },
};

cachorro.labrador = function () {
  return `${this.raca} ${this.cor} ${this.idade} ${this.latir()}`;
};

console.log(cachorro.labrador());

// nomeie 3 propriedades ou métodos de strings
// .toLowerCase;
// .chartAt;
// .replace;
// .lenght;

var nome = "Glberto";
nome.fixed;
nome.bold;
nome.small;
nome.lenght;

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector("btn");
btn.addEventListener;
btn.after;
btn.animate;
btn.dispatchEvent;
btn.innerHTML;

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

$("url").click(function () {
  $(this).select();

  document.execCommand("copy");
});
