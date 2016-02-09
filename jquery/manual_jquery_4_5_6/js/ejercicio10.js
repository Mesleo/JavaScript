/**
 * Created by anonimo1 on 08/02/2016.
 */


$(function(){
    $("#mitexto").keypress(function(e){
        e.preventDefault();
        $("#loescrito").html(e.which + ": " + String.fromCharCode(e.which));
    });
});


