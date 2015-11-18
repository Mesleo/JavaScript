// Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
// a.  Cuántas cifras tiene (7 cifras)
// b.  Lo muestre del revés

formularioDecena = '<input id="numero" type="text"/>'+
		'<input id="enviar" type="submit"/></form>';
formularioDelReves = '<form action="#"><label>¿Mostrar del revés?</label>'+
		'<input id="enviarReves" type="button" value="Enviar"/>';
divNumeros = document.getElementById('numeros');
divInfo = document.getElementById('respuestas');
divDelReves = document.getElementById('delreves');

window.onload = function(){
	crearFormulario(divNumeros, formularioDecena);
	document.getElementById('enviar').addEventListener("click", cuentaCifras, false);
}

function crearFormulario(valor1, valor2){
	valor1.innerHTML = valor2;
}

function mostrarReves(){
	var cifrasAlReves = "";
	for (var i = num.length - 1; i >= 0; i--) {
		cifrasAlReves += num[i];
	};
	divInfo.innerHTML = '<p>'+cifrasAlReves+'</p>';
}

function cuentaCifras(){
	num = document.getElementById('numero').value.trim();
	if(isNaN(num)){
		divInfo.innerHTML = "<p id=\"erroneo\">Debes introducir un número</p>";
	}
	else{
		if(num < 0 || num > 10){
			divInfo.innerHTML = "<p id=\"erroneo\">Debes introducir un número entre 0 y 10</p>";
		}
		else{
			var cifras = num.length;
			divInfo.innerHTML = '<p >'+cifras+' cifras.</p>';
			crearFormulario(divDelReves, formularioDelReves);
			document.getElementById('enviarReves').onclick=function(){
				mostrarReves();
			}
		}
	}
}