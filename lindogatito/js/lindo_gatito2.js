//Lindo gatito
//Crea una clase Gato, y a partir de ella crea tantos gatos como quiera el usuario.
//    Cada gato tendrá un nombre, una fecha de nacimiento, una raza y un peso (1-15). Cada vez que crees un objeto gato aparecerá una ventana nueva con una imagen que cambiará en función de su estado (comiendo, durmiendo y jugando, que es su estado habitual). El usuario podrá averiguar la edad del gato partiendo de un evento.
//
//    Evita las cajas de texto
//No puedes usar ni alert ni prompt
//Hazlo lo más dinámico posible.
//    Utiliza prototype para los métodos


// Constructor de gato con nombre, raza, fechaNac y peso

var arrayGatos = [];
var gatoMuerto = false;
function LindoGatito(nombre, raza, fechaNac, peso){
    this.nombre = nombre;
    this.raza = raza;
    this.fechaNac = fechaNac;
    this.peso = peso;
}

LindoGatito.prototype.muereGato = function(){
    gatoMuerto = true;
    document.getElementById('foto_estado').innerHTML = '<img src="imagenes/muerto.png" width="400" height="300"/>';
    document.getElementById('comentario_gato').innerHTML = 'Pobre ' + this.nombre +', tuvo una vida muy corta...';
    document.getElementById('mostrar_peso_gato').innerHTML = this.nombre+" pasó a una vida mejor.";
}

LindoGatito.prototype.comer = function(){
    if(gatoMuerto){
        document.getElementById('comentario_gato').innerHTML = this.nombre+" falleció, no hay nada que puedas hacer por él";
        return;
    }
    document.getElementById('foto_estado').innerHTML = '<img src="imagenes/comiendo.png" width="400" height="300"/>';
    document.getElementById('comentario_gato').innerHTML = "Ñam ñam ñam...";
    this.peso += 1;
    if(this.peso > 15){
        this.muereGato();
        return;
    }
    document.getElementById('mostrar_peso_gato').innerHTML = "Peso "+this.peso+" Kg.";
}

LindoGatito.prototype.dormir = function(){
    if(gatoMuerto){
        document.getElementById('comentario_gato').innerHTML = this.nombre+" falleció, no hay nada que puedas hacer por él";
        return;
    }
    document.getElementById('foto_estado').innerHTML = '<img src="imagenes/durmiendo.png" width="400" height="300"/>';
    document.getElementById('comentario_gato').innerHTML = "ZZZzzzzz...";
}

LindoGatito.prototype.jugar = function(){
    if(gatoMuerto){
        document.getElementById('comentario_gato').innerHTML = this.nombre+" falleció, no hay nada que puedas hacer por él";
        return;
    }
    document.getElementById('comentario_gato').innerHTML = "";
    document.getElementById('foto_estado').innerHTML = '<img src="imagenes/jugando.png" width="400" height="300"/>';
    this.peso -= 1;
    if(this.peso < 1){
        this.muereGato();
        return;
    }
    document.getElementById('mostrar_peso_gato').innerHTML = "Peso "+this.peso+" Kg.";
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

// Muestra el gato en una nueva ventana
function mostrarGato(gato){
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
}

String.prototype.capitalize = function() {
    return this.toLowerCase().replace(/(^|\s)([a-z])/g, function(m, p1, p2) { return p1 + p2.toUpperCase(); });
};

// Recoge los datos de los input y crea el gato
function crearGato(){
    var nombre = String(window.opener.document.getElementById('nombre').value.trim());
    var raza = window.opener.document.getElementById('raza').value
    var fechaNac = String(window.opener.document.getElementById('fecha_nac').value.trim());
    peso = Number(window.opener.document.getElementById('peso').value.trim());
    var fecha = fechaNac.split("/");
    var dias = Number(fecha[0]);
    var mes = Number(fecha[1]);
    var anio = Number(fecha[2]);
    if(nombre.length==0 || !comprobarFecha(fechaNac) || !comprobarAnio(anio)
        || (mes<1 || mes>12) || !comprobarPeso(peso)){
        error.innerHTML = '<h2 id="error">No se ha podido crear el gato</h2> ';
    }else{
        nombre = nombre.capitalize();
        var lindoGatito = new LindoGatito(nombre, raza, fechaNac, peso);
        document.getElementById('mostrar_peso_gato').innerHTML = "Peso "+this.peso+" Kg.";
        document.getElementById('dormir').addEventListener('click', function(){
            lindoGatito.dormir();
        } , false);
        document.getElementById('jugar').addEventListener('click', function(){
            lindoGatito.jugar();
        } , false);
        document.getElementById('comer').addEventListener('click', function(){
            lindoGatito.comer();
        } , false);
    }
}

window.addEventListener('load', function(){
    crearGato();
});