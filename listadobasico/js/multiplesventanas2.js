window.addEventListener('load',function(){
	document.getElementById('cerrar').addEventListener("click", function(){
		cerrarVentana();
	});
});

function cerrarVentana(ventana){
	window.close();
}