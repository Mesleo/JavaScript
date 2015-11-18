// Apariencia de las ventanas
// Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
// Métodos a utilizar:

//     window.open()
//     document.write() 
//         Añade el esqueleto básico: html, head, title, body, ul...

window.addEventListener('load',function(){
	document.getElementById('multiples_ventanas').addEventListener("click", function(){
		escribirNuevaVentana();
	});
	document.getElementById("atras").addEventListener("click",function(){
		botonatras = document.getElementById('atras');
		document.location.href = "index.html";
	});
});



function escribirNuevaVentana(){
	var x="x";
	var y="y";
	var ventanaNueva = window.open("", "","top=0, left=0, width=300, height=200");
	ventanaNueva.document.write('<html><head><title>Ventana de prueba</title></head>'+
		'<script src="js/aparienciaventanas2.js" type="text/javascript"></script>');
	ventanaNueva.document.write('<body>');
	ventanaNueva.document.write('<p>Se han utilizado las propiedades: </p>');
	ventanaNueva.document.write('<ul><li id="altura"></li>');
	ventanaNueva.document.write('<li id="anchura">width=</li>');
	ventanaNueva.document.write('</body></html>');
	ventanaNueva.document.close();
}

