/*

Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio: 6

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"

*/
function sumar() {
	//Declaracion de variables
	var numeroUno;
	var numeroDos;
	var resultado;

	//Obtencion de datos
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	//Transformo a enteros
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	//Realizo la suma
	resultado = numeroUno + numeroDos;

	//Muestro el resultado
	alert("La suma es: " + resultado);
}

