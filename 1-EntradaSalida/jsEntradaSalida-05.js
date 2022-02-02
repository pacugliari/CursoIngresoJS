/*

Alumno: Pablo Alberto Cugliari
Division: B

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	

*/
function mostrar()
{	
	//Declaracion de variables
	var nombreIngresado;
	var edadIngresada;
	//Fin declaracion de variables

	//Obtencion de datos del ID
	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada  = document.getElementById("txtIdEdad").value;
	//Fin obtencion de datos del ID

	//Muestro la informacion concatenada
	alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años");
}

