/**
 * Created by Javier Benítez del Pozo on 15/12/2015.
 *
 * Crea un formulario con todos los tipos de controles y realiza todas las validaciones posibles mediante JavaScript.
 Utiliza el modelo de registro avanzado de eventos según W3C (addEventListener), así como las expresiones regulares.
 Asegúrate de validar lo siguiente:
 Obligatoriedad (campo de texto, opción seleccionada (checkbox, radio button y selección)
 Tipo de dato introducido (numérico...)
 Dirección de correo válida
 Número de DNI válido
 Fecha válida
 Número de teléfono
 Número de cuenta corriente
 URL
 Asegúrate de que:

 Al perder el foco de cada control se comprueba su validación.
 Los errores los muestras mediante css.
 Al enviar el formulario se realizan TODAS LAS VALIDACIONES, yéndose el foco al primer error.
 Procura aislar las validaciones del interfaz del usuario (arquitectura de tres capas)
 */

function abrirVentanaNueva(obejto){
    var ventanaNueva = window.open('','');
    ventanaNueva.document.write('<!DOCTYPE html>'+
        '<html lang="en">'+
        '<head>'+
            '<meta charset="UTF-8">'+
           '<title>Información</title>'+
            '<link rel="stylesheet" href="../css/estilo.css" type="text/css">'+
        '</head>'+
        '<body>'+
            '<header>'+
                '<h1>Información</h1>'+
            '</header>'+
            '<main>'+
                '<section>'+
                    '<article>'+
                        '<div id="informacion">Nombre: '+obejto.nombre+' '+obejto.apellido1+' '+obejto.apellido2+'<br>Email: '+obejto.email+
                        '</div>'+
                    '</article>'+
                '</section>'+
            '</main>'+
        '<script type="text/javascript" src="js/persona.js"></script>'+
        '</body>'+
        '</html>');
    window.document.close();
}

function comprobarInputEmail(input){
    var exp = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/i;
    if(exp.test(input.value.trim()))
        return true;
    else {
        //input.focus();
        return false;
    }
}

function comprobarInputTexto(input){
    var exp = /^([a-z ñáéíóú]{2,60})$/i;
    return !!exp.test(input.value.trim());
}

function comprobarInputTelefono(input) {
    var exp = /^[0-9]{9}$/;
    return !!exp.test(input.value);
}

function comprobarInputRadio(input, info){
    var checkeado = false;
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            checkeado = true;
            break;
        }
    }
    if(checkeado == true){
        return true;
    }else return false;
}

function comprobarInputFecha(input) {
    try {
        var valoresFecha = input.value.split("/");
        var anio = valoresFecha[2];
        var mes = valoresFecha[1];
        var dia = valoresFecha[0];
        if (dia.charAt(0) == "0")dia = dia.replace(dia.charAt(0), "");
        if (mes.charAt(0) == "0")mes = mes.replace(mes.charAt(0), "");
        input.value = dia + "/" + mes + "/" + anio;
        var fechaIntroducida = new Date(anio + "-" + mes + "-" + dia);
        console.log(fechaIntroducida);
        var hoy = new Date();
        console.log(hoy);
        if (fechaIntroducida == "Invalid Date" ||  input.value != fechaIntroducida.toLocaleDateString() || hoy < fechaIntroducida) {
            return false
        }
    }catch(e){
        var inputfechaNac = document.getElementById('fechaNac');
        inputfechaNac.style.border = "2px solid #8A0808";
    }
}

function comprobarInputUrl(url) {
    var exp = /^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;
    return !!exp.test(url.value);
}

function comprobarInputDni(inputDni) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var letraDni = inputDni.value.trim().slice(inputDni.value.trim().length-1,inputDni.value.trim().length);
    var numerosDni = inputDni.value.trim().slice(0,inputDni.value.trim().length-1);
    return letras[numerosDni % 23] == letraDni;
}

function comprobarInputCuentaCorriente(cuentaCorriente) {
    var exp = /^(\d){4}-(\d){4}-(\d){2}-(\d){10}$/;
    return !!exp.test(cuentaCorriente.value.trim());
}

function modificarEstado(input, span, texto, estilo){
    input.style.border = estilo;
    span.innerHTML = texto;
}

