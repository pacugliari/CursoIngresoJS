/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 4 (Instruccion SWITCH)

Enunciado:
al seleccionar un mes informar.
si tiene 28 días.//FEBRERO
si tiene 30 días.//ABRIL-JUNIO-SEPTIEMBRE-NOVIEMBRE
si tiene 31 días.//ENERO-MARZO-MAYO-JULIO-AGOSTO-OCTUBRE-DICIEMBRE
*/

function mostrar()
{
	//Declaracion de variables
	var mesDelAño =txtIdMes.value;
	var mensaje;

	//Evaluo los datos
	switch(mesDelAño){
		case "Febrero":
			mensaje="si tiene 28 días";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="si tiene 30 días";
		break;
		default:
			mensaje="si tiene 31 días";
		break;

	}

	//Imprimo el mensaje
	alert(mensaje);

}//FIN DE LA FUNCIÓN