/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 8 (Iteracion FOR)

Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.

un número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1
*/
function mostrar()
{
	var numeroIngresado;
	var cantidadDivisores=0;

	numeroIngresado = prompt ("Ingrese un numero");

	for(var i=1;i<=numeroIngresado;i++){
		
		if(!(numeroIngresado%i)){
			console.log(i);
			cantidadDivisores++;
		}
	}

	if(cantidadDivisores==2){
		alert("ES PRIMO");
	}else{
		alert("NO ES PRIMO");
	}


}//FIN DE LA FUNCIÓN