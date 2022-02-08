/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 7 (Instruccion IF)

Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'

*/
function mostrar()
{
	//Declaracion de variables
	var edad;
	var estado;

	//Obtengo los datos desde ID
	edad = txtIdEdad.value;
	estado = estadoCivil.value;

	//Evaluo los datos
	if(edad < 18 && estado != "Soltero"){
		alert("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN