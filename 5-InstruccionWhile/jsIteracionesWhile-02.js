/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 2 (WHILE)

Enunciado:
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.
*/
function mostrar()
{
	var contador=10;
	var mensaje='';

	while(contador > 0){
		mensaje+=contador+" ";
		console.log(contador);
		contador--;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN