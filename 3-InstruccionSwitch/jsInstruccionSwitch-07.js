/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 7 (Instruccion SWITCH)

Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
BARILOCHE - OESTE
USHUAIA - SUR
CATARATAS -NORTE
MAR DEL PLATA -ESTE
*/

function mostrar()
{
	//Declaracion de variables
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	//Evaluo los datos
	switch(destinoIngresado){
		case "Bariloche":
			mensaje="Oeste";
		break;
		case "Ushuaia":
			mensaje="Sur";
		break;
		case "Cataratas":
			mensaje="Norte"
		break;
		case "Mar del plata":
			mensaje="Este";
		break;

	}

	//Imprimo el mensaje
	alert(mensaje);

}//FIN DE LA FUNCIÓN