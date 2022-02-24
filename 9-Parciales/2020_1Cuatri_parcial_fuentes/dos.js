/*
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  var tipo;
  var cantidad;
  var precio;
  var respuesta="si";
  var cantidadBolsas=0;
  var precioTotal=0;
  var descuento;
  var precioDescuento;
  var cantidadCal=0;
  var cantidadCemento=0;
  var cantidadArena=0;
  var mensaje="";
  var esPrimero = true;
  var maximoTipo;
  var maximoPrecio;

  while(respuesta=="si" || respuesta=="SI"){
    
    tipo = prompt("Ingrese el tipo de producto");
    while(tipo != "arena" && tipo!= "cal" && tipo!= "cemento"){
      tipo = prompt("Error en tipo,Ingrese el tipo de producto");
    }

    cantidad = prompt("Ingrese la cantidad de producto");
    while(cantidad <0){
      cantidad = prompt("Error en cantidad,Ingrese la cantidad de producto");
    }

    precio= prompt("Ingrese el precio del producto");
    while(precio < 0){
      precio= prompt("Error en precio,Ingrese el precio del producto");
    }

    console.log(tipo,cantidad,precio)
    cantidad=parseInt(cantidad);
    precio=parseFloat(precio);

    cantidadBolsas+=cantidad;
    precioTotal+=precio*cantidad;

    if(maximoPrecio < precio || esPrimero){
      maximoTipo = tipo;
      maximoPrecio = precio;
      esPrimero=false;
    }

    switch(tipo){
      case "arena":
        cantidadArena+=cantidad;
      break;
      case "cal":
        cantidadCal+=cantidad;
      break;
      case "cemento":
        cantidadCemento+=cantidad;
      break;
    }

    do{
      respuesta = prompt("Desea seguir agregando productos ? SI/NO")
    }while(respuesta != "si" && respuesta !="SI" && respuesta!="no" && respuesta!="NO")
  }

  if(cantidadBolsas > 30){
    descuento=0.75;
  }else if(cantidadBolsas >10){
    descuento=0.85;
  }else
    descuento=1;

  precioDescuento=precioTotal*descuento;

  mensaje+="a)Importe total: "+precioTotal+"<br>";
  mensaje+="b)Importe descuento: "+precioDescuento+"<br>";

  mensaje+="c)El tipo con mas cantidad es";
  if(cantidadArena > cantidadCal && cantidadArena > cantidadCemento){
    mensaje+=" arena <br>";
  }else if(cantidadCal > cantidadArena && cantidadCal>cantidadCemento){
    mensaje+=" cal <br>";
  }else{
    mensaje+=" cemento <br>";
  }

  mensaje+="d)El tipo mas caro es: "+maximoTipo+"<br>";
  document.write(mensaje);

}