function comprobarCampos(){
    var inputNombre = document.getElementById('nombre');
    var inputApellido1 = document.getElementById('apellido1');
    var inputApellido2 = document.getElementById('apellido2');
    var inputEmail = document.getElementById('email');
    var inputTelefono = document.getElementById('numeroTelefono');
    var inputfechaNac = document.getElementById('fechaNac');
    var inputUrl = document.getElementById('url');
    var inputSexo = document.getElementsByName('sexo');
    var inpSexo1 = document.getElementById('sexo1');
    var inpSexo2 = document.getElementById('sexo2');
    var spanSexo = document.getElementById('sexo_incorrecto');
    var inputDni = document.getElementById('dni');
    var inputCuentaCorriente = document.getElementById('cuentaCorriente');
    var checkTerminos = document.getElementById('terminos');
    var spanTerminos = document.getElementById('spanTerminos');
    var spanNombre = document.getElementById('spanNombre');
    var spanPrimerApellido = document.getElementById('spanPrimerApellido');
    var spanSegundoApellido = document.getElementById('spanSegundoApellido');
    var spanFechaNacimiento = document.getElementById('spanFechaNacimiento');
    var spanDni = document.getElementById('spanDni');
    var spanEmail = document.getElementById('spanEmail');
    var spanUrl = document.getElementById('spanUrl');
    var spanTelefono = document.getElementById('spanTelefono');
    var spanCuentaCorriente = document.getElementById('spanCuentaCorriente');
    inputNombre.focus();
    var persona;
    inputNombre.addEventListener('blur',function(){
        if(!comprobarInputTexto(inputNombre)){
            modificarEstado(inputNombre, spanNombre, "Nombre inválido. Mínimo 2 caracteres", "2px solid #8A0808");
        }else
            modificarEstado(inputNombre, spanNombre, "", "2px solid #04B404");
    });
    inputApellido1.addEventListener('blur',function(){
        if(!comprobarInputTexto(inputApellido1)){
            modificarEstado(inputApellido1, spanPrimerApellido, "Apellido inválido. Mínimo 2 caracteres", "2px solid #8A0808");
        }else
            modificarEstado(inputApellido1, spanPrimerApellido, "", "2px solid #04B404");
    });
    inputApellido2.addEventListener('blur',function(){
        if(!comprobarInputTexto(inputApellido2)){
            modificarEstado(inputApellido2, spanSegundoApellido, "Apellido inválido. Mínimo 2 caracteres", "2px solid #8A0808");
        }else
            modificarEstado(inputApellido2, spanSegundoApellido, "", "2px solid #04B404");
    });
    inputfechaNac.addEventListener('blur',function(){
        if(!comprobarInputFecha(inputfechaNac)){
            modificarEstado(inputfechaNac, spanFechaNacimiento, "Fecha inválida (XX/XX/XXXX)", "2px solid #8A0808");
        }else
            modificarEstado(inputfechaNac, spanFechaNacimiento, "", "2px solid #04B404");
    });
    inputEmail.addEventListener('blur',function(){
        if(!comprobarInputEmail(inputEmail)){
            modificarEstado(inputEmail,  spanEmail, "Email inválido (usuario@usuario.es)", "2px solid #8A0808");
        }else
            modificarEstado(inputEmail, spanEmail, "", "2px solid #04B404");
    });
    inputTelefono.addEventListener('blur',function(){
        if(!comprobarInputTelefono(inputTelefono)){
            modificarEstado(inputTelefono,  spanTelefono, "Número de teléfono inválido (666111222)",  "2px solid #8A0808");
        }else
            modificarEstado(inputTelefono, spanTelefono, "", "2px solid #04B404");
    });
    inputUrl.addEventListener('blur',function(){
        if(!comprobarInputUrl(inputUrl)){
            modificarEstado(inputUrl, spanUrl, "URL inválida (http://www.miweb.es)", "2px solid #8A0808");
        }else
            modificarEstado(inputUrl, spanUrl, "", "2px solid #04B404");
    });
    inpSexo1.addEventListener('blur',function() {
        if (!comprobarInputRadio(inputSexo, spanSexo)) {
            spanSexo.innerHTML = '<p id="erroneo">Debes seleccionar una opción</p>';
        } else {
            spanSexo.innerHTML = "";
        }
    });
    inputDni.addEventListener('blur',function(){
        if(!comprobarInputDni(inputDni)){
            modificarEstado(inputDni, spanDni, "DNI inválido (01234567X)", "2px solid #8A0808");
        }else
            modificarEstado(inputDni, spanDni, "", "2px solid #04B404");
    });
    inputCuentaCorriente.addEventListener('blur',function(){
        if(!comprobarInputCuentaCorriente(inputCuentaCorriente)){
            modificarEstado(inputCuentaCorriente, spanCuentaCorriente, "Cuenta corriente inválida (0000-0000-00-0000000000)", "2px solid #8A0808");
        }else
            modificarEstado(inputCuentaCorriente, spanCuentaCorriente, "", "2px solid #04B404");
    });
    //if(!checkTerminos.checked){
    //    spanTerminos.innerHTML += '<h4>No has aceptado los términos</h4>';
    //}else {
    //    spanTerminos.innerHTML += '<h4>Has aceptado los términos</h4>';
    //}
    document.getElementById('enviar').addEventListener('click', function(){
        var foco;
            if(!comprobarInputTexto(inputNombre)){
                foco = inputNombre;
            }else if(!comprobarInputTexto(inputApellido1)){
                foco = inputApellido1;
            }else if(!comprobarInputTexto(inputApellido2)){
                foco = inputApellido2;
            }else if(!comprobarInputFecha(inputfechaNac)){
                foco = inputfechaNac;
            }else if(!comprobarInputEmail(inputEmail)){
                foco = inputEmail;
            }else if(!comprobarInputTelefono(inputTelefono)){
                foco = inputTelefono;
            }else if(!comprobarInputUrl(inputUrl)){
                foco = inputUrl;
            }else {
                if (!comprobarInputRadio(inputSexo, spanSexo)) {
                    foco = inpSexo1;
                } else{
                    spanSexo = "";
                }
                if (!comprobarInputDni(inputDni)) {
                    foco = inputDni;
                } else if (!comprobarInputCuentaCorriente(inputCuentaCorriente)) {
                    foco = inputCuentaCorriente;
                }
            }
        foco.focus();
    }, false);
}

window.addEventListener('load', function(){
    comprobarCampos();
});