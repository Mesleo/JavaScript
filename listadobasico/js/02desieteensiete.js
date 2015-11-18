// Implementa DeSieteEnSiete que escriba los números del 100 al 0 de 7 en siete

numeros = '<input id="numero_de_siete" type="number" value="100" disabled="true"/>'+
		'<input id="enviar" type="button" value="Enviar"/>';
muestraSiete = document.getElementById('numeros');
siete = 100;

window.onload = function(){
	crearFormulario(muestraSiete, numeros);
	document.getElementById('enviar').onclick=function(){
		deSieteEnSiete();
	}
}

function crearFormulario(valor1, valor2){
	valor1.innerHTML += valor2;
}

function deSieteEnSiete(){
	siete -= 7;
	if (siete > 0 ){
		document.getElementById('numero_de_siete').value -= 7;
	}
	else{
		return;
	}
}