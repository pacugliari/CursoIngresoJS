/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio: 8

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."

*/
function SacarResto()
{
	//Declaracion de variables
	var dividendo;
	var divisor;
	var resto;

	//Obtencion de datos
	dividendo = txtIdNumeroDividendo.value;
	divisor = txtIdNumeroDivisor.value;

	//Transformo a enteros
	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	//Calculo el resto
	resto = dividendo%divisor;

	//Muestro los datos
	alert("El resto es: "+resto);
}
