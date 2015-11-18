// Implementa Pirámide que mediante un bucle for visualice una pirámide del siguiente 
// tipo:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 0000000000

formulario = '<form action="#"><label>Introduce un número:</label>'+
		'<input id="numero" type="text"/>'+
		'<input id="mostrar" type="button" value="Mostrar"/>'+
		'<input id="reset" type="button" value="Reset" /></form>';

info = document.getElementById('respuestas');
divForm = document.getElementById('formulario');

window.onload = function(){
	crearFormulario(divForm, formulario);
	document.getElementById('mostrar').onclick=function(){
		resetear();
		numeroIntro = new Number(document.getElementById('numero').value.trim());
		mostrarPiramide();
		document.getElementById('numero').value = "";
	}
	document.getElementById('reset').onclick=function(){
		resetear();
	}
}

function crearFormulario(valor1, valor2){
	valor1.innerHTML = valor2;
}

function resetear(){
	info.innerHTML = "";
}

function mostrarPiramide(){
	if(isNaN(numeroIntro)){
		info.innerHTML = '<h3 id="erroneo">El número introducido no es válido</h3>';
	}
	else if(numeroIntro < 1){
		info.innerHTML = '<h3>Debe introducir un valor mayor que 1</h3>';
	}
	else{
		for (var i = 1; i <= numeroIntro; i++) {
			for (var x = 1; x < i; x++) {
				info.innerHTML += x;
			};
			info.innerHTML += i+'<br/>';
		};
	}	
}