/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 2 (Instruccion IF)

Enunciado:
Al ingresar una edad debemos informar solo si la persona es mayor de edad

Aclaracion: persona mayor de edad desde 18
*/

function mostrar()
{
	//Declaracion de variables
	var edad;

	//Obtencion del dato desde ID
	edad = txtIdEdad.value;

	//Evaluo los datos
	if(edad > 17){
		alert("La edad de la persona ingresada es mayor de edad");
	}

}//FIN DE LA FUNCIÓN