window.addEventListener('load',function(){
	var anchura = document.getElementById('anchura');
	var altura = document.getElementById('altura');
	calcularTamanio();
});

function calcularTamanio(coordernada){
	var ventanaNueva = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = ventanaNueva.innerWidth || e.clientWidth || g.clientWidth,
    y = ventanaNueva.innerHeight|| e.clientHeight|| g.clientHeight;
	altura.innerHTML = "height = " +y;
	anchura.innerHTML = "width = " +x;
}

