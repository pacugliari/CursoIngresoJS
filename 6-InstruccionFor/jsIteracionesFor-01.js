/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 1 (Iteracion FOR)

Enunciado:
al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.
*/
function mostrar()
{
	var mensaje="";
	for(var i=1;i<11;i++){
		mensaje += i+"<br>";
	}
	document.write(mensaje);
}