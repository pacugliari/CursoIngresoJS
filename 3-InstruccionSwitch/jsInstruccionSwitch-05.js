/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 5 (Instruccion SWITCH)

Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/

function mostrar()
{
	//Declaracion de variables
	var hora =txtIdHora.value;
	hora = parseInt (hora);
	var mensaje;

	//Evaluo los datos
	switch(hora){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje="Es de mañana";
		break;
		default:
			mensaje="No es de mañana"
		break;

	}

	//Imprimo el mensaje
	alert(mensaje);
	
}//FIN DE LA FUNCIÓN