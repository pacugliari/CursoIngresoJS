/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 2 (Iteracion FOR)

Enunciado:
al presionar el botón mostrar 10 repeticiones con números , desde el 10 al 1.
*/
function mostrar()
{

	var mensaje="";
	for(var i=10;i>0;i--){
		mensaje += i+"<br>";
	}
	document.write(mensaje);
}