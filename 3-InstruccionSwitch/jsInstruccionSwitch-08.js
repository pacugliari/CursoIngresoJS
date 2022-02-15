/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 8 (Instruccion SWITCH)

Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
BARILOCHE - FRIO
USHUAIA - FRIO
CATARATAS -CALOR
MAR DEL PLATA -CALOR
*/

function mostrar()
{
	//Declaracion de variables
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	//Evaluo los datos
	switch(destinoIngresado){
		case "Bariloche":
		case "Ushuaia":
			mensaje="FRIO";
		break;
		default:
			mensaje= "CALOR";
		break;

	}

	//Imprimo el mensaje
	alert(mensaje);

}//FIN DE LA FUNCIÓN