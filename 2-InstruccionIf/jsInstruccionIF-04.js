/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 4 (Instruccion IF)

Enunciado:
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .

Aclaracion: persona mayor de edad desde 18
*/
function mostrar()
{
	//Declaracion de variables
	var edad;

	//Obtencion de datos desde ID
	edad = txtIdEdad.value;

	//Evaluo los datos
	if(edad < 18 && edad >12){
		alert("La edad de la persona ingresada es adolescente");
	}

}//FIN DE LA FUNCIÓN