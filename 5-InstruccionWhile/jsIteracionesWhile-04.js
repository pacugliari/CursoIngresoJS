/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 4 (WHILE)

Enunciado:
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive");

	while(numeroIngresado > 9 || numeroIngresado < 0){
		numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive");
	}
	
	document.getElementById("txtIdNumero").value=numeroIngresado;
	
}//FIN DE LA FUNCIÓN