window.addEventListener('load',function(){
	info = document.getElementById('informacion');
	fruits = ["Apple", "Orange", "Donkey"];
	/**
	 * Mostrar elementos de array
	 */
	document.getElementById("elemento2").addEventListener("click",function(){
		mostrarElementosArray();
	});
	/**
	 * Longitud de array
	 */
	document.getElementById("elemento3").addEventListener("click",function(){
		mostrarLongitud();
	});
	/**
	 * Método pop
	 */
	document.getElementById("elemento4").addEventListener("click",function(){
		pop();
	});
	/**
	 * Método push
	 */
	document.getElementById("elemento5").addEventListener("click",function(){
		push();
	});
	/**
	 * Pop y push con otro array
	 */
	document.getElementById("elemento6").addEventListener("click",function(){
		crearNuevoArray();
	});
	/**
	 * Shift
	 */
	document.getElementById("elemento7").addEventListener("click",function(){
		metodoShift();
	});
	/**
	 * Unshift
	 */
	document.getElementById("elemento8").addEventListener("click",function(){
		metodoUnshift();
	});
	/**
	 * Elemento aleatorio de array
	 */
	document.getElementById("elemento9").addEventListener("click",function(){
		devolverElementoAleatorioArray();
	});
	/**
	 * Iterar sobre un array
	 */
	document.getElementById("elemento10").addEventListener("click",function(){
		iterandoArray();
	});
	/**
	 * Devolver índice de elemento
	 */
	document.getElementById("elemento11").addEventListener("click",function(){
		var fruits = ["Pineapple", "Lemon", "Apple", "Orange", "Peach"];
		find(fruits, "Lemon");
	});
	/**
	 * Devolver índice de elemento 2
	 */
	document.getElementById("elemento12").addEventListener("click",function(){
		var arr = ["a", -1, 2, "b"];
		var index = find2(arr, 2);
		console.log("Está en la posición: "+index);
	});
	/**
	 * Array sólo números
	 */
	document.getElementById("elemento13").addEventListener("click",function(){
		var arr = ["a", -1, 2, "b", 10, 0, "hola"];
		soloNumericos(arr);
	});
	/**
	 * Join ejercicio 1
	 */
	document.getElementById("elemento14").addEventListener("click",function(){
		var obj = { 
			className: 'open menu' 
		}
		addClass(obj, 'new');
		addClass(obj, 'open');
		console.log(obj.className);
	});
	/**
	 * Join ejercicio 2
	 */
	document.getElementById("elemento15").addEventListener("click",function(){
		camelize("background-color");
		camelize("list-style-image");
	});
	/**
	 * Array is Object, consequences ejercicio 1
	 */
	document.getElementById("elemento16").addEventListener("click",function(){
		probandoFuncionesObjetos();
	});
	/**
	 * Array is Object, consequences ejercicio 2
	 */
	document.getElementById("elemento17").addEventListener("click",function(){
		var obj = { 
			className: 'open menu'
		}
		removeClass(obj, 'open');
		removeClass(obj, 'blabla');
		console.log(obj.className); //menu
	});
	/**
	 * Splice
	 */
	document.getElementById("elemento18").addEventListener("click",function(){
		arrayNum = ["a", 1, "b", 2];
		filterNumericInPlace(arrayNum);
		console.log(arrayNum);  // [1,2]
	});
	/**
	 * Sort
	 */
	document.getElementById("elemento19").addEventListener("click",function(){
		sort();
	});
	/**
	 * Mostrar arrays por filtros
	 */
	document.getElementById("elemento20").addEventListener("click",function(){
		arr = ["a", -1, 2, "b", 3];
		filter(arr, isNumeric);
		console.log("Array de números: "+ arr);

		filter(arr, mayorQueCero);
		console.log("Array de números mayores que 0: "+ arr);
	});
	/**
	 * Números primos
	 */
	document.getElementById("elemento21").addEventListener("click", function() {
		var arrayNumerosConsecutivos = [];
		for(var i=0;i<100;i++){
			arrayNumerosConsecutivos.push(i);
		}
		informacion = document.getElementById('primos');
		informacion.innerHTML = "Suma de los 100 primeros números primos: " + calcularPrimos();
	});
	/**
	 * Botón atrás
	 */
	document.getElementById("atras").addEventListener("click", function(){
		botonatras = document.getElementById('atras');
		document.location.href = "index.html";
	});
});

//
// Calcula números primos dado un número introducido por input
//
function calcularPrimos(numero){
		var sumaPrimos = 0;
		for (var i = 100; i > 1; i--) {
			var arrayPrimos = new Array();
			for(var x = 2; x < i; x++){
				if(i%x==0){
					arrayPrimos.push(0);
				}
				else{
					arrayPrimos.push(1);
				}
			};
			if (arrayPrimos.indexOf(0) == -1) {
				sumaPrimos += i;
			};
		};
		return sumaPrimos;
}

//
// Encuentra valores mayores que 0
//
function mayorQueCero(valor){
	if(valor > 0)
		return true;
	return false;
}

//
// Comprueba si el valor es numérico o no
//
function isNumeric(valor){
    if(!isNaN(valor)){
        return true;
    }
    else {
        return false;
    }
}

