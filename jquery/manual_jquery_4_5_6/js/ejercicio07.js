/**
 * Created by anonimo1 on 08/02/2016.
 */

$(function(){
    var info = $('#info');
    $(document).click(function(e){
        //alert("X: " + e.pageX + " - Y: " + e.pageY)
        info.html('X: '+ e.pageX+ ' \nY: ' + e.pageY);
    });

});


