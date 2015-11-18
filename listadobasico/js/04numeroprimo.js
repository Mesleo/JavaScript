// Implenta NumeroPrimo que pida un número e indique si es primo o no

formularioNumeroPrimo = '<input id="numero_primo" type="text"/>'+
		'<input id="enviar" type="button" value="Enviar"/>';
divNumeros = document.getElementById('numeros');
divInfo = document.getElementById('respuestas');

window.onload = function(){
	crearFormulario(divNumeros, formularioNumeroPrimo);
	document.getElementById('enviar').onclick=function(){
		primo = new Number(document.getElementById('numero_primo').value.trim());
		calcularNumeroPrimo();
	}
}

function crearFormulario(valor1, valor2){
	valor1.innerHTML += valor2;
}

function calcularNumeroPrimo(){
	if(isNaN(primo)){
		divInfo.innerHTML = '<p id="erroneo">No es un número</p>';
	}
	else{
		if (primo==1) {
			divInfo.innerHTML = '<p>Es primo</p>';
			return;
		};
		for (var i = 2; i < primo; i++) {
			if(primo%i==0){
				divInfo.innerHTML = '<p id="erroneo">No es primo</p>';
				break;
			}
			else if(primo%primo==0){
				divInfo.innerHTML = '<p>Es primo</p>';
			}
		};
	}
}