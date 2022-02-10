/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : TP 4

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */


function CalcularPrecio () 
{
  
    //Variables
    var precioDescuento;
    var precioTotal;
    var cantidad;
    var precioFinal;
    var marca;
    var valorIngresosBrutos=0;
    var descuento;

    //Obtengo los datos desde los ID
    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    cantidad = parseInt (cantidad);

    //Calculo el precio de las lamparas sin descuento
    precioTotal = (35*cantidad); //35 PRECIO LAMPARITA

    //Evaluo los descuentos correspondientes
    if(cantidad > 5){
        descuento = 0.5; //DESCUENTO DEL 50%
    }else if(cantidad == 5){
        if(marca == "ArgentinaLuz"){
            descuento = 0.6; //DESCUENTO DEL 40%
        }else{
            descuento = 0.7; //DESCUENTO DEL 30%
        }
    }else if(cantidad == 4){
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            descuento = 0.75; //DESCUENTO DEL 25%
        }else{
            descuento = 0.8; //DESCUENTO DEL 20%
        }
    }else if(cantidad == 3){
        if(marca == "ArgentinaLuz" ){
            descuento = 0.85; //DESCUENTO DEL 15%
        }else if(marca == "FelipeLamparas"){
            descuento = 0.9; //DESCUENTO DEL 10%
        }else{
            descuento = 0.95; //DESCUENTO DEL 5%
        }
    }else{
        descuento = 1; // PRECIO SIN DESCUENTO
    }

    //Aplico descuento
    precioDescuento =  precioTotal*descuento;

    //Muestro si debe pagar ingresos brutos
    if(precioDescuento > 120){
        valorIngresosBrutos = precioDescuento*0.1; //INGRESOS BRUTOS 10%;
        alert("Usted pago "+ valorIngresosBrutos +" de IIBB.");
    }

    //Aplico ingresos brutos si corresponde
    precioFinal = precioDescuento + valorIngresosBrutos;

    //Muestro el precio
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}
