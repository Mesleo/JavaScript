/**
 * Created by anonimo1 on 03/02/2016.
 */
$(document).ready(function(){
    $("#boton").click(function(evento){
        var selectorEscrito = $("#camposelector").attr("value");
        if (selectorEscrito==""){
            alert("Escribe algo en el campo de texto");
        }else{
            elementosSeleccionados = $(selectorEscrito);
            elementosSeleccionados.fadeOut("slow", function(){
                elementosSeleccionados.fadeIn("slow");
            });
        }
    });
});



