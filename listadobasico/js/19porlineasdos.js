// Implementa PorLineasDos que visualice los números del 0 al 100 separados por comas. 
// Cada múltiplo de 7 o finalizado en 7 ha de comenzar en una línea nueva

formulario = '<form action="#"><label>Cada múltiplo de 7 o finalizado en 7 empieza en una nueva línea</label>'+
		'<input id="mostrar" type="button" value="Mostrar"/>'+
		'<input id="reset" type="button" value="Reset" /></form>';

info = document.getElementById('respuestas');
divForm = document.getElementById('formulario');
numero = "0";

window.onload = function(){
	crearFormulario(divForm, formulario);
	document.getElementById('mostrar').onclick=function(){
		resetear();
		mostrarPorLineas();
	}
	document.getElementById('reset').onclick=function(){
		resetear();
	}
}

function crearFormulario(valor1, valor2){
	valor1.innerHTML = valor2;
}

function resetear(){
	numero="0";
	info.innerHTML = "";
}

function mostrarPorLineas(){
	for (var i = numero; i < 100; i++) {
		numCadena = new String(i);
		if(i%7==0 || numCadena.charAt(numCadena.length-1)==7){
			info.innerHTML += '<br/>';
		}
		info.innerHTML += i+', ';
	};
}