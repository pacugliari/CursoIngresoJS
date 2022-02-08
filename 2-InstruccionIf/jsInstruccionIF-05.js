/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 5 (Instruccion IF)

Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.

Aclaracion: persona adolescente entre 13 y 17 años inclusive
*/
function mostrar()
{
	//Declaracion de variables
	var edad;

	//Obtencion de datos del ID
	edad = txtIdEdad.value;

	//Evaluo los datos
	if(!(edad < 18 && edad >12)){
		alert("La edad de la persona ingresada NO es adolescente");
	}

}//FIN DE LA FUNCIÓN