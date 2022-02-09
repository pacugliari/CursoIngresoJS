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
    //Constantes
    const DESCUENTO_1 = 0.5; //DESCUENTO DEL 50%
    const DESCUENTO_2 = 0.6; //DESCUENTO DEL 40%
    const DESCUENTO_3 = 0.7; //DESCUENTO DEL 30%
    const DESCUENTO_4 = 0.75; //DESCUENTO DEL 25%
    const DESCUENTO_5 = 0.8; //DESCUENTO DEL 20%
    const DESCUENTO_6 = 0.85; //DESCUENTO DEL 15%
    const DESCUENTO_7 = 0.9; //DESCUENTO DEL 10%
    const DESCUENTO_8 = 0.95; //DESCUENTO DEL 5%
    const INGRESOS_BRUTOS = 0.1; //10%
    const PRECIO_LAMPARA = 35; 
    
    //Variables
    var precioDescuento;
    var precioTotal;
    var cantidad;
    var precioFinal;
    var marca;
    var valorIngresosBrutos=0;
    var descuento;

    //Leo variables
    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    cantidad = parseInt (cantidad);

    //Calculo el precio de las lamparas sin descuento
    precioTotal = (PRECIO_LAMPARA*cantidad);

    //Evaluo los descuentos correspondientes
    if(cantidad > 5){
        descuento = DESCUENTO_1;
    }else if(cantidad == 5){
        if(marca == "ArgentinaLuz"){
            descuento = DESCUENTO_2;
        }else{
            descuento = DESCUENTO_3;
        }
    }else if(cantidad == 4){
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            descuento = DESCUENTO_4;
        }else{
            descuento = DESCUENTO_5;
        }
    }else if(cantidad == 3){
        if(marca == "ArgentinaLuz" ){
            descuento = DESCUENTO_6;
        }else if(marca == "FelipeLamparas"){
            descuento = DESCUENTO_7;
        }else{
            descuento = DESCUENTO_8;
        }
    }else{
        descuento = 1; // PRECIO SIN DESCUENTO
    }

    //console.log(descuento);

    //Aplico descuento
    precioDescuento =  precioTotal*descuento;

    //Muestro si debe pagar ingresos brutos
    if(precioDescuento > 120){
        valorIngresosBrutos = precioDescuento*INGRESOS_BRUTOS;
        alert("Usted pago "+ valorIngresosBrutos +" de IIBB.");
    }

    //Aplico ingresos brutos si corresponde
    precioFinal = precioDescuento + valorIngresosBrutos;

    //Muestro el precio
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}
