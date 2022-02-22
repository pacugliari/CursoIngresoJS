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
	var esPrimeraIteracion = true;//uso de flag
	//iniciar variables
	respuesta='si';
	

	while(respuesta == "si" || respuesta== "SI"){
		numeroIngresado = prompt("Ingrese un numero");
		if(!numeroIngresado)//VERIFICO QUE NO INGRESE VACIO
			numeroIngresado=0;
		numeroIngresado = parseInt(numeroIngresado);
		if(esPrimeraIteracion){
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			esPrimeraIteracion=false;
		}else if(numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
		}else if (numeroIngresado < numeroMinimo){
			numeroMinimo = numeroIngresado
		}
		do{
			respuesta = prompt("Desea seguir ingresando numeros ? SI-NO");
		}while(respuesta != "SI" && respuesta != "NO" && respuesta != "si" && respuesta != "no");//VERIFICO QUE LA RESPUESTA
	}
	
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN