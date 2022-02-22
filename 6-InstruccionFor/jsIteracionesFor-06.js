/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 6 (Iteracion FOR)

Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/
function mostrar()
{
	var numeroIngresado;
	var cantidadPar=0;
	var mensaje="Numeros pares: <br><br>"

	numeroIngresado = prompt ("Ingrese un numero");

	for(var i=1;i<=numeroIngresado;i++){
		
		if(!(i%2)){
			//console.log(i); MUESTRO POR CONSOLA
			mensaje+=i+"<br>"
			cantidadPar++;
		}
	}

	//alert("Cantidad de pares encontrados es "+cantidadPar); MUESTRO POR ALERT
	document.getElementById("cantidadParesId").innerHTML = "Cantidad de pares encontrados "+cantidadPar;//CREO ETIQUETA EN HTML, <p id="cantidadParesId"></p>
	document.getElementById("paresId").innerHTML = mensaje;//CREO ETIQUETA EN HTML,	<p id="paresId"></p>


}//FIN DE LA FUNCIÓN