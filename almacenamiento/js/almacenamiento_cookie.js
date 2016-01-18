/**
 * Created by Javier Benítez del Pozo on 18/01/2016.
 */
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function eliminarCookie(){
    document.cookie="usuario=; expires=Thu, 18 Dec 2013 12:00:00 UTC";
    location.reload(true);
}

function mostrarVentanaBienvenida(user) {
    var ventanaNueva = window.open();
    ventanaNueva.document.write('<html><head><title>Bienvenido</title><link rel="stylesheet" href="../css/bootstrap.css" type="text/css">' +
        '<link rel="stylesheet" href="../css/estilo.css" type="text/css"></head>' +
        '<body><header><h1>Bienvenido</h1></header><h2>Bienvenido '+user+'</h2></body>');
    ventanaNueva.document.close();
}

function checkCookie(info) {

    var user = getCookie("usuario");
    var pass = getCookie("password");
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
            eliminarCookie();
        });
    } else {
        document.getElementById('enviar_login').addEventListener('click', function(){
            var nombre = nomb.value.trim();
            var password = passwd.value.trim();
            var check = document.getElementById('recordar');
            if(check.checked) {
                if (nombre != "" && nombre != null && password != "" && password != null) {
                    setCookie("usuario", nombre, 30);
                    setCookie("password", password, 30);
                }
            }
        })
    }
}

window.addEventListener('load', function(){
    var info = document.getElementById('mensaje_bienvenida');
    checkCookie(info);
    document.getElementById("atras").addEventListener("click", function(){
        document.location.href = "index.html";
    });
});
