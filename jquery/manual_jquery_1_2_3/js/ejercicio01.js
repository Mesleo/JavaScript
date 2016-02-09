($(document).ready(function(){
    $("#boton_a").click(function(){
        $("#capa").html('Has hecho clic en el botón <b>A</b>');
    })
    $("#boton_b").click(function(){
        $("#capa").html('Recibido un clic en el botón <b>B</b>');
    })
}));