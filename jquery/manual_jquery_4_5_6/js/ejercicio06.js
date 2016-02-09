/**
 * Created by anonimo1 on 08/02/2016.
 */

$(function(){
    var numDobleClics=0, numClics=0;
    $("#micapa").dblclick(function(e){
        numDobleClics++;
        $("#mensaje").html("Doble Clic " + numDobleClics);
    });
    $("#micapa").click(function(e){
        numClics++;
        $("#mensaje").html("Clic " + numClics);
    });
});


