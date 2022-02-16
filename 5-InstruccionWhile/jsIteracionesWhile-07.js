/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 7 (WHILE)

Enunciado:
Al presionar el botón pedir números hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var numeroIngresado;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta == "si" || respuesta== "SI"){
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador+=numeroIngresado;
		contador++;
		respuesta = prompt("Desea seguir ingresando numeros ? SI-NO");
	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN