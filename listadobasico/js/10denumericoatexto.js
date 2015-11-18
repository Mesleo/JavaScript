// Implementa DeNumericoATexto que solicite un número del 0 al 99 y lo muestre
// escrito. Por ejemplo, para 12 mostrar: doce, para 44 mostrar: cuarenta y cuatro. Que 
// sea lo más eficiente posible. Implementa  MultiplicaImpares que multiplique los 20 
// primeros números impares y muestre el resultado en pantalla
expNum = new RegExp("^(([0-9])|([1-9][0-9])){1}$");

formulario = '<form action="#"><label>Introduce un número del 0 al 99:</label>'+
		'<input id="numero" type="text"/>'+
		'<input id="enviar" type="submit"/>'+
		'<input id="reset" type="button" value="Reset" /></form>';
formularioMultiplicaImpares = '<form action="#"><label>Multiplica los 20 primeros números impares</label>'+
		'<input id="enviarMultiplicaImpares" type="submit" value="enviar"/></form>';

info = document.getElementById('respuestas');
divForm = document.getElementById('formulario');
info2 = document.getElementById('respuestas2');
divForm2 = document.getElementById('formulario2');
cadena = "";
resultado = new Number(1);

window.onload = function(){
	crearFormulario(divForm, formulario);
	document.getElementById('enviar').onclick=function(){
		numeroIntro = new String(document.getElementById('numero').value.trim());
		deNumericoATexto();
		document.getElementById('numero').value = "";
	}
	crearFormulario(divForm2, formularioMultiplicaImpares);
	document.getElementById('enviarMultiplicaImpares').onclick=function(){
		multiplicaImpares();
	}
	document.getElementById('reset').onclick=function(){
		resetear();
	}
}

function crearFormulario(valor1, valor2){
	valor1.innerHTML = valor2;
}

function resetear(){
	numero=0;
	info.innerHTML = "";
	info2.innerHTML = "";
}

function multiplicaImpares(){
	var numero = 1;
	for (var i = 0; i < 20; i++) {
		resultado *= numero;
		numero+=2;
	};
	info2.innerHTML = '<h3>El producto de los 20 primeros números impares es: ' + resultado + '</h3>';
}

function deNumericoATexto(){
	if(validarExpresion(expNum, numeroIntro)){
		numeroMostrar = numeroIntro;
		if (numeroIntro.length == 1){
			numeroIntro = new String("0"+numeroIntro);
		}
		pasarACadena();
		info.innerHTML = '<h3>El número '+ numeroMostrar +' escrito es: ' + cadena +'</h3>';
	}
	else{
		info.innerHTML = '<h3 id="erroneo">El número introducido no es válido</h3>';
	}	
}

function pasarACadena(){
	primerDigito();
	if(numeroIntro.charAt(0) != "1"){
		segundoDigito();
	}
}
function delDiezAlDiecinueve(){
	switch(numeroIntro.charAt(1)){
		case "0":
			cadena = "diez";
			break;
		case "1":
			cadena = "once";
			break;
		case "2":
			cadena = "doce";
			break;
		case "3":
			cadena = "trece";
			break;
		case "4":
			cadena = "catorce";
			break;
		case "5":
			cadena = "quince";
			break;
		case "6":
			cadena += "seis";
			break;
		case "7":
			cadena += "siete";
			break;
		case "8":
			cadena += "ocho";
			break;
		default:
			cadena += "nueve";
			break;
	}
}

function segundoDigito(){
	switch(numeroIntro.charAt(1)){
		case "1":
			cadena += "uno";
			break;
		case "2":
			cadena += "dos";
			break;
		case "3":
			cadena += "tres";
			break;
		case "4":
			cadena += "cuatro";
			break;
		case "5":
			cadena += "cinco";
			break;
		case "6":
			cadena += "seis";
			break;
		case "7":
			cadena += "siete";
			break;
		case "8":
			cadena += "ocho";
			break;
		case "9":
			cadena += "nueve";
			break;
		default:
			if (numeroIntro.charAt(0)=="2") {
				cadena = "veinte";
			}
			else{
				cadena = cadena.replace("y", "").trim();
			}
	}
}

function primerDigito(){
	switch(numeroIntro.charAt(0)){
		case "0":
			cadena = "";
			break;
		case "1":
			cadena = "dieci";
			delDiezAlDiecinueve();
			break;
		case "2":
			cadena = "veinti";
			break;
		case "3":
			cadena = "treinta y ";
			break;
		case "4":
			cadena = "cuarenta y ";
			break;
		case "5":
			cadena = "cincuenta y ";
			break;
		case "6":
			cadena = "sesenta y ";
			break;
		case "7":
			cadena = "setenta y ";
			break;
		case "8":
			cadena = "ochenta y ";
			break;
		case "9":
			cadena = "noventa y ";
			break;

	}
}

function validarExpresion(exp, cadena) {
	if (exp.test(cadena)) {
	    return true;
	} else {
	    return false;
	}
}