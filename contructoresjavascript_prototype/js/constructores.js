// Del documento LibrosWeb: Introducción a AJAX realiza la lectura comprensiva del apartado 3.2: 
// Clases (introducción). Entrega los siguientes códigos: Factura, Array y String

function Factura(cliente, elementos){
    this.cliente = cliente;
     this.elementos = elementos;
     this.informacion = {
        baseImponible: 0,
        iva: 1.16,
        total: 0,
        formaPago: "contado"
     };
 }

// Definición de la clase Cliente
function Cliente(nombre, direccion, telefono, nif) {
  this.nombre = nombre;
  this.direccion = direccion;
  this.telefono = telefono;
  this.nif = nif;
}
 
// Definición de la clase Elemento
function Elemento(descripcion, cantidad, precio) {
  this.descripcion = descripcion;
  this.cantidad = cantidad;
  this.precio = precio;
}

Factura.prototype.calculaTotal = function() {
   for(var i=0; i<this.elementos.length; i++) {
     this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
   }
   this.informacion.total = this.informacion.baseImponible * this.informacion.iva;
 }
 
 Factura.prototype.muestraTotal = function(){
     this.calculaTotal();
     informacionFactura.innerHTML = "<h3>Factura</h3>" + this.informacion.total + " euros";
 }

function mostrarElementos(elementos, informacion){
    informacion.innerHTML = '<h3>Elementos</h3>';
    for(var i=0;i<elementos.length;i++){
        informacion.innerHTML += '<label>Descripcion: </label>'+elementos[i].descripcion+
            '<br><label>Cantidad: </label>'+elementos[i].cantidad+'<br><label>Precio: </label>'+elementos[i].precio+'<hr>';
    }
}

window.addEventListener("load", function(){
    var elementos = [];
    var informacionCliente = document.getElementById('informacion_cliente');
    var informacionElementos = document.getElementById('informacion_elementos');
    var informacioEmpresa = document.getElementById('informacion_empresa');
    informacionFactura = document.getElementById('informacion_factura');
    document.getElementById("enviar_cliente").addEventListener("click", function(){
        var nombre = document.getElementById('nombre_cliente').value.trim();
        var direccion = document.getElementById('direccion_cliente').value.trim();
        var telefono = document.getElementById('telefono_cliente').value.trim();
        var nif = document.getElementById('nif_cliente').value.trim();
        nuevoCliente = new Cliente(nombre,direccion,telefono,nif);
        informacionCliente.innerHTML = '<h3>Cliente</h3><label>Nombre: </label>'+nuevoCliente.nombre+
            '<br><label>Dirección: </label>'+nuevoCliente.direccion+'<br><label>Teléfono: </label>'+nuevoCliente.telefono+
            '<br><label>NIF: </label>'+nuevoCliente.direccion;
    });
    document.getElementById("enviar_elemento").addEventListener("click", function(){
        var descripcion = document.getElementById('descripcion_elemento').value.trim();
        var cantidad = document.getElementById('cantidad_elemento').value.trim();
        var precio = document.getElementById('precio_elemento').value.trim();
        if(isNaN(cantidad) || isNaN(precio)){
           informacionElementos.innerHTML += '<h4 id="error">Debes introducir un valor correcto</h4>';
        }
        else {
            nuevoElemento = new Elemento(descripcion, cantidad, precio);
            elementos.push(nuevoElemento);
            mostrarElementos(elementos, informacionElementos);
        }
    });
    document.getElementById("enviar_empresa").addEventListener("click", function(){
        var nombre = document.getElementById('nombre_empresa').value.trim();
        var direccion = document.getElementById('direccion_empresa').value.trim();
        var telefono = document.getElementById('telefono_empresa').value.trim();
        var nif = document.getElementById('nif_empresa').value.trim();
        Factura.prototype.empresa = {
            nombre:    nombre,
            direccion: direccion,
            telefono:  telefono,
            nif:       nif
        };
        informacioEmpresa.innerHTML = '<h3>Empresa</h3><label>Nombre: </label>' + Factura.prototype.empresa.nombre +
            '<br><label>Dirección: </label>' + Factura.prototype.empresa.direccion+'<br><label>Teléfono: </label>' + Factura.prototype.empresa.telefono+
            '<br><label>NIF: </label>' + Factura.prototype.empresa.nif;
        if(typeof nuevoCliente != "undefined" && elementos != null) {
            document.getElementById('mostrar_factura').addEventListener('click', function(){
                var factura = new Factura(nuevoCliente, elementos);
                factura.muestraTotal();
            });
        }
    });
    document.getElementById("reset").addEventListener("click", function(){
        document.getElementById('informacion_factura').innerHTML = "";
        document.getElementById('informacion_cliente').innerHTML = "";
        document.getElementById('informacion_elementos').innerHTML = "";
        document.getElementById('informacion_empresa').innerHTML = "";
    });
    document.getElementById("atras").addEventListener("click", function(){
        botonatras = document.getElementById('atras');
        document.location.href = "../index.html";
    });
});