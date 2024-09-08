var abrirMenu = document.getElementById("abrir-menu")
var opcoesMobile = document.getElementById("opcoes-mobile")
var fecharMenu = document.getElementById("fechar-menu")

//menu
var menuMobile = document.getElementById("menu-mobile") //menu principal

//submenu
var subMenu = document.getElementById("submenu-mobile") //submenu
var btnSolucoes = document.getElementById("btn-solucoes")

//sub solucoes
var subMenuSolucoes = document.getElementById("submenu-solucoes") //sub solocoes
var btnSubSolucoes = document.getElementById("btn-subsolucoes") 

//voltar
var voltarMenu = document.getElementById("voltar-menu")
var voltarSub =  document.getElementById("voltar-sub")


//fechar cases
var menuCases =  document.getElementById("menu-cases")


//abrindo e fechando menu
abrirMenu.addEventListener('click', ()=>{
	opcoesMobile.classList.add('abrir-opcoes')
})

//fechando o menu ao apertar no x e em cases
fecharMenu.addEventListener('click', ()=>{
	opcoesMobile.classList.remove('abrir-opcoes')
})

menuCases.addEventListener('click', ()=>{
	opcoesMobile.classList.remove('abrir-opcoes')
})

// abrindo submenu
btnSolucoes.addEventListener('click', ()=>{
	subMenu.removeAttribute('class')
	subMenu.classList.add('abrir')
	menuMobile.removeAttribute('class')
	menuMobile.classList.add('fechar')
})


//voltando pro menu principal
voltarMenu.addEventListener('click', ()=>{
	subMenu.removeAttribute('class')
	subMenu.classList.add('fechar')
	menuMobile.removeAttribute('class')
	menuMobile.classList.add('abrir')
})

//abrindo menu solucoes
btnSubSolucoes.addEventListener('click', ()=>{
	subMenu.removeAttribute('class')
	subMenu.classList.add('fechar')
	subMenuSolucoes.removeAttribute('class')
	subMenuSolucoes.classList.add('abrir')
})


voltarSub.addEventListener('click', ()=>{
	subMenuSolucoes.removeAttribute('class')
	subMenuSolucoes.classList.add('fechar')
	subMenu.removeAttribute('class')
	subMenu.classList.add('abrir')
})
