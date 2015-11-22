// Del documento LibrosWeb: Introducción a AJAX realiza la lectura comprensiva del apartado 3.2:
// Clases (introducción). Entrega los siguientes códigos: Factura, Array y String

var cadena = "";


String.prototype.truncarcontexto = function(longitud, indicador) {
    indicador = indicador || '...';

    if(this.length > longitud) {
        return this.substring(0, longitud) + indicador;
    }
    else {
        return this;
    }
}

String.prototype.truncar = function(longitud) {
    longitud = longitud || 10;
    if(this.length > longitud) {
        return this.substring(0, longitud);
    }
    else {
        return this;
    }
}

window.addEventListener("load", function(){
    var informacion = document.getElementById('informacion_cadena');
    document.getElementById('enviar_cadena').addEventListener('click', function(){
        cadena = String(document.getElementById('cadena').value.trim());
        document.getElementById('enviar_pos_truncado').addEventListener('click', function(){
            var pos =  document.getElementById('pos1').value.trim();
            cadena = cadena.truncar(pos);
        });
        document.getElementById('enviar_pos_truncado_texto').addEventListener('click', function(){
            var pos2 =  document.getElementById('pos2').value.trim();
            var texto = document.getElementById('texto').value.trim();
            cadena = cadena.truncarcontexto(pos2, texto);
        });
    });
    document.getElementById('mostrar_cadena').addEventListener('click', function(){
        informacion.innerHTML = cadena;
    });
    document.getElementById("reset").addEventListener("click", function(){
        cadena = "";
        document.getElementById('informacion_cadena').innerHTML = "";
    });
    document.getElementById("atras").addEventListener("click", function(){
        botonatras = document.getElementById('atras');
        document.location.href = "index.html";
    });
});