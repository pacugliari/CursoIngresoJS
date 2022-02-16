/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 10 (WHILE)

Enunciado:
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/

function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var promedioPositivos=0;
	var promedioNegativo=0;
	var diferencia;
	var mensaje;

	respuesta="si";

	while(respuesta == "si" || respuesta== "SI"){
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		console.log(numeroIngresado);
		if(numeroIngresado > -1){
			sumaPositivos+=numeroIngresado;
			contadorPositivos++;
		}else{
			sumaNegativos += numeroIngresado;
			contadorNegativos++;
		}
		if(!(numeroIngresado%2)){//NUMERO PAR
			cantidadPares++;
		}
		if(!numeroIngresado){//NUMERO INGRESADO CERO
			cantidadCeros++;
		}
		respuesta = prompt("Desea seguir ingresando numeros ? SI-NO");
	}

	if(contadorPositivos)
		promedioPositivos= sumaPositivos/contadorPositivos;
	if(contadorNegativos)
		promedioNegativo = sumaNegativos/contadorNegativos;
	diferencia=sumaPositivos-sumaNegativos;

	mensaje="1-Suma de los negativos: "+sumaNegativos+"<br>";
	mensaje+="2-Suma de los positivos: "+sumaPositivos+"<br>";
	mensaje+="3-Cantidad de positivos: "+contadorPositivos+"<br>";
	mensaje+="4-Cantidad de negativos: "+contadorNegativos+"<br>";
	mensaje+="5-Cantidad de ceros: "+cantidadCeros+"<br>";
	mensaje+="6-Cantidad de números pares: "+cantidadPares+"<br>";
	mensaje+="7-Promedio de positivos: "+promedioPositivos+"<br>";
	mensaje+="8-Promedios de negativos: "+promedioNegativo+"<br>";
	mensaje+="9-Diferencia entre positivos y negativos: ("+sumaPositivos+"-("+sumaNegativos+"))= "+diferencia+"<br>";

	document.write(mensaje);


}//FIN DE LA FUNCIÓN

