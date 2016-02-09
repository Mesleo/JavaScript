/**
 * Created by anonimo1 on 08/02/2016.
 */
$(document).ready(function(){
    var info = document.getElementById('info');
    $("a").each(function(i){
        var titulo = $(this).attr("title");
        info.innerHTML += "Atributo title del enlace " + i + ": " + titulo+'<br>';
    });
});
