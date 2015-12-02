//Lindo gatito
//Crea una clase Gato, y a partir de ella crea tantos gatos como quiera el usuario.
//    Cada gato tendrá un nombre, una fecha de nacimiento, una raza y un peso (1-15). Cada vez que crees un objeto gato aparecerá una ventana nueva con una imagen que cambiará en función de su estado (comiendo, durmiendo y jugando, que es su estado habitual). El usuario podrá averiguar la edad del gato partiendo de un evento.
//
//    Evita las cajas de texto
//No puedes usar ni alert ni prompt
//Hazlo lo más dinámico posible.
//    Utiliza prototype para los métodos

var arrayGatos = [];

// Constructor de gato con nombre, raza, fechaNac y peso
function LindoGatito(nombre, raza, fechaNac, peso){
    this.nombre = nombre;
    this.raza = raza;
    this.fechaNac = fechaNac;
    this.peso = peso;
}

// Comprueba el peso del gato (válido entre 1 y 15)
function comprobarPeso(peso){
    if(peso < 1 || peso > 15)
        return false;
    else
        return true;
}

// Comprueba que la fecha de nacimiento sea válida
function comprobarFecha(fechaNac){
    var fecha = fechaNac.split("/");
    var dias = Number(fecha[0]);
    var mes = Number(fecha[1]);
    var anio = Number(fecha[2]);
    var bisiesto = false;
    if ((anio % 4 == 0) && ((anio % 100 != 0) || (anio % 400 == 0))) {
        bisiesto = true;
    } else {
        bisiesto = false;
    }
    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (dias > 31) {
                return false;
            } else return true;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (dias > 30) {
                return false;
            } else return true;
            break;
        default:
            if (bisiesto) {
                if (dias > 29) {
                    return false;
                } else return true;
                break;
            } else {
                if (dias > 28) {
                    return false;
                } else return true;
                break;
            }
    }
}

function comprobarAnio(dato){
    var cadena = String(dato);
    var exp = new RegExp("^((197[0-9])|(19[8-9][0-9])|(2[0-9]{3})){1}$");
    if (exp.test(cadena)) {
        return true;
    } else {
        return false;
    }
}

String.prototype.capitalize = function() {
    return this.toLowerCase().replace(/(^|\s)([a-z])/g, function(m, p1, p2) { return p1 + p2.toUpperCase(); });
};

// Recoge los datos de los input y crea el gato
function mostrarVentanaGato(gato) {
    var foto_gato;
    switch (gato.raza){
        case 'persa':
            foto_gato = "imagenes/persa.png";
            break;
        case 'mainnecoon':
            foto_gato = "imagenes/mainecoon.png";
            break;
        case 'nebelung':
            foto_gato = "imagenes/nebelung.png";
            break;
        default:
            foto_gato = "imagenes/peterbald.png";
            break;
    }
    var ventanaGato = window.open('', 'Lindo Gatito');
    ventanaGato.document.open();
    ventanaGato.document.write('<html><head><meta charset="UTF-8"><title>' + gato.nombre + '</title>' +
        '<script src="js/lindo_gatito2.js" type="text/javascript"></script>' +
        '<link rel="stylesheet" href="css/estilo2.css" type="text/css"></head><body>' +
        '<header><h1>Lindo gatito</h1></header><div id="contenido">' +
        '<main>' +
        '<div id="foto"><img src="' + foto_gato + '" width="400" height="300"/></div> ' +
        '<div id="info_gato">' +
            '<div id="datos_gato">Hola, mi nombre es ' + gato.nombre + ' ' +
            'y soy un gato ' + gato.raza + '.<br/> Nací el '+ gato.fechaNac + '</div>' +
        '   <span id="mostrar_peso_gato"></span>' +
        '</div>' +
        '</main>' +
        '<div id="estado_gato"><div id="foto_estado" width="400" height="300"/></div>' +
        '<div id="comentario_gato"></div></div>' +
        '</div>' +
        '<div id="botones"><input id="dormir" type="button" value="Dormir"/>' +
        '<input id="comer" type="button" value="Comer"/>' +
        '<input id="jugar" type="button" value="Jugar"/></div></body></html>');
    ventanaGato.document.close();
}
function crearGato(nombre, raza, fechaNac, peso){
    var nombre = String(document.getElementById('nombre').value.trim());
    var raza = document.getElementById('raza').value;
    var fechaNac = document.getElementById('fecha_nac').value;
    var fecha = fechaNac.split("/");
    var dias = Number(fecha[0]);
    var mes = Number(fecha[1]);
    var anio = Number(fecha[2]);
    var peso = document.getElementById('peso').value.trim();
    if(nombre.length==0 || !comprobarFecha(fechaNac) || !comprobarAnio(anio)
        || (mes<1 || mes>12) || !comprobarPeso(peso)){
        error.innerHTML = '<h2 id="error">No se ha podido crear el gato</h2> ';
    }else{
        nombre = nombre.capitalize();
        var lindoGatito = new LindoGatito(nombre, raza, fechaNac, peso);
        arrayGatos.push(lindoGatito);
        mostrarVentanaGato(lindoGatito);

    }
}
var arrayGatos = [];
var error = document.getElementById('error');

window.addEventListener('load', function(){
    document.getElementById('crear_gato').addEventListener('click', crearGato, false);
});