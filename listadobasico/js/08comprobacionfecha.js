// Implementa ComprobacionFecha que solicite el día, el mes y el año e indique si la 
// fecha es correcta. Si lo fuera, ha de mostrar el día después

expAnio = new RegExp("^((197[0-9])|(19[8-9][0-9])|(2[0-9]{3})){1}$");
expMes = new RegExp("^(0?[1-9]|1[0-2]){1}$");

formulario = '<label for="dia">Introduce un día:</label>'+
		'<input id="dia" type="text"/>'+
		'<label for="mes">Introduce un mes:</label>'+
		'<input id="mes" type="text"/>'+
		'<label for="anio">Introduce un año:</label>'+
		'<input id="anio" type="text"/>'+
		'<input id="enviar" type="button" value="Enviar"/>';

info = document.getElementById('respuestas');
divForm = document.getElementById('formulario');
texto = "";

window.onload = function(){
	crearFormulario(divForm, formulario);
	document.getElementById('enviar').onclick=function(){
		dia = document.getElementById('dia').value.trim();
		mes = document.getElementById('mes').value.trim();
		anio = document.getElementById('anio').value.trim();
		comprobarFecha();
	}
}

function crearFormulario(valor1, valor2){
	valor1.innerHTML = valor2;
}

function comprobarFecha(){
	if(validarFormatoFecha(expAnio, anio) && validarFormatoFecha(expMes, mes)){
		comprobarAnio();
		comprobarMes();
		if (comprobarDia()){
			dia++;
			fecha = new Date(anio, mes-1, dia);
			console.log(fecha);
			info.innerHTML = '<h3>El día siguiente es: '+ fecha+ '</h3>';
		}
	}
	else{
		info.innerHTML = '<h3 id="erroneo">Los datos introducidos no son válidos</h3>';
	}	
}

function comprobarDia(){

	if (dia < 0 || dia > 31){
		info.innerHTML = '<h3 id="erroneo">El dia introducido no es válido</h3>';
		return false;
	}
	else{
		if (diasMes == 28) {
			if (dia > 28) {
				info.innerHTML = '<h3 id="erroneo">El dia introducido no es válido</h3>';
				return false;
			}
			return true;
		}
		else if(diasMes == 29){
			if (dia > 29) {
				info.innerHTML = '<h3 id="erroneo">El dia introducido no es válido</h3>';
				return false;
			}
			return true;
		}
		else if(diasMes == 31){
			if (dia > 31) {
				info.innerHTML = '<h3 id="erroneo">El dia introducido no es válido</h3>';
				return false;
			}
			return true;
		}
		else if(diasMes == 30){
			if (dia > 30) {
				info.innerHTML = '<h3 id="erroneo">El dia introducido no es válido</h3>';
				return false;
			}
			return true;
		}
	}
}

function comprobarMes(){
	switch(mes){
		case "1":
		case "3":
		case "5":
		case "7":
		case "8":
		case "10":
		case "12":
			diasMes = 31;
			break;
		case "2":
			if (febrero) {
				diasMes = 29;
			}
			else{
				diasMes = 28;
			}
			break;
		default:
			diasMes = 30;
			break;
	}
}


function comprobarAnio(){
	if(anio%4==0 &&(anio%100!=0 || anio%400==0)){
		febrero = true;
	}
	else{
		febrero = false;
	}
}

function validarFormatoFecha(exp, cadena) {
	if (exp.test(cadena)) {
	    return true;
	} else {
	    return false;
	}
}