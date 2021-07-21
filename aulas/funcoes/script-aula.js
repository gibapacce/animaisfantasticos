//FUNÇÕES
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4); // 16
areaQuadrado(5); // 25
areaQuadrado(2); // 4

console.log(areaQuadrado(3));

function pi() {
  return 3.14;
}

console.log(pi());

var total = 5 * pi(); // 15.7

console.log(5 * pi());

//PARÂMETROS E ARGUMENTOS
// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura * 2);
  return imc;
}

imc(80, 1.8); // 80 e 1.80 são os argumentos
imc(60, 1.7); // 60 e 1.70 são os argumentos

//PARÊNTESES EXECUTA A FUNÇÃO
function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}
corFavorita(); // retorna 'Você não gosta de nada'

//ARGUMENTOS PODEM SER FUNÇÕES
addEventListener("click", function () {
  console.log("Clicou");
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

//PODE OU NÃO RETORNAR UM VALOR
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc(80, 1.8); // retorna o imc
console.log(imc(80, 1.8)); // retorna o imc e undefined

//VALORES RETORNADOS
function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

//ESCOPO
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}
console.log(totalPaises); // erro, totalPaises não definido

//ESCOPO LÉXICO
var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro

//HOISTING
imc(80, 1.8); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
