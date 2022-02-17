/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 5 (WHILE)

Enunciado:
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
*/
function mostrar()
{
	var sexoIngresado="";
	var mensaje;

	while(sexoIngresado != "f" && sexoIngresado !="m"){
		sexoIngresado = prompt("ingrese f ó m .");
	}
	
	if (sexoIngresado == "f"){
		mensaje="Femenino";
	}else{
		mensaje = "Masculino";
	}

	document.getElementById("txtIdSexo").value=mensaje;
}//FIN DE LA FUNCIÓN