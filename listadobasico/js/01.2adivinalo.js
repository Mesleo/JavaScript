var formularioAdivina = '<label for="numero">Introduce un número del 1 al 100:</label>'+
		'<input id="numero" type="text"/>'+
		'<input id="enviar" type="button" value="Enviar"/>';

var volverAJugar = '<p>¿Desea volver a jugar?</p>'+
		'<form name="formularioVolverAJugar" action="#" >'+
		'<input type="radio" name="resp" value="Si" checked/>SI'+
		'<input type="radio" name="resp" value="No" />NO'+
		'<input id="enviar" type="button" value="Enviar" /></form>';

window.onload = function(){
	divAdivina = document.getElementById('adivina');
	crearFormulario(divAdivina, volverAJugar);
	document.getElementById('enviar').addEventListener('click', comprobarRespuesta, false);
}

function crearFormulario(valor1, valor2){
	valor1.innerHTML = valor2;
}

function generarNumeroAdivinar(){
	numeroAdivinar = Math.round(Math.random()*(101-0));
	console.log(numeroAdivinar);
}

function jugar(valor){
	if(valor == "Si"){
		generarNumeroAdivinar();
		opener.crearFormulario(divAdivina, formularioAdivina);
	}
	else if (valor == "No"){
		adios = "ADIOS";
		crearFormulario(divAdivina, adios);
		window.opener.crearFormulario(divAdivina, adios);
	}
}

function comprobarRespuesta(){
	opciones = document.getElementsByName("resp");
	var seleccionado = false;
	var respuesta;
	console.log(opciones.value);
	for(var i=0; i<opciones.length; i++) {    
	  if(opciones[i].checked) {
	  	respuesta = opciones[i].value;
	    seleccionado = true;
	  }
	}
	jugar(respuesta);
}
