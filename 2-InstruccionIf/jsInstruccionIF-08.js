/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 8 (Instruccion IF)

Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'

*/
function mostrar()
{
	//Declaracion de variables
	var edad;
	var estado;

	//Obtengo los datos del ID
	edad = txtIdEdad.value;
	estado = estadoCivil.value;

	//Evaluo los datos
	if(edad > 17 && estado == "Soltero"){
		alert("Es soltero y no es menor");
	}

}//FIN DE LA FUNCIÓN