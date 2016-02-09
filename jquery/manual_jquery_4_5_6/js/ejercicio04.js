/**
 * Created by anonimo1 on 08/02/2016.
 */

$(function(){
    $('#aumentar').click(function(){
        var valor = document.getElementById('tamanio').value;
        $('#micapa').css("width", function(index, value){
            return (parseInt(value) + parseInt(valor)) + "px";
        });
    });
});


