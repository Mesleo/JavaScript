/**
 * Created by anonimo1 on 16/02/2016.
 */
$(function() {
    var projects = [
        {
            value: "jquery",
            label: "jQuery",
            desc: "Framework de JavaScript que permite simplificar la manera de interactuar con los documentos HTML",
            icon: "jquery32x32.png"
        },
        {
            value: "jquery-ui",
            label: "jQuery UI",
            desc: "Componentes para el framework jQuery que añaden widgets y efectos visuales para la creación de aplicaciones web",
            icon: "jqueryui32x32.png"
        },
        {
            value: "javascript",
            label: "JavaScript",
            desc: "Lenguaje de programación interpretado, orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico",
            icon: "javascript32x32.png"
        },
        {
            value: "ajax",
            label: "AJAX",
            desc: "Es una técnica de desarrollo web para crear aplicaciones interactivas",
            icon: "ajax32x32.png"
        },
        {
            value: "java",
            label: "Java",
            desc: "Lenguaje de programación de propósito general, concurrente y orientado a objetos",
            icon: "java32x32.png"
        },
        {
            value: "php",
            label: "PHP",
            desc: "Lenguaje de programación de uso general de código del lado del servidor",
            icon: "php32x32.png"
        },
        {
            value: "python",
            label: "Python",
            desc: "Lenguaje de programación interpretado cuya filosofía hace hincapié en una sintaxis que favorezca un código legible",
            icon: "python32x32.png"
        }
    ];

    $( "#project" ).autocomplete({
            minLength: 0,
            source: projects,
            focus: function( event, ui ) {
                $( "#project" ).val( ui.item.label );
                return false;
            },
            select: function( event, ui ) {
                $( "#project" ).val( ui.item.label );
                $( "#project-id" ).val( ui.item.value );
                $( "#project-description" ).html( ui.item.desc );
                $( "#project-icon" ).attr( "src", "images/" + ui.item.icon );

                return false;
            }
        })
        .autocomplete( "instance" )._renderItem = function( ul, item ) {
        return $( "<li>" )
            .append( "<a>" + item.label + "<br>" + item.desc + "</a>" )
            .appendTo( ul );
    };
    $('#atras').click(function(){
        document.location.href = "index.html";
    })
});