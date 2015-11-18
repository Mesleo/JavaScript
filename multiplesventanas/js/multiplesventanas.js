// Múltiples ventanas
// Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
// Métodos a utilizar:

//     miVentana = window.open('','','width=200,height=200');
//     miVentana.document.open();
//     miVentana.document.write() 
//     		Añade el esqueleto básico: html, head, title, body, ul...
//     miVentana.document.close();

window.addEventListener('load',function(){
	document.getElementById('multiples_ventanas').addEventListener("click", function(){
		escribirNuevaVentana();
	});
	document.getElementById("atras").addEventListener("click",function(){
		botonatras = document.getElementById('atras');
		document.location.href = "../index.html";
	});
});



function escribirNuevaVentana(){
	for (var i = 1; i < 6; i++) {
		var ventanaNueva = window.open("", "","top="+(i*20)+", left="+(i*20)+", width=200,  height=200");
		ventanaNueva.document.write('<html><head><title>Ventana '+i+'</title></head>');
		ventanaNueva.document.write('<script src="js/multiplesventanas2.js" type="text/javascript"></script>');
		ventanaNueva.document.write('<body>');
		ventanaNueva.document.write('<label>Ventana '+i+'</label>');
		ventanaNueva.document.write('<input id="cerrar" type="button" value="Cerrar" />');
		ventanaNueva.document.write('</body></html>');
		ventanaNueva.document.close();
	};
}
