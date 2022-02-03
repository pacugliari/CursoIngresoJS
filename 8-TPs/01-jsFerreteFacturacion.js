/*

Alumno: Pablo Alberto Cugliari
Division: B
TP: 1

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //Declaracion de variables
	var precioUno;
    var precioDos;
    var precioTres;
    var sumatoria = 0;

    //Obtencion de datos
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    //Parseo de datos a enteros
    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    //Suma de los precios
    sumatoria = precioUno + precioDos + precioTres;

    //Muestro mensaje con los datos
    alert("La suma de los precios es: "+sumatoria);

}
function Promedio () 
{
    //Declaracion de variables
    var precioUno;
    var precioDos;
    var precioTres;
    var sumatoria = 0;
    var promedio;

    //Obtencion de datos
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    //Parseo de datos a enteros
    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    //Suma de los precios
    sumatoria = precioUno + precioDos + precioTres;

    //Calculo el promedio
    promedio = sumatoria/3;

    //Muestro mensaje con los datos
    alert("El promedio de los precios es: "+promedio);
	
}
function PrecioFinal () 
{	
    //Declaracion de variables
    var precioUno;
    var precioDos;
    var precioTres;
    var sumatoria = 0;
    var precioMasIva;
    var iva = 21;

    //Obtencion de datos
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    //Parseo de datos a enteros
    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    //Suma de los precios
    sumatoria = precioUno + precioDos + precioTres;

    //Precio final + IVA
    precioMasIva = sumatoria + (sumatoria*iva/100);

    //Muestro mensaje con los datos
    alert("El precio final + IVA 21% es: "+precioMasIva);
	
}