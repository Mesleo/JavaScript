// Implementa ComprobacionHora que solicite los segundos, minutos y hora e indique si 
// es correcta. Si lo fuera, ha de mostrar la hora un segundo después

expHora = new RegExp("^((0?[0-9])|(1[0-9])|(2[0-3])){1}$");
expMinSeg = new RegExp("^(0?[0-9]|[1-5][0-9]){1}$");

formulario = '<form action="#"><label for="horas">Introduce hora:</label>'+
		'<input id="horas" type="text"/>'+
		'<label for="minutos">Introduce minutos:</label>'+
		'<input id="minutos" type="text"/>'+
		'<label for="segundos">Introduce segundos:</label>'+
		'<input id="segundos" type="text"/>'+
		'<input id="enviar" type="submit"/></form>';

info = document.getElementById('respuestas');
divForm = document.getElementById('formulario');
texto = "";

window.onload = function(){
	crearFormulario(divForm, formulario);
	document.getElementById('enviar').onclick=function(){
		hora = Number(document.getElementById('horas').value.trim());
		minuto = Number(document.getElementById('minutos').value.trim());
		segundo = Number(document.getElementById('segundos').value.trim());
		comprobarHora();
	}
}

function crearFormulario(valor1, valor2){
	valor1.innerHTML = valor2;
}

function comprobarHora(){
	if(validarFormatoHora(expHora, hora) && validarFormatoHora(expMinSeg, minuto) && validarFormatoHora(expMinSeg, segundo)){
		segundo++;
		dt = new Date("2015", "10", "5", hora, minuto, segundo, "00");
		hora = comprobarDigitos(dt.getHours());
		minuto = comprobarDigitos(dt.getMinutes());
		segundo = comprobarDigitos(dt.getSeconds());
		info.innerHTML = '<h3>'+hora+':'+minuto+':'+segundo+'</h3>';
	}
	else{
		info.innerHTML = '<h3 id="erroneo">Los datos introducidos no son válidos</h3>';
	}	
}

function comprobarDigitos(arg){
	if (arg == 0) {
		arg = "00";
		return arg;
	}
	else{
		return arg;
	}
}

function validarFormatoHora(exp, cadena) {
	if (exp.test(cadena)) {
	    return true;
	} else {
	    return false;
	}
}