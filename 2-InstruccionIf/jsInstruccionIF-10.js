/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 10 (Instruccion IF)

Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4

*/
function mostrar()
{
	//Declaracion de variables
	var notaRandom;
	var valorMaximo;
	var valorMinimo;
	var mensaje;

	//Asigno los valores maximos y minimos incluidos
	valorMaximo = 10
	valorMinimo = 1;

	//Obtengo el valor de la nota random
	notaRandom = Math.floor(Math.random() * valorMaximo) + valorMinimo;

	//Parseo a entero
	notaRandom = parseInt(notaRandom);

	//Evaluo datos
	if(notaRandom > 8){
		mensaje = "EXCELENTE";
	}else if(notaRandom > 3){
		mensaje = "APROBÓ";
	}else{
		mensaje = "Vamos, la proxima se puede";
	}

	//Imprimo el mensaje con la nota
	mensaje += ", Nota: "+notaRandom;
	alert(mensaje);

}//FIN DE LA FUNCIÓN