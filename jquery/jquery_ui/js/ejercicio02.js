/**
 * Created by anonimo1 on 16/02/2016.
 */
(function(){

    function editarItem(){
        var inputA;
        inputA = '<input type="text" id="campo"/>';
        var input = $(this).html(inputA);
        $('input', $(this)).focus();
    }

    function updateItem(){
        var dato = $('#campo').val();
        $(this).html(dato);
    }

    $(function() {
        $( "#sortable" ).sortable({
            revert: true
        });
        $("#draggable" ).draggable({
            connectToSortable: "#sortable",
            helper: "clone",
            revert: "invalid"
        });
        $( "ul, li" ).disableSelection();
        $("#sortable").on({
            dblclick: editarItem,
            change: updateItem
        }, "li");
        $('#atras').click(function(){
            document.location.href = "index.html";
        })
    });
}());