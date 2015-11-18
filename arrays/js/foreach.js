window.addEventListener("load", function(){
	foreach = document.getElementById('mostrar');
	document.getElementById('borrar').addEventListener("click", function(){
		foreach.innerHTML = "";
	});
	document.getElementById('foreach').addEventListener("click", function(){
		var array = ['hola', 1, false, "adios", true, -2, "12"];
		array.forEach(probandoForEach);
	});
	document.getElementById("atras").addEventListener("click", function(){
		botonatras = document.getElementById('atras');
		document.location.href = "preguntasteoricas.html";
	});
});

function probandoForEach(valor, indice, array){
	foreach.innerHTML += "Elemento: " +valor+ ",  ";
	foreach.innerHTML += "Índice: " +indice+"<br/>";
}

