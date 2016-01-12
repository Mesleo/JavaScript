/**
 * Created by Javier Benítez on 12/01/2016.
 */

function muestraInformacion(elEvento) {
    var evento = elEvento || window.event;
    var info = document.getElementById('info_eventos');
    var ie = navigator.userAgent.toLowerCase().indexOf('msie')!=-1;
    if(ie) {
        coordenadaX = evento.clientX + document.body.scrollLeft;
        coordenadaY = evento.clientY + document.body.scrollTop;
    }
    else {
        coordenadaX = evento.pageX;
        coordenadaY = evento.pageY;
    }
    switch(evento.type) {
        case 'mouseover':
            info.style.backgroundColor = '#011000';
            info.style.color = 'white';
            info.innerHTML = '<h4>Evento '+evento.type+'</h4><p>Estás pasando el ratón por encima del header</p>';
            break;
        case 'mouseout':
            info.style.backgroundColor = 'silver';
            info.style.color = 'black';
            info.innerHTML = '<h4>Evento '+evento.type+'</h4><p>Has dejado de pasar el ratón por encima del header</p>';
            break;
        case 'click':
            info.style.backgroundColor = '#225577';
            info.style.color = 'black';
            info.innerHTML = '<h4>Evento '+evento.type+'</h4><p>Has hecho "click" dentro del "main" en la coordenada: X: '+coordenadaX+', Y: '+coordenadaY+'</p>';
            break;
        case 'dblclick':
            info.style.backgroundColor = '#2255AA';
            info.style.color = 'black';
            info.innerHTML = '<h4>Evento '+evento.type+'</h4><p>Has hecho "doble click" en la coordenada: <br>X: X: '+coordenadaX+', Y: '+coordenadaY+'</p>';
            break;
        case 'mousedown':
            info.style.backgroundColor = '#33FF00';
            info.style.color = 'black';
            info.innerHTML = '<h4>Evento '+evento.type+'</h4><p>Has pulsado cualquier botón del ratón dentro del header</p>';
            break;
        case 'mousemove':
            info.style.backgroundColor = '#44AA00';
            info.style.color = 'black';
            info.innerHTML = '<h4>Evento '+evento.type+'</h4><p>Estás en lo alto del botón atrás</p>';
            break;
        case 'mouseup':
            info.style.backgroundColor = '#442255';
            info.style.color = 'black';
            info.innerHTML = '<h4>Evento '+evento.type+'</h4><p>Has soltado el botón de "Mouseup"</p>';
            break;
    }
}

function manejadorDeEventos(){
    var header = document.getElementById('cabecera');
    var main = document.getElementById('main');
    var atras = document.getElementById('atras');
    var mouseup = document.getElementById('mouseup');
    header.onmouseover = muestraInformacion;
    header.onmouseout = muestraInformacion;
    header.onmousedown = muestraInformacion;
    main.onclick = muestraInformacion;
    window.ondblclick = muestraInformacion;
    atras.onmousemove = muestraInformacion;
    mouseup.onmouseup = muestraInformacion;
}

window.addEventListener('load', function(){
    manejadorDeEventos();
    document.getElementById("atras").addEventListener("click", function(){
        document.location.href = "../index.html";
    });
})