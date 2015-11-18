// Implenta NumerosPrimosEnSecuencia que pida un número e indique cuántos números 
// primos existen entre el 1 y dicho número

formularioNumeroPrimo = '<input id="numero_primo" type="text"/>'+
		'<input id="enviar" type="button" value="Enviar"/>';
divNumeros = document.getElementById('numeros');
divInfo = document.getElementById('respuestas');
contiene = "";

window.onload = function(){
	crearFormulario(divNumeros, formularioNumeroPrimo);
	document.getElementById('enviar').addEventListener("click", calcularNumeroPrimo, false);
}

function crearFormulario(valor1, valor2){
	valor1.innerHTML += valor2;
}

function calcularNumeroPrimo(){
	divInfo.innerHTML = "";
	numeroIntro = new Number(document.getElementById('numero_primo').value.trim());
	if(isNaN(numeroIntro)){
		divInfo.innerHTML = "<p id=\"erroneo\">No es un número</p>";
	}
	else{
		divInfo.innerHTML += '<p>Primos: </p>';
		for (var i = numeroIntro; i > 1; i--) {
			var arrayPrimos = new Array();
			for(var x = 2; x < i; x++){
				if(i%x==0){
					arrayPrimos.push(0);
				}
				else{
					arrayPrimos.push(1);
				}
			};
			if (arrayPrimos.indexOf(0) == -1) {
				divInfo.innerHTML += ' - '+i+' ';
			};
		};
	}
}