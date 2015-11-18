// Implementa  CerosYUnos que lea una secuencia de ceros y unos. Mostrará el número
// de ceros de la secuencia. Dejará de leer cuando el usuario introduzca el número 2

formulario = '<form action="#"><label>Introduce un número:</label>'+
		'<input id="numero" type="text"/>'+
		'<input id="annadir" type="submit" value="Añadir número"/>'+
		'<input id="mostrar" type="button" value="Mostrar"/>'+
		'<input id="reset" type="button" value="Reset"/></form>';

info = document.getElementById('respuestas');
divForm = document.getElementById('formulario');
totalCeros = 0;

window.onload = function(){
	crearFormulario(divForm, formulario);
	document.getElementById('annadir').onclick=function(){
		numeroIntro = new Number(document.getElementById('numero').value.trim());
		annadir();
		document.getElementById('numero').value = "";
	}
	document.getElementById('mostrar').onclick=function(){
		mostrarCeros();
	}
	document.getElementById('reset').onclick=function(){
		contadorACero();
	}
}

function crearFormulario(valor1, valor2){
	valor1.innerHTML = valor2;
}

function contadorACero(){
	totalCeros=0;
	info.innerHTML = "";
}

function annadir(){
	if(isNaN(numeroIntro) || numeroIntro < 0 || numeroIntro >2){
		info.innerHTML = '<h3 id="erroneo">El número introducido no es válido</h3>';
	}
	else if(numeroIntro == 0){
		info.innerHTML = "";
		totalCeros++;
	}
	else if(numeroIntro == 2){
		mostrarCeros();
	}	
}

function mostrarCeros(){
	info.innerHTML = '<h3>El número de ceros introducidos es: ' +totalCeros+'</h3>';
}