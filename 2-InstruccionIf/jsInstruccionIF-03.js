/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 3 (Instruccion IF)

Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

Aclaracion: persona mayor de edad desde 18
*/
function mostrar()
{
	//Declaracion de variables
	var edad;

	//Obtencion de datos desde ID
	edad = txtIdEdad.value;

	//Evaluo los datos
	if(edad > 17){
		alert("La edad de la persona ingresada es mayor de edad");
	}else{
		alert("La edad de la persona ingresada es menor de edad");
	}

}//FIN DE LA FUNCIÓN