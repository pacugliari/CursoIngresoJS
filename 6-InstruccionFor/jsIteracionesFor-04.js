/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 4 (Iteracion FOR)

Enunciado:
al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/


function mostrar()
{
	var respuesta;
	var contador=0;
	for(;;){//BUCLE INFINITO
		respuesta = prompt("Usar 'BREAK' para detener el bucle");
		if(respuesta == "BREAK"){
			break;
		}
		console.log(contador);
		contador++;
	}

}//FIN DE LA FUNCIÓN




