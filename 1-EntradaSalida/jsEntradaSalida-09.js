/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio: 9

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

*/
function mostrarAumento()
{
	//Declaracion de variables
	var sueldo;
	var sueldoAumentado;

	//Obtencion del dato
	sueldo = txtIdSueldo.value;

	//Parseo el dato a int
	sueldo = parseInt(sueldo);

	//Calculo el importe aumentado 10%
	sueldoAumentado = sueldo*1.1;

	//Muestro el resultado
	txtIdResultado.value = sueldoAumentado;

}
