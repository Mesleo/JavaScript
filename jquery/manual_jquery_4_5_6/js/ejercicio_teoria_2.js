/**
 * Created by anonimo1 on 08/02/2016.
 */
function comprobarCheck(n){
    $(".check").each(function(){
        if(this.value!=n){
            $(this).attr('disabled', 'disabled');
            $(this).attr('disabled', true);
        }
    });
}

$(document).ready(function(){
    var n;
    $(".check").each(function(){
        $(this).click(function () {
            if(this.checked==false){
                console.log(this.checked);
                $(".check").each(function() {
                    $(this).attr('disabled', false);
                    $(".check").removeAttr("disabled");
                });
            }else {
                n = this.value;
                comprobarCheck(n);
            }
        });
    });
});

