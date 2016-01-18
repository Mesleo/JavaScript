/**
 * Created by Javier Benítez del Pozo on 18/01/2016.
 */

function obtenerCookie(nombre){
    return localStorage.getItem(nombre);
}

function crearCookie(nombre, valor){
    localStorage.setItem(nombre, valor);
}

function eliminarCookie(nombre){
    localStorage.removeItem(nombre);
    location.reload(true);
}

function mostrarVentanaBienvenida(user) {
    var ventanaNueva = window.open();
    ventanaNueva.document.write('<html><head><title>Bienvenido</title><link rel="stylesheet" href="../css/bootstrap.css" type="text/css">' +
        '<link rel="stylesheet" href="../css/estilo.css" type="text/css"></head>' +
        '<body><header><h1>Bienvenido</h1></header><h2>Bienvenido '+user+'</h2></body>');
    ventanaNueva.document.close();
}

function comprobarCookie(info) {
    var user = obtenerCookie("usuario_storage");
    var pass = obtenerCookie("password_storage");
    var nomb = document.getElementById('nombre_usuario');
    var passwd = document.getElementById('contrasenia_usuario');
    if (user != "" && user != null && pass!=null && pass!="") {
        nomb.value = user;
        passwd.value = pass;
        document.getElementById('enviar_login').addEventListener('click', function() {
            if(user==nomb.value && pass==passwd.value)
            mostrarVentanaBienvenida(user);
            else info.innerHTML = '<h3 class="error">Los datos introducidos son erróneos</h3>';
        });
        document.getElementById('eliminar_cookie').addEventListener('click', function(){
            eliminarCookie("usuario_storage");
        });
    } else {
        document.getElementById('enviar_login').addEventListener('click', function(){
            var nombre = nomb.value.trim();
            var password = passwd.value.trim();
            var check = document.getElementById('recordar');
            if(check.checked) {
                if (nombre != "" && nombre != null && password != "" && password != null) {
                    crearCookie("usuario_storage", nombre);
                    crearCookie("password_storage", password);
                }
            }
        })
    }
}

window.addEventListener('load', function(){
    var info = document.getElementById('mensaje_bienvenida');
    comprobarCookie(info);
    document.getElementById("atras").addEventListener("click", function(){
        document.location.href = "index.html";
    });
});
