/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 1 (WHILE)

Enunciado:
al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.
*/

function mostrar()
{
	var contador=1;
	var mensaje='';

	while(contador < 11){
		mensaje+=contador+" ";
		console.log(contador);
		contador++;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN