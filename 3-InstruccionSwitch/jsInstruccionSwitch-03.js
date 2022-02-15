/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 3 (Instruccion SWITCH)

Enunciado:
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar()
{
	//Declaracion de variables
	var mesDelAño =txtIdMes.value;
	var mensaje;

	//Evaluo los datos
	switch(mesDelAño){
		case "Febrero":
			mensaje="Este mes no tiene más de 29 días.";
		break;
		default:
			mensaje="Este mes tiene 30 o más días"
		break;

	}
	
	//Imprimo el mensaje
	alert(mensaje);

}//FIN DE LA FUNCIÓN