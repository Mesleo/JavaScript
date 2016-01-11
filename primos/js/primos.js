// Implementa mediante javaScript el ejercicio primos mediante closure.

// Han de estar como elementos privados:

//     vector de números primos
//     acumulador de números primos
//     esPrimos () que está en el foro

// Recuerda que:

//     No podéis crear ninguna variable global (function(){...})();
//     El resultado se mostrará en una ventana nueva.
window.addEventListener("load", function(){
	(function(){
	var arrayPrimos = [];
	var acumulador = 0 ;

	function esPrimo(primo, anterior){
        if (anterior === 1){
            return true;
        }
        if(primo%anterior === 0){
            return false;
        }
        return esPrimo(primo, anterior-1);
    }

	function annadirPrimo() {
		for(var i = 0; i < 101; i++){
			if(esPrimo(i,i-1))
				arrayPrimos.push(i);
		}
	}

	function acumularPrimos() {
		for(var i = 0 ; i < arrayPrimos.length ; i++){
			acumulador += arrayPrimos[i];
		}
	}

	function mostrarPrimos() {
		document.getElementById("informacion_primos").innerHTML = arrayPrimos;
		document.getElementById("informacion_suma").innerHTML = acumulador;
	}


	annadirPrimo();
	acumularPrimos();
	mostrarPrimos();   
})();
});

