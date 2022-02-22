/*
Alumno: Pablo Alberto Cugliari
Division: B
TP : 12 (con While)


RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada 
por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada=0;
 	var sexoIngresado="x";
 	var estadoCivilIngresado=0;
	var sueldoBruto=0;
	var numeroLegajo=0;
	var nacionalidad="x";
	
	//VALIDACION EDAD
	while(edadIngresada < 18 || edadIngresada > 90){
		edadIngresada=prompt("Edad, entre 18 y 90 años inclusive.");
	}

	//VALIDACION SEXO
	while(sexoIngresado != "M" && sexoIngresado != "F"){
		sexoIngresado=prompt("Sexo, “M” para masculino y “F” para femenino");
	}

	//VALIDACION ESTADO CIVIL	
	while(estadoCivilIngresado < 1 || estadoCivilIngresado > 4){
		estadoCivilIngresado=prompt("Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	}
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	switch(estadoCivilIngresado){
		case 1:
			estadoCivilIngresado="Soltero/a";
		break;
		case 2:
			estadoCivilIngresado="Casado/a";
		break;
		case 3:
			estadoCivilIngresado="Divorciado/a";
		break;
		case 4:
			estadoCivilIngresado="Viudo/a";
		break;
	}

	//VALIDACION SUELDO
	while(sueldoBruto < 8000 ){
		sueldoBruto=prompt("Sueldo bruto, no menor a 8000.");
	}

	//VALIDACION NUMERO LEGAJO
	while(numeroLegajo < 1000 || numeroLegajo > 9999 ){
		numeroLegajo=prompt("Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
	}

	//VALIDACION NACIONALIDAD
	while(nacionalidad != "E" && nacionalidad != "A" && nacionalidad != "N"){
		nacionalidad=prompt("Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	}

	//CARGO LOS DATOS VALIDADOS
	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado ;
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	document.getElementById("txtIdLegajo").value = numeroLegajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;

}
