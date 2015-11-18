// Implementa  ProductoPotencias que calcule y visualice el producto de las potencias de
// 2 entre 0 y 10

formulario = '<label>Muestra potencias de 2:</label>'+
		'<input id="mostrar" type="button" value="Mostrar"/>'+
		'<input id="numero" class="oculto" value="2"/>'+
		'<input id="mostrarProducto" type="button" value="Producto" />'+
		'<input id="reset" type="button" value="Reset"/>';

info = document.getElementById('respuestas');
info2 = document.getElementById('respuestas2');
divForm = document.getElementById('formulario');
contador = 0;

window.onload = function(){
	crearFormulario(divForm, formulario);
	document.getElementById('mostrar').onclick=function(){
		numero = new Number(document.getElementById('numero').value.trim());
		calcularPotencias();
		mostrarPotencia();
	}
	document.getElementById('mostrarProducto').onclick=function(){
		producto = 1;
		productoPotencias();
	}
	document.getElementById('reset').onclick=function(){
		contadorACero();
	}
}

function crearFormulario(valor1, valor2){
	valor1.innerHTML = valor2;
}

function contadorACero(){
	contador = 0;
	producto = 1;
	info.innerHTML = "";
	info2.innerHTML = "";
}

function productoPotencias(){
	for (var i = 0; i < 11; i++) {
		producto *= Math.pow(2,i);
	};
	info2.innerHTML = '<br/>El producto de todas las potencias de 2 entre 0 y '+(i-1)+' es: '+producto; 
}

function calcularPotencias(){
	potencia = Math.pow(2,contador);
}

function mostrarPotencia(){
	if(contador < 11){
		info.innerHTML += '<br/> 2 <sup>'+contador+'</sup> = '+potencia;
		contador++;
	};
}