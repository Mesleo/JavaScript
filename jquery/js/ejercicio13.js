/**
 * Created by anonimo1 on 03/02/2016.
 */
$(document).ready(function(){
    $("p").each(function(i){
        if(i%2==0){
            $(this).css("background-color", "#eee");
        }else{
            $(this).css("background-color", "#ccc");
        }
    })
});

