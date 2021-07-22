//DOCUMENT OBJECT MODEL (DOM)
console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser

//WINDOW E DOCUMENT
window.alert("Isso é um alerta");
alert("Isso é um alerta"); // Funciona

document.querySelector("h1"); // Seleciona o primeiro h1
document.body; // Retorna o body

//NODE
const titulo = document.querySelector("h1");

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener("click", callback);
// ativa a função callback ao click no titulo
