window.onload = function(){
	var seguir = document.getElementById('seguir');
	seguir.addEventListener("click", escribirEnVentanaPrincipal, false);
}

function escribirEnVentanaPrincipal(){
	window.close();
	window.opener.document.write('<html><head><title></title><script src="js/tareatema3.2.js" type="text/javascript"></script>'+
		'<link rel="stylesheet" href="css/estilo.css" type="text/css" media="all"></head><body><h1>Tarea del tema 3</h1>');
	window.opener.document.write('<div id="formulario"><label>Introduzca su nombre y apellidos:</label>'+
		'<input id="nombre_apellidos" type="text" /><label>Introduzca día de nacimiento:</label>'+
		'<input id="diaNac" type="text" /><label>Introduzca mes de nacimiento:</label>'+
		'<input id="mesNac" type="text" /><label>Introduzca año de nacimiento:</label>'+
		'<input id="anioNac" type="text" /><input id="enviar" type="button" value="Enviar"/></div>');
	window.opener.document.write('<body></html>');
	window.opener.document.close();
}