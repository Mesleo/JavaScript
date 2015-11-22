// Realizar una aplicación en JavaScript que realice lo siguiente:

//     Abra una nueva ventana.
//         Hacer una función y dentro de esa función:
//         Escribir en la nueva ventana <h1>Ventana Nueva</h1>
//         URL Completa: XXXXX
//         Protocolo utilizado: XXXXX
//         Nombre en código del navegador: XXXXX
//         Que detecte si está JAVA disponible en esa ventana del navegador y si es así que escriba:
//             Java SI disponible en esta ventana, o bien.
//             Java NO disponible en esta ventana.
//         Que abra una ventana con el contenido de http://www.iesgrancapitan.org/portal/ de 800x600.
//     Y ahora fuera del código de la función que siga haciendo lo siguiente:
//         Que escriba en la ventana principal <h1>Tarea del tema 3</h1>
//         Que solicite: introduzca su nombre y apellidos.
//         Que solicite: introduzca DIA de nacimiento.
//         Que solicite: introduzca MES de nacimiento.
//         Que solicite: introduzca AÑO de nacimiento.
//         Una vez solicitados esos datos imprimirá en la ventana principal:
//             Buenos dias XXXXX
//             Tu nombre tiene XX caracteres, incluidos espacios.
//             La primera letra E de tu nombre está en la posición: X
//             La última letra E de tu nombre está en la posición: X
//             Tu nombre menos las 3 primeras letras es: XXXXXXXX
//             Tu nombre todo en mayúsculas es: XXXXXXXX
//             Tu edad es: XX años.
//             Naciste un feliz XXXXXX del año XXXX. No te acuerdas, pero era (LUNES/MARTES/MIÉRCOLES...) y [NO|SI] bisiesto
//             El coseno de 90 es: XXXXXXXXXX
//             El número mayor de (65, 22, 69, 99, 12) es: XX
//             Ejemplo de número al azar entre 1 y 10: XXXXXXXXXX
//     Donde aparecen las XXXX tendrá que aparecer el cálculo o texto que corresponda.
//     Criterios de puntuación. 
//         Cumplimiento de los requisitos anteriores
//         Usabilidad
//         Estética (sin librerías)
//         Presentación del código (comentarios, identación...)

window.addEventListener('load', function(){
	document.getElementById('nueva_ventana').addEventListener("click", escribirNuevaVentana, false);
	document.getElementById("atras").onclick=function(){
		botonatras = document.getElementById('atras');
		document.location.href = "../index.html";
	}
});

function escribirNuevaVentana(){
	var ventanaNueva = window.open('', 'Nueva ventana', 'width=800', 'height=600');
	ventanaNueva.document.write('<html><head><title></title><script src="js/tareatema3.1.js" type="text/javascript"></script>'+
		'<link rel="stylesheet" href="css/estilo.css" type="text/css" media="all"><meta charset="UTF-8"></head><body><h1>Ventana Nueva</h1>');
	ventanaNueva.document.write('<h3>URL completa: '+location.href+'</h3>');
	ventanaNueva.document.write('<h3>Protocolo utilizado: '+location.protocol+'</h3>');
	ventanaNueva.document.write('<h3>Nombre del código del navegador: '+navigator.userAgent+'</h3>');
	if(navigator.javaEnabled()==true){
		ventanaNueva.document.write('<h2>Java SI disponible en esta ventana</h2>');
	}
	else
		ventanaNueva.document.write('<h3>Java NO disponible en esta ventana</h3>');
	ventanaNueva.document.write('<div id="principal">'+
        '<input id="seguir" type="button" value="Seguir">'+
    	'</div>');
	ventanaNueva.document.write('</body></html>');
	ventanaNueva.document.close();
	var ventanaNueva2 = window.open('http://www.iesgrancapitan.org/portal/', 'width=800 height=600');
}