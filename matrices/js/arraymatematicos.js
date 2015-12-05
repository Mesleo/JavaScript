
function ArrayMatematico(fila, columna){
    this.fila = fila;
    this.columna = columna;
    this.contenido = new Array();
}

function generarNumeroAleatorio(){
    return Math.round(Math.random()*10);
}

ArrayMatematico.prototype.crearMatriz = function(){
    for (var i = 0; i < this.fila; i++){
        this.contenido[i]=[];
        for(var j = 0; j < this.columna; j++){
            this.contenido[i][j] = generarNumeroAleatorio();
        }
    }
}

ArrayMatematico.prototype.crearMatrizMultiplicacion = function(){
    for (var i = 0; i < this.fila; i++){
        this.contenido[i]=[];
    }
}

ArrayMatematico.prototype.trasponer = function(){
    var traspuesta = new ArrayMatematico(this.columna, this.fila);
    traspuesta.crearMatrizMultiplicacion();
    for (var i = 0; i < this.fila; i++){
        traspuesta.contenido.push([])
        for(var j = 0; j < this.columna; j++){
            traspuesta.contenido[j][i] = this.contenido[i][j];
        }
    }
    return traspuesta;
}


ArrayMatematico.prototype.multiplicar = function(matriz2){
    multiplicacion = new ArrayMatematico(this.fila, matriz2.columna);
    multiplicacion.crearMatriz();
    for (var i = 0; i < this.fila; i++){
        multiplicacion.contenido.push([]);
        for (var j = 0; j < matriz2.columna; j++){
            for (var k = 0; k < this.columna; k++) {
                multiplicacion.contenido[i][j] += this.contenido[i][k] * matriz2.contenido[k][j];
            }
        }
    }
    return multiplicacion;
}

ArrayMatematico.prototype.restar = function(s2){
    var resultado = new ArrayMatematico(this.fila, this.columna);
    for (var i = 0; i < this.fila; i++){
        resultado.contenido[i]=[];
        for(var j = 0; j < this.columna; j++){
            resultado.contenido[i][j] = this.contenido[i][j]-s2.contenido[i][j];
        }
    }
    return resultado;
}

ArrayMatematico.prototype.sumar = function(s2){
    var resultado = new ArrayMatematico(this.fila, this.columna);
    for (var i = 0; i < this.fila; i++){
        resultado.contenido[i]=[];
        for(var j = 0; j < this.columna; j++){
            resultado.contenido[i][j] = this.contenido[i][j]+s2.contenido[i][j];
        }
    }
    return resultado;
}

ArrayMatematico.prototype.mostrarMatriz = function(cadena, informacion){
    var fila = this.fila;
    var col = this.columna;
    informacion.innerHTML = cadena;
    informacion.innerHTML += "<pre>";
    for (var i = 0; i < fila; i++){
        informacion.innerHTML += "<br/>";
        for(var a = 0; a < col; a++){
            informacion.innerHTML += "| " + this.contenido[i][a]+" |";
        }
        informacion.innerHTML += "</tr>";
    }
    informacion.innerHTML += "</pre><br><br>";
}

var valoresValidos = function(filas, columnas){
    if(isNaN(filas) || isNaN(columnas)){
        throw {
            name : "TypeError",
            mensaje : "Sólo se admiten números"
        }
    }
    else if (filas < 1 || columnas < 1){
        throw {
            name: "InvalidNumber",
            mensaje : "Sólo se admiten valores positivos"
        }
    }
}

window.addEventListener("load", function(){
    var error = document.getElementById('error');
    var info1 = document.getElementById('mostrar1');
    var info2 = document.getElementById('mostrar2');
    var info3 = document.getElementById('mostrar_resultado');
    var info4 = document.getElementById('mostrar_traspuesta2');
    var filas = document.getElementById('filas').value.trim();
    var columnas = document.getElementById('columnas').value.trim();
    var matriz1;
    var matriz2;
    var matriz3;
    var matriz4;
    document.getElementById('crear_matriz').addEventListener('click', function(){
        
        filas = document.getElementById('filas').value.trim();
        columnas = document.getElementById('columnas').value.trim();
        try {
            valoresValidos(filas, columnas);
            matriz1 = new ArrayMatematico(filas, columnas);
            matriz1.crearMatriz();
            document.getElementById('mostrar_matriz').addEventListener('click', function(){
                matriz1.mostrarMatriz("Matriz 1: <br/>", info1);
                info4.innerHTML = "";
            });
            error.innerHTML = "";
        } catch (e) {
            error.innerHTML = e.name + " : " + e.mensaje;
            document.getElementById('filas').value = "";
            document.getElementById('columnas').value = "";
        }
    });
    document.getElementById('crear_matriz2').addEventListener('click', function () {
        try {
            valoresValidos(filas, columnas);
            matriz2 = new ArrayMatematico(filas, columnas);
            matriz2.crearMatriz();
            document.getElementById('mostrar_matriz2').addEventListener('click', function () {
                matriz2.mostrarMatriz("Matriz 2: <br/>", info2);
                info4.innerHTML = "";
            });
            error.innerHTML = "";
        } catch (e) {
            error.innerHTML = e.name + " : " + e.mensaje;
            document.getElementById('filas').value = "";
            document.getElementById('columnas').value = "";
        }
    });
    document.getElementById('sumar').addEventListener('click', function () {
        matriz3 = new ArrayMatematico(filas, columnas);
        matriz3.crearMatriz();
        try {
            matriz3 = matriz1.sumar(matriz2);
            matriz3.mostrarMatriz("Suma: <br/>", info3);
        } catch (e) {
            error.innerHTML="<h3 class='error'>Es necesario que estén creadas las dos matrices</h3>";
        }
        info4.innerHTML = "";
    });
    document.getElementById('restar').addEventListener('click', function () {
        matriz3 = new ArrayMatematico(filas, columnas);
        matriz3.crearMatriz();
        try {
            matriz3 = matriz1.restar(matriz2);
            matriz3.mostrarMatriz("Resta: <br/>", info3);
        } catch (e) {
            error.innerHTML="<h3 class='error'>Es necesario que estén creadas las dos matrices</h3>";
        }
        info4.innerHTML = "";
    });
    document.getElementById('multiplicar').addEventListener('click', function () {
        matriz3 = new ArrayMatematico(filas, columnas);
        try {
            matriz3 = matriz1.multiplicar(matriz2);
            matriz3.crearMatriz();
            matriz3.mostrarMatriz("Multiplicación: <br/>", info3);
        } catch (e) {
            error.innerHTML="<h3 class='error'>Es necesario que estén creadas las dos matrices</h3>";
        }
        info4.innerHTML = "";
    });
    document.getElementById('trasponer').addEventListener('click', function () {
        matriz3 = new ArrayMatematico(columnas, filas);
        matriz3.crearMatrizMultiplicacion();
        matriz4 = new ArrayMatematico(columnas, filas);
        matriz4.crearMatrizMultiplicacion();
        try {
            matriz3 = matriz1.trasponer();
            matriz4 = matriz2.trasponer();
            matriz3.mostrarMatriz("Traspuesta 1: <br/>", info3);
            matriz4.mostrarMatriz("Traspuesta 2: <br/>", info4);
        } catch (e) {
            error.innerHTML="<h3 class='error'>Es necesario que estén creadas las dos matrices</h3>";
        }
    });
    document.getElementById("reset").addEventListener("click", function(){
        window.location.reload();
    });
    document.getElementById("atras").addEventListener("click", function(){
        botonatras = document.getElementById('atras');
        document.location.href = "../index.html";
    });
});
