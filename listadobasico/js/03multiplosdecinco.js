//Implementa MultiplosDeCinco que pida 7 números e indique si alguno es múltiplo de 5

formulario = '<input id="numero0" type="text"/>'+
		'<input id="numero1" type="text"/>'+
		'<input id="numero2" type="text"/>'+
		'<input id="numero3" type="text"/>'+
		'<input id="numero4" type="text"/>'+
		'<input id="numero5" type="text"/>'+
		'<input id="numero6" type="text"/>'+
		'<input id="enviar" type="button" value="Enviar"/>';
divFormulario = document.getElementById('multiplos');
divRespuestas = document.getElementById('respuestas');

window.onload = function(){
	crearFormulario(divFormulario, formulario);
	document.getElementById('enviar').onclick=function(){
		divRespuestas.innerHTML = "";
		calcularMultiplos();
	}
}

function crearFormulario(valor1, valor2){
	valor1.innerHTML += valor2;
}

function calcularMultiplos(){
	for (var i = 0; i < 7; i++) {
		valorInput = new Number(document.getElementById('numero'+i).value.trim());
		if (isNaN(valorInput)){
			divRespuestas.innerHTML += '<p  id="erroneo" class="multiplo">No es un número.</p>';
		}
		else if(valorInput%5 == 0 && valorInput!=0){
			divRespuestas.innerHTML += '<p class="multiplo">Es múltiplo de 5.</p>';
		}
		else{
			divRespuestas.innerHTML += '<p class="multiplo">No es múltiplo.</p>';
		}
	};
}