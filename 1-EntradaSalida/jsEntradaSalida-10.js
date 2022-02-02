/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio: 10

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
*/

function mostrarAumento()
{
	//Declaracion de variables
	var importe;
	var importeConDescuento;

	//Obtencion de datos
	importe = txtIdImporte.value;

	//Parseo de datos
	importe = parseInt(importe);

	//Calculo el importe con descuento del 25%
	importeConDescuento = importe * 0.75;

	//Muestro los datos
	txtIdResultado.value = importeConDescuento;
}
