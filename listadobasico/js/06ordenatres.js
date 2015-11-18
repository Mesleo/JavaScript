// Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a 
// mayor

formularioTresNumeros = '<input id="numero1" type="text"/>'+
		'<input id="numero2" type="text"/>'+
		'<input id="numero3" type="text"/>'+
		'<input id="enviar" type="button" value="Enviar"/>';
divNumeros = document.getElementById('numeros');
divInfo = document.getElementById('respuestas');

window.onload = function(){
	crearFormulario(divNumeros, formularioTresNumeros);
	document.getElementById('enviar').addEventListener("click", ordenaTres, false);
}

function crearFormulario(valor1, valor2){
	valor1.innerHTML += valor2;
}

function ordenaTres(){
	a = new Number(document.getElementById('numero1').value.trim());
	b = new Number(document.getElementById('numero2').value.trim());
	c = new Number(document.getElementById('numero3').value.trim());
	if(isNaN(a) || isNaN(b) || isNaN(c)){
		divInfo.innerHTML = "<p id=\"erroneo\">Debes introducir números</p>";
	}
	else{
		divInfo.innerHTML = '<p>Ordenados de menor a mayor: </p>';
		if(a <= b && c <= a){
			divInfo.innerHTML += c+' < '+a+' < '+b;
		}
		else if(c <= b && a <= c){
			divInfo.innerHTML += a+' < '+c+' < '+b;
		}
		else if(c <= a && a <= b){
			divInfo.innerHTML += c+' < '+a+' < '+b;
		}
		else if(c <= a && b <= c){
			divInfo.innerHTML += b+' < '+c+' < '+a;
		}
	}
}