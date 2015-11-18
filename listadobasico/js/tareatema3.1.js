window.onload = function(){
	var seguir = document.getElementById('seguir');
	addEventListener("click", escribirEnVentanaPrincipal, false);
}

function escribirEnVentanaPrincipal(){
	window.opener.document.write('<h1>Tarea del tema 3</h1>');
	window.opener.document.write('<html><head><title></title><script src="tareatema3.1.js" type="text/javascript"></script>'+
		'<link rel="stylesheet" href="css/estilo.css" type="text/css" media="all"></head><body>');
	window.opener.document.write('<div id="formulario"><label>Introduzca su nombre y apellidos:</label>'+
		'<input id="nombre_apellidos" type="text" /><label>Introduzca día de nacimiento:</label>'+
		'<input id="diaNac" type="text" /><label>Introduzca mes de nacimiento:</label>'+
		'<input id="mesNac" type="text" /><label>Introduzca año de nacimiento:</label>'+
		'<input id="anioNac" type="text" /><input id="enviar" type="button" value="Enviar"/></div>');
	window.opener.document.write('<body></html>');
	// window.opener.addEventListener('load', function(){
		var enviar = window.opener.document.getElementById('enviar');
		divInfo = window.opener.document.getElementById('principal');
		enviar.addEventListener("click", mostrarDatos, false);
	// }, false);
}

function mostrarDatos(){
	nombreApe = window.opener.document.getElementById('nombre_apellidos').value.trim();
	nombreMenosTresCaracteres = nombreApe.replace(nombreApe.charAt(0),"");
	nombreMenosTresCaracteres = nombreMenosTresCaracteres.replace(nombreApe.charAt(1),"");
	nombreMenosTresCaracteres = nombreMenosTresCaracteres.replace(nombreApe.charAt(2),"");
	dia = window.opener.document.getElementById('diaNac').value;
	mes = window.opener.document.getElementById('mesNac').value;
	anio = window.opener.document.getElementById('anioNac').value;
	arrayNum = [65,22,69,99,12];
	window.opener.document.write("<p>Buenos días "+ nombreApe +"</p>");
	window.opener.document.write("<p>Tu nombre tiene: "+ nombreApe.length +" caracteres</p>");
	window.opener.document.write("<p>La primera letra E de tu nombre está en la posición: "+nombreApe.indexOf('e')+"</p>");
	window.opener.document.write("<p>La última letra E de tu nombre está en la posición: "+nombreApe.lastIndexOf('e')+"</p>");
	window.opener.document.write("<p>Tu nombre menos las 3 primeras letras es: "+nombreMenosTresCaracteres+"</p>");
	window.opener.document.write("<p>Tu nombre todo en mayúsculas es: "+nombreApe.toUpperCase()+"</p>");
	window.opener.document.write('<p>Tu edad es: '+calcularEdad()+'</p>');
	window.opener.document.write('<p>Naciste un feliz '+dia+' del año '+anio+'. No te acuerdas, pero era '+calcularDiaSemana()+' y '+calcularBisiesto()+' bisiesto</p>');
	window.opener.document.write('<p>El coseno de 90 es: '+Math.cos(Math.PI/2)+'</p>');
	window.opener.document.write('<p>El número mayor de (65, 22, 69, 99, 12) es: '+calcularMayor(arrayNum)+'</p>');
	window.opener.document.write('<p>Ejemplo de número al azar entre 1 y 10: '+Math.round(Math.random()*(10)+1)+'</p>');
	window.opener.document.close();
}

function calcularMayor(array){
	var NumeroMayor = 1;
	for(var i = 0; i < array.length; i++){
		if (array[i]>NumeroMayor){
			NumeroMayor = array[i];
		} 
	}
	return NumeroMayor;
}

function calcularBisiesto(){
	if ((((anio%100)!=0)&&((anio%4)==0))||((anio%400)==0)){
		return "fue";
	}
	else
		return "no fue";
}

function calcularDiaSemana(){
	switch(fechanacimiento.getDay()){
		case "0":
			return "Lunes";
			break;
		case "1":
			return "Martes";
			break;
		case "2":
			return "Miércoles";
			break;
		case "3":
			return "Jueves";
			break;
		case "4":
			return "Viernes";
			break;
		case "5":
			return "Sábado";
			break;
		default:
			return "Domingo";
			break;
	}
}

function calcularEdad(){
	fechanacimiento = new Date(anio,mes,dia);
	hoy = new Date();
	if(hoy.getTime() - fechanacimiento.getTime()>0){
		var anios = ((((hoy.getTime()-fechanacimiento.getTime())/3600000)/24)/365).toFixed(2);
		return Math.floor(anios);
	}
	else if (hoy.getTime() - fechanacimiento.getTime()<0){
		alert("¡ERROR! Todavía no has nacido");
	}
	else{
		alert("¡ERROR! Debes escribir en el formato indicado");
	}
}