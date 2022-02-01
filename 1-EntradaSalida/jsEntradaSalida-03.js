/*

Alumno: Pablo Alberto Cugliari
Division: B

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

function mostrar()
{
	//Inicio declaracion de variables
	var nombreIngresado;
	//Fin declaracion de variables

	//Inicio captura de datos del DOM
	nombreIngresado=document.getElementById("txtIdNombre").value;//Captura de datos
	//Fin captura de datos del DOM

	alert(nombreIngresado);//Muestro los datos por el alert

}


