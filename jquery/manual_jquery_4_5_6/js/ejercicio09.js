/**
 * Created by anonimo1 on 08/02/2016.
 */

function operaEvento(evento){
    $("#loescrito").html($("#loescrito").html() + evento.type + ": " + evento.which + ", ")
}

$(function(){
    $(document).keypress(operaEvento);
    $(document).keydown(operaEvento);
    $(document).keyup(operaEvento);
});


