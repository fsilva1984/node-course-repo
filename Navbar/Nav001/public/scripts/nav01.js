
/*

Script:

  quando o botao mobile e
clicado a funcao adiciona uma class
a tag nav, 
com essa class existindo podemos manipular
atravez do css,

outra vez o botao sendo clicado a classe e
removida dando fim no estilo empregado na tag nav

*/




// pegando o id do botao
const btnMobile = document.getElementById("btn-mobile");

/* funcao para add e remover uma class
no elemento de id 'nav' */
function menuHamburger() {
  // pegando o id da tag nav
  const nav = document.getElementById("nav");

  /* metodo toggle cria a class de nome 'active'
  se ela nao existir , ou remove se ela existir */
  nav.classList.toggle("active")
}


btnMobile.addEventListener("click", menuHamburger);


