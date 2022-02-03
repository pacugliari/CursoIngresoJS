/*

Alumno: Pablo Alberto Cugliari
Division: B
TP: 2

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //Declaracion de variables
    var largo;
    var ancho;
    var cantidadAlambres = 3;
    var perimetro;
    var perimetroTotal;

    //Obtencion de datos
    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    //Parseo los datos
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    //Calculo del perimetro total de alambre
    perimetro = 2*largo + 2*ancho;
    perimetroTotal = perimetro*cantidadAlambres;

    //Muestro los datos
    alert("La cantidad de alambre a comprar es: "+perimetroTotal.toFixed(2));
}
function Circulo () 
{
    //Declaracion de variables
    var radio;
    var perimetro;
    var pi = Math.PI;
    var perimetroTotal;
    var cantidadAlambres = 3;

    //Obtencion de datos
    radio = txtIdRadio.value;

    //Parseo los datos
    radio = parseFloat(radio);

    //Calculo del perimetro total de alambre
    perimetro = 2*pi*radio;
    perimetroTotal = perimetro*cantidadAlambres;

    //Muestro los datos
    alert("La cantidad de alambre a comprar es: "+perimetroTotal.toFixed(2));
	
}
function Materiales () 
{
    //Declaracion de variables
    var largo;
    var ancho;
    var areaRectangulo;
    var cantidadBolsasCemento = 2;
    var cantidadBolsasCal = 3;
    var bolsasTotalesCemento;
    var bolsasTotalesCal;

    //Obtencion de datos
    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    //Parseo los datos
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    
    //Calculo del area
    areaRectangulo = largo*ancho;

    //Calculo de las bolsas de cemento para rectangulo
    bolsasTotalesCemento = cantidadBolsasCemento*areaRectangulo;
    bolsasTotalesCal = cantidadBolsasCal*areaRectangulo;

    //Muestro las bolsas cemento para el rectangulo
    alert("Rectangulo- Cantidad de bolsas de cemento: "+bolsasTotalesCemento+" Cantidad de bolsas de cal: "+bolsasTotalesCal);

}