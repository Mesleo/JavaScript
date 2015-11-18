// Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número 
// entre el 1 y el 100. Mostrará un mensaje:
// a.  Para indicar si has acertado (en una nueva ventana)
// b.  Para indicar si la solución es mayor o es menor.
// Al finalizar, se le preguntará al usuario si quiere repetir el juego

var formularioAdivina = '<label for="numero">Introduce un número del 1 al 100:</label>'+
		'<input id="numero" type="text"/>'+
		'<input id="enviar" type="button" value="Enviar"/>';

var info = document.getElementById('respuestas');
var divAdivina = document.getElementById('adivina');
var texto = "";

window.onload = function(){
	numeroAdivinar = Math.round(Math.random()*(101-0));
	console.log(numeroAdivinar);
	crearFormulario(divAdivina, formularioAdivina);
	document.getElementById('enviar').addEventListener("click", adivinar, false);
}

function crearFormulario(valor1, valor2){
	valor1.innerHTML = valor2;
}

function adivinar(){
	numero = document.getElementById('numero').value.trim();
	if(numero < 0 || numero > 100 || isNaN(numero) || numero == ""){
		texto = '<h3 id="erroneo">Debes introducir un valor correcto</h3>';
	}
	else if(numero > numeroAdivinar){
		texto = "<h3>El número introducido es mayor</h3>";
	}
	else if (numero < numeroAdivinar){
		texto = "<h3>El número introducido es menor</h3>";
	}
	else {
		abrirNuevaVentana();
	}
	info.innerHTML = texto;
}



function abrirNuevaVentana(){
	ventanaNueva = window.open("","Acertaste","width=400, height=400");
	ventanaNueva.document.write('<html><head><title>Acertaste</title></head>'+
		'<script src="js/01.2adivinalo.js" type="text/javascript"></script>');
	ventanaNueva.document.write('<body><h3>Lo has acertado</h3>');
	ventanaNueva.document.write('<div id="adivina"></div>');
	ventanaNueva.document.write('</body></html>');
	ventanaNueva.document.close();
	ventanaNueva.onload=function(){
		document.addEventListener('click', ventanaNueva.comprobarRespuesta, false);
	}
	
}
