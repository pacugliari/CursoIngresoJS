/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 10 (Instruccion SWITCH)

Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o 
"No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche
*/
function mostrar()
{
	var estacionIngresada = document.getElementById("txtIdEstacion").value;//txtIdEstacion.value;
	var destinoIngresado = document.getElementById("txtIdDestino").value;//txtIdDestino.value;
	var mensaje

	switch(estacionIngresada){
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche":
					mensaje="Se viaja";
				break;
				default:
					mensaje="No se viaja";
				break;
			}
		break;
		case "Verano":
			switch(destinoIngresado){
				case "Cataratas":
				case "Mar del plata":
					mensaje="Se viaja";
				break;
				default:
					mensaje="No se viaja";
				break;
			}
		break;
		case "Otoño":
			mensaje="Se viaja";
		break;
		case "Primavera":
			switch(destinoIngresado){
				case "Bariloche":
					mensaje="No se viaja";
				break;
				default:
					mensaje="Se viaja";
				break;
			}
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN