/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 9 (Instruccion IF)

Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive

*/
function mostrar()
{
	//Declaracion de variable
	var numeroRandom;
	var valorMaximo;
	var valorMinimo;

	//Asigno los valores limites incluidos
	valorMaximo = 10
	valorMinimo = 1;

	//Obtengo el numero random
	numeroRandom = Math.floor(Math.random() * valorMaximo) + valorMinimo;

	
	//Convierto a entero ya que random devuelve un numero con decimales
	numeroRandom = parseInt(numeroRandom);
	
	//Muestro el numero
	alert(numeroRandom);	

}//FIN DE LA FUNCIÓN