/**
 * Created by anonimo1 on 08/02/2016.
 */
(function(){
    jQuery.fn.checkboxPersonalizado = function(opciones) {
        //opciones de configuración por defecto
        var conf = {
            activo: true,
            colorTextos: {
                activo: "#00f",
                pasivo: "#669"
            },
            textos: {
                activo: "",
                pasivo: ""
            },
            imagen: {
                activo: 'images/thumb_up.png',
                pasivo: 'images/thumb_down.png'
            },
            cssElemento: {
                padding: "2px 2px 2px 24px",
                display: "block",
                margin: "2px",
                border: "1px solid #ddd",
                cursor: "pointer"
            },
            cssAdicional: {
            },
            nameCheck: ""
        };
        //Las extiendo con las opciones recibidas al invocar el plugin
        jQuery.extend(conf, opciones);
        this.each(function(){
            //variables locales al plugin
            var miCheck = $(this);
            var activo = conf.activo
            //el elemento checkbox interno pero no visible
            var elementoCheck = $('<input type="checkbox" style="display: none;" />');
            //el nombre del checkbox puede ser configurado desde options o con el propio texto del campo
            if(conf.nameCheck==""){
                elementoCheck.attr("name", miCheck.text());
            }else{
                elementoCheck.attr("name", conf.nameCheck);
            }
            //inserto el checkbox en la página
            miCheck.before(elementoCheck);
            //aplico estilos que vienen en la configuración
            miCheck.css(conf.cssElemento);
            miCheck.css(conf.cssAdicional);
            //si el elemento estaba marcado para estar activo
            if (activo){
                //lo activo
                activar();
            }else{
                //lo desactivo
                desactivar();
            }
            //defino un evento para el elemento
            miCheck.click(function(e){
                //compruevo la variable activo, definida dentro del plugin
                if(activo){
                    desactivar();
                }else{
                    activar();
                }
                activo = !activo;
            });
            //función local en el plugin para desactivar el checkbox
            function desactivar(){
                //cambio los estilos para el elemento a los marcados como pasivos
                miCheck.css({
                    background: "transparent url(" + conf.imagen.pasivo + ") no-repeat 3px",
                    color: conf.colorTextos.pasivo
                });
                //si hay un texto específico para cuando estaba pasivo
                if (conf.textos.pasivo!=""){
                    miCheck.text(conf.textos.pasivo)
                }
                //desmarcho el checkbox interno que es invisible, pero que se envía como elemento de formulario.
                elementoCheck.removeAttr("checked");
            };
            function activar(){
                miCheck.css({
                    background: "transparent url(" + conf.imagen.activo + ") no-repeat 3px",
                    color: conf.colorTextos.activo
                });
                if (conf.textos.activo!=""){
                    miCheck.text(conf.textos.activo)
                }
                elementoCheck.attr("checked","1");
            };
        });
        return this;
    };


    $(document).ready(function(){
        $(".ch").checkboxPersonalizado();
        $("#otro").checkboxPersonalizado({
            activo: false,
            colorTextos: {
                activo: "#f80",
                pasivo: "#000"
            },
            imagen: {
                activo: 'images/weather_cloudy.png',
                pasivo: 'images/weather_rain.png'
            },
            textos: {
                activo: 'Buen tiempo :)',
                pasivo: 'Buena cara ;)'
            },
            cssAdicional: {
                border: "1px solid #dd5",
                width: "100px"
            },
            nameCheck: "buen_tiempo"
        });

    })
}());
