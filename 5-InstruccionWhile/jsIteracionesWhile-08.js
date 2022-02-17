/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 8 (WHILE)

Enunciado:
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	sumaPositivos=0;
	multiplicacionNegativos=0;
	respuesta='si';

	while(respuesta == "si" || respuesta== "SI"){
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado > -1){
			sumaPositivos+=numeroIngresado;
		}else{
			if(!multiplicacionNegativos){
				multiplicacionNegativos=1;
			}
			multiplicacionNegativos = multiplicacionNegativos*numeroIngresado;
		}
		respuesta = prompt("Desea seguir ingresando numeros ? SI-NO");
	}

	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN