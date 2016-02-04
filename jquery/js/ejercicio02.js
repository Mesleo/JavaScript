/**
 * Created by anonimo1 on 02/02/2016.
 */

($(document).ready(function(){
    $("#capa").mouseenter(function(evento){
    $("#mensaje").css("display", "block");
    });
    $("#capa").mouseleave(function(evento){
        $("#mensaje").css("display", "none");
    })
}));