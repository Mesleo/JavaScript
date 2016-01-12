/**
 * Created by Javier Benítez on 12/01/2016.
 */

var teclado = (function(){
    var info = document.getElementById('info_eventos');
    var tArea = document.getElementById('textArea');
    var reset = document.getElementById('res');
    window.onkeydown = muestraInformacion;
    tArea.onkeypress = muestraInformacion;
    window.onkeyup = muestraInformacion;

    document.getElementById("atras").addEventListener("click", function(){
        document.location.href = "../index.html";
    });
    reset.addEventListener('click', function(){
        tArea.innerHTML = "";
        document.location.href = document.location;
    });

    function muestraInformacion(elEvento) {
        var evento = elEvento || window.event;
        var info = document.getElementById('info_eventos');
        var mensaje;
        switch(evento.type) {
            case 'keydown':
                mensaje = "Tipo de evento: " + evento.type + "<br>" +
                    "Propiedad keyCode: " + evento.keyCode + "<br>" +
                    "Propiedad charCode: " + evento.charCode + "<br>" +
                    "Carácter pulsado: " + String.fromCharCode(evento.charCode);
                break;
            case 'keypress':
                mensaje = "Tipo de evento: " + evento.type + "<br>" +
                    "Propiedad keyCode: " + evento.keyCode + "<br>" +
                    "Propiedad charCode: " + evento.charCode + "<br>" +
                    "Carácter pulsado: " + String.fromCharCode(evento.charCode);
                break;
            case 'keyup':
                mensaje = "Tipo de evento: " + evento.type + "<br>" +
                    "Propiedad keyCode: " + evento.keyCode + "<br>" +
                    "Propiedad charCode: " + evento.charCode + "<br>" +
                    "Carácter pulsado: " + String.fromCharCode(evento.charCode);
                break;
        }
        info.innerHTML = mensaje;
    }
});

window.addEventListener('load', teclado);

