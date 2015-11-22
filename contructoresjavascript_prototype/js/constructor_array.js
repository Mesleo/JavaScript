// Del documento LibrosWeb: Introducción a AJAX realiza la lectura comprensiva del apartado 3.2: 
// Clases (introducción). Entrega los siguientes códigos: Factura, Array y String

// Funcion que añade elementos al final del array
Array.prototype.anadir = function(elemento) {
    this[this.length] = elemento;
}

// Funcion que añade elementos al final del array y
// permite evitar añadir elementos duplicados
Array.prototype.contiene = function(elemento) {
    for(var i=0; i<this.length; i++) {
        if(this[i] === elemento) {
            return true;
        }
    }
    return false;
}

// Funcion que permite filtrar los elementos del array original y obtiene
// un nuevo array con todos los valores diferentes al indicado:
Array.prototype.sin = function(elemento) {
    var array=[];
    for(var i=0; i<this.length; i++) {
        if(this[i] != elemento) {
            array.push(this[i]);
        }
    }
    return array;
}

Array.prototype.anadir = function(elemento, duplicado, informacion) {
    var permitir = (duplicado == null) ? true : duplicado;

    if (!permitir) {
        if(!(this.contiene(elemento))) {
            this[this.length] = elemento;
        }
        else
            informacion.innerHTML += "<h3 id='error'>Ese elemento ya está en el array</h3>"
    }
    else {
        this[this.length] = elemento;
    }
}


window.addEventListener("load", function(){
    var informacion = document.getElementById('informacion_array');
    document.getElementById('crear_array').addEventListener('click', function(){
        var nuevoArray = [];
        document.getElementById('enviar_elemento').addEventListener('click', function(){
            var elemento = document.getElementById('elemento').value.trim();
            nuevoArray.anadir(elemento, false, informacion);
        });
        document.getElementById('filtrar').addEventListener('click', function(){
            var elemento = document.getElementById('elemento2').value.trim();
            nuevoArray = nuevoArray.sin(elemento);
        });
        document.getElementById('mostrar_array').addEventListener('click', function(){
            informacion.innerHTML = nuevoArray;
        });
        document.getElementById("reset").addEventListener("click", function(){
            document.getElementById('informacion_array').innerHTML = "";
            nuevoArray = [];
        });
    });
    document.getElementById("atras").addEventListener("click", function(){
        botonatras = document.getElementById('atras');
        document.location.href = "index.html";
    });
    
});