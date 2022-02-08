/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 6 (Instruccion IF)

Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

*/
function mostrar()
{
	//Declaracion de variables
	var edad;

	//Obtencion de datos desde ID
	edad = txtIdEdad.value;

	//Evaluo los datos
	if(edad > 17){
		alert("La persona es mayor de edad");
	}else if (edad < 18 && edad > 12){
		alert("La persona es adolescente");
	}else{
		alert("La persona es niño");
	}

}//FIN DE LA FUNCIÓN