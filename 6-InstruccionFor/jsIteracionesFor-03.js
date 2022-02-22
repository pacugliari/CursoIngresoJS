/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 3 (Iteracion FOR)

Enunciado:
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/
function mostrar()
{
	var mensaje="";
	var repetciones = prompt("ingrese el número de repeticiones");
	for(var i=1;i<=repetciones;i++){
		console.log("Hola UTN FRA");//MUESTRO POR CONSOLA
		mensaje += i+") Hola UTN FRA"+"<br>";
	}
	document.getElementById("mensajeId").innerHTML = mensaje;//MUESTRO POR ETIQUETA, CREE UNA ETIQUETA <p id="mensajeId"></p> en html para mostrar el mensaje

}//FIN DE LA FUNCIÓN