/**
 * Created by anonimo1 on 07/03/2016.
 */

(function(){

    var path_name, get_http,inputTexto, buttonShowContent, buttonShowDom, divShowContent, textAreaShowDom, clear, info,
        info2, info3, READY_STATE_UNINITIALIZED, READY_STATE_LOADING, READY_STATE_LOADED, READY_STATE_INTERACTIVE,
        READY_STATE_COMPLETE;

    function initVars(){
        path_name = location.href;
        inputTexto = document.getElementById('url-page');
        buttonShowContent = document.getElementById('show-content');
        buttonShowDom = document.getElementById('show-dom');
        divShowContent = document.getElementById('contents-file');
        textAreaShowDom = document.getElementById('dom-file');
        clear = document.getElementById('clear');
        info = document.getElementById('list-content-server');
        info2 = document.getElementById('list-states');
        info3 = document.getElementById('list-heads');
        READY_STATE_UNINITIALIZED=0;
        READY_STATE_LOADING=1;
        READY_STATE_LOADED=2;
        READY_STATE_INTERACTIVE=3;
        READY_STATE_COMPLETE=4;
    }

    function showResponses() {
        switch (get_http.readyState) {
            case READY_STATE_UNINITIALIZED:
                info.innerHTML += '<li>No inicializado (objeto creado, pero no se ha invocado el método open)</li>';
                break;
            case READY_STATE_LOADING:
                info.innerHTML += '<li>Cargando (objeto creado, pero no se ha invocado el método send)</li>';
                break;
            case READY_STATE_LOADED:
                info.innerHTML += '<li>Cargado (se ha invocado el método send, pero el servidor aún no ha respondido)</li>';
                break;
            case READY_STATE_INTERACTIVE:
                info.innerHTML += '<li>Interactivo (se han recibido algunos datos, aunque no se puede emplear la propiedad responseText)</li>';
                break;
            case READY_STATE_COMPLETE:
                info.innerHTML += '<li>Completo (se han recibido todos los datos de la respuesta del servidor)</li>';
                break;
        }
    }

    function showHeads(){
       info3.innerHTML += '<li>'+ get_http.getAllResponseHeaders()+'</li>';
    }

    function showStatus(){
        info2.innerHTML += '<li>'+get_http.status+'</li>';
    }

    function showContent(div){
        showResponses();
        showHeads();
        showStatus();
        if(get_http.readyState == READY_STATE_COMPLETE) {
            if (get_http.status == 200) {
                if (div.tagName == "TEXTAREA")div.value = get_http.responseText;
                else div.innerHTML = get_http.responseText;

            }
        }
    }

    function loadContent(url, method, func){
        get_http = new XMLHttpRequest();
        if(get_http) {
            get_http.onreadystatechange = func;
            get_http.open(method, url, true);
            get_http.send(null);
        }
    }

    function showUrl(){
        inputTexto.value = path_name;
    }

    function clearInfo(){
        inputTexto.value = "";
        divShowContent.innerHTML = "";
        textAreaShowDom.value = "";
        info.innerHTML = "";
        info2.innerHTML = "";
        info3.innerHTML = "";
    }
    
    window.addEventListener('load', function () {
        initVars();
        showUrl();
        buttonShowContent.addEventListener('click', function(){
            loadContent(inputTexto.value, "GET", function(){
                showContent(divShowContent);
            });
        });
        buttonShowDom.addEventListener('click', function(){
            console.log(inputTexto.value);
            console.log(textAreaShowDom);
            loadContent(inputTexto.value, "GET", function(){
                showContent(textAreaShowDom);
            });
        });
        clear.addEventListener('click', clearInfo, false);

    });
})();