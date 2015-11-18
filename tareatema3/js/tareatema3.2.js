bandera = false;

window.onload = function(){
	form = document.getElementById('formulario');
	var enviar = document.getElementById('enviar');
	divInfo = document.getElementById('principal');
	enviar.addEventListener("click", mostrarDatos, false);
}

function mostrarDatos(){
	
	nombreApe = document.getElementById('nombre_apellidos').value.trim();
	nombreMenosTresCaracteres = nombreApe.replace(nombreApe.charAt(0),"");
	nombreMenosTresCaracteres = nombreMenosTresCaracteres.replace(nombreApe.charAt(1),"");
	nombreMenosTresCaracteres = nombreMenosTresCaracteres.replace(nombreApe.charAt(2),"");
	dia = document.getElementById('diaNac').value;
	mes = document.getElementById('mesNac').value;
	anio = document.getElementById('anioNac').value;
	arrayNum = [65,22,69,99,12];
	var fechanacimiento = new Date(anio+"-"+mes+"-"+dia);
	calcularEdad(fechanacimiento);
	if (bandera){
		document.open();
		document.write('<html><head><title>Javier Benítez del Pozo</title><link rel="stylesheet" href="css/estilo.css" '+
			'type="text/css" media="all"></head><body>')
		document.write("<p>Buenos días "+ nombreApe +"</p>");
		document.write("<p>Tu nombre tiene: "+ nombreApe.length +" caracteres</p>");
		document.write("<p>La primera letra E de tu nombre está en la posición: "+nombreApe.indexOf('e')+"</p>");
		document.write("<p>La última letra E de tu nombre está en la posición: "+nombreApe.lastIndexOf('e')+"</p>");
		document.write("<p>Tu nombre menos las 3 primeras letras es: "+nombreMenosTresCaracteres+"</p>");
		document.write("<p>Tu nombre todo en mayúsculas es: "+nombreApe.toUpperCase()+"</p>");
		document.write('<p>Tu edad es: '+annos+'</p>');
		document.write('<p>Naciste un feliz '+dia+' del '+mes+' del año '+anio+'. No te acuerdas, pero era '+calcularDiaSemana(fechanacimiento)+' y '+calcularBisiesto()+' bisiesto</p>');
		document.write('<p>El coseno de 90 es: '+Math.cos(Math.PI/2)+'</p>');
		document.write('<p>El número mayor de (65, 22, 69, 99, 12) es: '+calcularMayor(arrayNum)+'</p>');
		document.write('<p>Ejemplo de número al azar entre 1 y 10: '+Math.round(Math.random()*(10)+1)+'</p>');
		document.write('</body></html>');
		document.close();
	}
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

function calcularDiaSemana(fecha){
	switch(fecha.getDay()){
		case 1:
			return "Lunes";
			break;
		case 2:
			return "Martes";
			break;
		case 3:
			return "Miércoles";
			break;
		case 4:
			return "Jueves";
			break;
		case 5:
			return "Viernes";
			break;
		case 6:
			return "Sábado";
			break;
		case 0:
			return "Domingo";
			break;
	}
}

function calcularEdad(fecha){
	hoy = new Date();
	if(hoy.getTime() - fecha.getTime()>0){
		var anios = ((((hoy.getTime()-fecha.getTime())/3600000)/24)/365).toFixed(2);
		bandera = true;
		annos = Math.floor(anios);
	}
	else if (hoy.getTime() - fecha.getTime()<0){
		bandera = false;
		form.innerHTML += "<h3>¡ERROR! Todavía no has nacido</h3>";
	}
	else{
		bandera = false;
		form.innerHTML += "<h3>¡ERROR! Debes escribir en el formato indicado</h3>";
	}
}