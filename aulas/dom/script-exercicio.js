// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector(".ativo");
console.log(elementoAtivo);

// Retorne a linguagem do navegador
const linguagemNav = navigator.language;
console.log(linguagemNav);

// Retorne a largura da janela
const larguraJanela = window.innerWidth;
const alturaJanela = window.innerHeight;
console.log(larguraJanela, alturaJanela);
