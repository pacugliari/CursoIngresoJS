/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 5 (Iteracion FOR)

Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/
function mostrar()
{
	var respuesta;
	for(;;){
		respuesta = prompt("Ingrese un numero ");
		if(respuesta == 9){
			break;
		}
		console.log(respuesta);
	}



}//FIN DE LA FUNCIÓN