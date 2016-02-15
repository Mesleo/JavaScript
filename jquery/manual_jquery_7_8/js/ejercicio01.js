/**
 * Created by anonimo1 on 08/02/2016.
 */
var parpadear = (function(){
    jQuery.fn.parpadea = function() {
    this.each(function(){
        var elem = $(this);
        elem.fadeOut(250, function(){
            $(this).fadeIn(250);
        });
    });
    return this;
};
$(document).ready(function(){
//parpadean los elementos de class CSS "parpadear"
    $(".parpadear").parpadea();
//añado un evento clic para un botón, para que al pulsarlo parpadeen los elementos de clase parpadear
    $("#botonparpadear").click(function(){
        $(".parpadear").parpadea();
    })
})});

parpadear();