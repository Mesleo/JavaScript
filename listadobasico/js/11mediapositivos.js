// Implementa  MediaPositivos que calcule la media de una serie de números positivos,
// introducidos por teclado. Dejará de leer cuando el usuario introduzca el 0

formulario = '<form action="#"><label>Introduce un número:</label>'+
		'<input id="numero" type="text"/>'+
		'<input id="annadir" type="submit" value="Añadir número"/>'+
		'<input id="media" type="button" value="Media"/>'+
		'<input id="reset" type="button" value="Reset" /></form>';

info = document.getElementById('respuestas');
divForm = document.getElementById('formulario');
totalNumeros = 0;
resultado = 0;

window.onload = function(){
	crearFormulario(divForm, formulario);
	document.getElementById('annadir').onclick=function(){
		numeroIntro = new Number(document.getElementById('numero').value.trim());
		annadir();
		document.getElementById('numero').value = "";
	}
	document.getElementById('media').onclick=function(){
		calcularMedia();
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
	if(isNaN(numeroIntro) || numeroIntro < 0){
		info.innerHTML = '<h3 id="erroneo">El número introducido no es válido</h3>';
	}
	else if(numeroIntro == "0"){
		calcularMedia();
	}
	else{
		totalNumeros++;
		resultado += numeroIntro;
		info.innerHTML += numeroIntro+" + ";
	}	
}

function calcularMedia(){
	media = resultado/totalNumeros;
	info.innerHTML = '<h3>La media de los números introducidos es: ' +media+'</h3>';
}