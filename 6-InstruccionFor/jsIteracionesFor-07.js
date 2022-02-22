/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 7 (Iteracion FOR)

Enunciado:
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.
*/
function mostrar()
{
	var numeroIngresado;
	var cantidadDivisores=0;
	var mensaje="Numeros divisores: <br><br>"

	numeroIngresado = prompt ("Ingrese un numero");

	for(var i=1;i<=numeroIngresado;i++){
		
		if(!(numeroIngresado%i)){
			//console.log(i);//MUESTRO POR CONSOLA
			mensaje+=i+"<br>"
			cantidadDivisores++;
		}
	}

	//alert("Cantidad de divisores encontrados es "+cantidadDivisores);//MUESTRO POR ALERT
	document.getElementById("cantidadDivisoresId").innerHTML = "Cantidad de divisores encontrados "+cantidadDivisores;//CREO ETIQUETA EN HTML, <p id="cantidadDivisoresId"  ></p>
	document.getElementById("divisoresId").innerHTML = mensaje;//CREO ETIQUETA EN HTML, <p id="divisoresId"></p>

}//FIN DE LA FUNCIÓN