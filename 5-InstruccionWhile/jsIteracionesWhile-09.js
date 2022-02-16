/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 9 (WHILE)

Enunciado:
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	respuesta='si';
	
	//LECTURA PREVIA
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);
	numeroMaximo = numeroIngresado;
	numeroMinimo = numeroIngresado;
	respuesta = prompt("Desea seguir ingresando numeros ? SI-NO");

	while(respuesta == "si" || respuesta== "SI"){
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
		}else if (numeroIngresado < numeroMinimo){
			numeroMinimo = numeroIngresado
		}
		respuesta = prompt("Desea seguir ingresando numeros ? SI-NO");
	}
	
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN