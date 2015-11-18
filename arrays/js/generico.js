window.addEventListener("load", function(){
	document.getElementById("atras").addEventListener("click", function(){
		botonatras = document.getElementById('atras');
		document.location.href = "index.html";
	});
	document.getElementById("foreach").addEventListener("click", function(){
		document.location.href = "foreach.html";
	});
});