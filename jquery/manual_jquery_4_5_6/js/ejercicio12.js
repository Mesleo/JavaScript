/**
 * Created by anonimo1 on 08/02/2016.
 */

$(function(){
    $(document.body).on("click", ".verde", function(e){
        var elem = $(e.target);
        if (elem.html()!="Hiciste clic!!"){
            elem.html("Hiciste clic!!");
        }else{
            elem.html("Hiciste de nuevo clic!!");
        }
    });
    $("#insertarelem").click(function(e){
        var nuevoElemento = $('<div class="verde">Este elemento se ha creado e insertado dinamicamente(haz clic)</div>');
        nuevoElemento.appendTo($(document.body));
    });
    $("#ponerclaseverde").click(function(e){
        $("#noverde").addClass("verde");
    });
});


