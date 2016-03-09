(function(){

    var request, $htmlContent, $headers, $states, $stateCode, $url, $submitRequest, initTime;

    var readyStates = ['UNINITIALIZED', 'LOADING', 'LOADED', 'INTERACTIVE', 'COMPLETE'];

    /**
     * Limpia una cadena de carácteres especiales y entidades html
     * @param str
     * @returns {string}
     */
    function htmlEntities(str) {
        return decodeURI(encodeURI(str)
            .replace(/%0A/g, '<br/>')
            .replace(/%3C/g, '&lt;')
            .replace(/%3E/g, '&gt;'));
    }

    function initVars(){
        $htmlContent = $('#htmlContent');
        $headers = $('#headers');
        $states = $('#states');
        $stateCode = $('#stateCode');
        $url = $('#url');
        $submitRequest = $('#submitRequest');
    }

    function resetVars(){
        $htmlContent.html("");
        $states.html("");
        initTime = new Date();
    }

    function loadContent() {
        resetVars();
        request = $.ajax({
            url: $url.val(),
            cache: false,
            dataType: "html",
            complete: showInfo,
            success: showResponse,
            error: showError
        });
    }

    function showResponse(){
        $htmlContent.html(htmlEntities(request.responseText));
    }

    function showError(){
        $htmlContent.html("Error, la petición ha fallado");
    }

    function showInfo() {
        var endTime = new Date();
        var time = endTime - initTime;

        $states.html("<strong>" + readyStates[request.readyState] + ":</strong> " + time + " mseg<br/>");
        $headers.html(htmlEntities(request.getAllResponseHeaders()));
        $stateCode.html(request.status + ": " + request.statusText);
    }

    $(function(){
        initVars();
        $url.val(location.href);

        $submitRequest.click( function(ev){
            ev.preventDefault();
            loadContent();
        });
    })
})();