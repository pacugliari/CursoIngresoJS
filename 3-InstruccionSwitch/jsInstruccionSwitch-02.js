/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 2 (Instruccion SWITCH)

Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar()
{
	//Declaracion de variables
	var mesDelAño =txtIdMes.value;
	var mensaje;

	//Evaluo los datos
	switch(mesDelAño){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje="Falta para el invierno."
		break;
		case "Julio":
		case "Agosto":
			mensaje= "Abrigate que hace frio."
		break;
		default:
			mensaje="Ya pasamos el frio, ahora calor!!!."
		break;	

	}
	
	//Imprimo el mensaje
	alert(mensaje);

}//FIN DE LA FUNCIÓN