//
// Función que lleva como parámetro un array y otra condición
//
function filter(array, funcion){
    for (var i = 0; i < array.length; i++) {
        if(!funcion(array[i])){
            array.splice(i, 1);
        }
    }
}

//
// Ordena objetos según la propiedad age
//
function sort(){
	// test it
	var john = { name: "John Smith", age: 23 }
	var mary = { name: "Mary Key", age: 18 }
	var bob = { name: "Bob-small", age: 6 }
	var people = [ john, mary, bob ]

	//
	// Compara los valores pasados como parámetros
	//
	function ageCompare(a, b) {
	  if (a.age > b.age) 
	  	return 1;
	  else if (a.age < b.age)
	  	 return -1;
	  return 0;
	}

	function ageSort(people) {
	  people.sort(ageCompare);
	}

	ageSort(people);

	// check the order
	for(var i=0; i<people.length; i++) {
	  	console.log(people[i].name)
	}
}

/**
 * Splice
 */
function filterNumericInPlace(array){
	for(var c = 0; c< array.length; c++) {
	if (isNaN(array[c])) 
		array.splice(c,1);
	} 
	return array;
}

/**
 * Array is Object, consequences ejercicio 2
 */
function removeClass(elem, cls) {
  for(var c = elem.className.split(' '), i=c.length-1; i>=0; i--) {
	if (c[i] == cls) 
		c.splice(i,1);
	} 
	elem.className = c.join(' ');
}

/**
 * Array is Object, consequences ejercicio 1
 */
function probandoFuncionesObjetos(){
	var arr = ["a", "b"];
	arr.push( function() { 
		alert(this);
	});
	arr[arr.length-1]();
	arr[arr.length-1]();
	arr[2]();
	// arr.2();
	arr = ["a", "b"]; 
	arr.push( function() { 
		alert(this) 
	});
	arr[arr.length-1](); // "a","b",function
}

/**
 * Join ejercicio 2
 */
function camelize(str){
	var arrayCadenaSinGuiones = str.split("-");
	var cadenaSinGuiones = "";
	for (var i = 0; i < arrayCadenaSinGuiones.length; i++) {
		if(arrayCadenaSinGuiones != "-"){
			cadenaSinGuiones += arrayCadenaSinGuiones[i];
		}
	};
	console.log(cadenaSinGuiones);
}

/**
 * Join ejercicio 1
 */
function addClass(elem, cls) {
	for(var c = elem.className.split(' '), i=c.length-1; i>=0; i--) {
		if (c[i] == cls) 
			return;
	}
	elem.className += ' '+cls
}

/**
 * Array sólo números
 */
function soloNumericos(array){
	var numeros = [];
	for(var i=0; i<array.length; i++) {
		if (!isNaN(array[i])) 
			numeros += array[i]+",";
	}
	console.log("Array nuevo (sólo números): "+numeros);
}

/**
 * Devolver índice de elemento
 */
function find2(array, value) {
	if (array.indexOf) return array.indexOf(value)
		for(var i=0; i<array.length; i++) {
			if (array[i] === value) 
				return i;
		}
	return -1;
}

/**
 * Devolver índice de elemento
 */
function find(array, value) {
	for(var i=0; i<array.length; i++) {
		if (array[i] == value) 
			console.log("Está en la posición: "+i);
	}
	return -1;
}

/**
 * Iterar sobre un array
 */
function iterandoArray(){
	var fruits = ["Pineapple", "Lemon", "Apple", "Orange", "Peach"];
	for(var i=0; i<fruits.length; i++) {
	  console.log(fruits[i]);
	}
}

/**
 * Elemento aleatorio de array
 */
function devolverElementoAleatorioArray(){
	var arr = ["Plum","Orange","Donkey","Carrot","JavaScript"];
	var rand = Math.floor(Math.random()*arr.length);
	console.log(arr[rand]);
}

/**
 * Unshift
 */
function metodoUnshift(){
	var fruits = ["Apple"];
	fruits.push("Orange","Peach");
	fruits.unshift("Pineapple","Lemon");
	console.log(fruits);
}

/**
 * Shift
 */
function metodoShift(){
	var fruits = ["Apple", "Orange"];
	var apple = fruits.shift(); // now we have only ["Orange"] left
	fruits.unshift("Lemon"); // now got ["Lemon", "Orange"]
	console.log("Longitud: "+fruits.length);
}

/**
 * Pop y push con otro array
 */
function crearNuevoArray(){
	var styles = ["Jazz", "Bluez"];
	styles.push("Rock'n'Roll");
	styles[styles.length-2] = "Classic";
	console.log(styles.pop());
}

/**
 * Método push
 */
function push(){
	fruits.push("Peach");
	console.log("El elemento añadido es: "+fruits[fruits.length-1]);
}

/**
 * Método pop
 */
function pop(){
	console.log("Borro "+fruits.pop());
	console.log("Ahora la longitud es: "+fruits.length)
}

/**
 * Longitud de array
 */
function mostrarLongitud(){
	console.log(fruits.length);
}

/**
 * Mostrar elementos de array
 */
function mostrarElementosArray(){
	console.log(fruits[0]);
	console.log(fruits[1]);
	console.log(fruits[2]);
}
