// Implementa mediante javaScript el ejercicio primos mediante closure.

// Han de estar como elementos privados:

//     vector de números primos
//     acumulador de números primos
//     esPrimos () que está en el foro

// Recuerda que:

//     No podéis crear ninguna variable global (function(){...})();
//     El resultado se mostrará en una ventana nueva.
function abrirNuevaVentana(){
    var ventanaNueva = window.open("", "Primos","top=100, left=200");
    ventanaNueva.document.write(
                "<html>"+
                    "<head>"+
                        "<title>Primos</title><link rel='stylesheet' href='css/estilo.css' type='text/css'>"+
                        "<script type='text/javascript' src='js/primos.js'></script>"+
                    "</head>"+
                    "<body>"+
                        '<header><h1>Closures</h1></header><main><h2>Numeros primos:</h2><div id="informacion_primos"></div>'+
                        '<h2>Suma acumulada:</h2><div id="informacion_suma"></div>'+
                    "</main></body>"+
                "</html>");
    ventanaNueva.document.close();
}

window.addEventListener("load", function(){
    document.getElementById("ejecutar").addEventListener("click", function(){
        abrirNuevaVentana();
    });
    document.getElementById("atras").addEventListener("click", function(){
        botonatras = document.getElementById('atras');
        document.location.href = "../index.html";
    });
});