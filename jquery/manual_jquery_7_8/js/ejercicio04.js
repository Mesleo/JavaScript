/**
 * Created by anonimo1 on 08/02/2016.
 */
var probandoPlugin = (function(){
    jQuery.fn.miPlugin = function() {
        //variables que son comunes a todos los elementos
        //que había en el objeto jQuery que recibe el método del plugin
        var mivariableComun = "comun";
        var info = $('#info');
        info.html("Nueva invocación de plugin. Mi variable común: " + mivariableComun);
        this.each(function(){
            //CÓDIGO DEL PLUGIN
            //Elemento sobre el que itero y estoy aplicando el plugin
            var elem = $(this);
            //elem es una variable que podremos utilizar en todo el plugin
            //variables específicas para cada elemento
            var miVariable = "x";
            //miVariable se podrá acceder dentro de todo el código que pongamos aquí
            //funcion que será accesible desde cualquier parte del plugin
            function miFuncion(){
                //puedo acceder a variables del plugin
                miVariable = elem.text();
                //Muestro el contenido de la variable
                info.html("mi variable local y particular de cada plugin: " + miVariable);
                //cambio la variable comun a todos los elementos de este plugin
                mivariableComun = "Otra cosa comun!"
            }
            //puedo invocar las funciones del plugin
            miFuncion();
            //evento, que tiene una función. Puedo acceder a variables y funciones del plugin
            elem.click(function(){
                //puedo acceder a variables del plugin
                info.html("Dentro del evento: " + miVariable);
                //puedo acceder a funciones
                miFuncion();
            });
        });
    };


    $(document).ready(function(){
        $("#esteDiv").miPlugin();
        $(".misspan").miPlugin();
    })
});

probandoPlugin();
