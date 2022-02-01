/* 

Alumno: Pablo Alberto Cugliari
Division: B

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'

*/

function mostrar()
{
	//Inicio declaracion de variables
	var datoIngresado;
	//Fin declaracion de variables

	//Inicio captura de datos del prompt
	datoIngresado = prompt("Ingrese un dato: ","Ejemplo: 1");//Captura de datos
	//Fin captura de datos del prompt


	document.getElementById("txtIdNombre").value = datoIngresado;//Muestro los datos por el ID
}

