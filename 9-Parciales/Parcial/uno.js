/*
Alumno: Pablo Cugliari
Division: B

Ejercicio 1
Se pide cargar la ficha médica para 5 jugadores de fútbol categoría mayores.
Se solicita Nombre, Edad (entre 18 y 36), Peso y Altura. Se solicita:
A) Nombre del jugador más joven.
B) El peso del jugador más alto.
C) Promedio de altura del equipo.
D) Cantidad de jugadores que tienen entre 20 y 30 años y cuyo peso esté entre 70 y 90 kg.
*/
function mostrar()
{
	var nombre;
	var edad;
	var peso;
	var altura;
	var mensaje="";

	var minimoEdad;
	var minimoNombre;
	var esPrimerJugadorJoven = true;

	var maximoAltura;
	var maximoPeso;
	var esPrimerJugadorAlto = true;

	var sumaAltura =0;
	var cantidadJugadoresJovenes=0;
	var promedioAltura;

	for(var i=0;i<5;i++){
		nombre = prompt ("Ingrese el nombre");
		
		edad = prompt ("Ingrese la edad entre 18 y 36");
		while(edad < 18 || edad > 36){
			edad = prompt ("Error en edad,Ingrese la edad entre 18 y 36");
		}

		peso = prompt ("Ingrese el peso");
		while (peso < 1){
			peso = prompt ("Error en peso,Ingrese el peso mayor que 0");
		}

		
		altura = prompt ("Ingrese la altura");
		while (altura < 1){
			altura = prompt ("Error en altura,Ingrese la altura mayor que 0");
		}

		edad = parseInt (edad);
		peso = parseFloat (peso);
		altura = parseFloat (altura);

		//console.log(nombre,edad,peso,altura);

		if(esPrimerJugadorJoven || edad < minimoEdad){
			minimoEdad = edad;
			minimoNombre = nombre;
			esPrimerJugadorJoven = false;
		}

		if(esPrimerJugadorAlto || altura > maximoAltura){
			maximoAltura = altura;
			maximoPeso = peso;
			esPrimerJugadorAlto = false;
		}

		if(edad > 19 && edad < 31 && peso > 69 && peso < 91){
			cantidadJugadoresJovenes++;
		}


		sumaAltura += altura;
	
	}


	promedioAltura = sumaAltura/5;

	mensaje += "A) Nombre del jugador más joven es: "+minimoNombre+"<br>";
	mensaje += "B) El peso del jugador más alto es:"+maximoPeso+"<br>";
	mensaje += "C) Promedio de altura del equipo es: "+promedioAltura+"<br>";
	mensaje += "D) Cantidad de jugadores que tienen entre 20 y 30 años y cuyo peso esté entre 70 y 90 kg es: "+cantidadJugadoresJovenes+"<br>";

	document.write(mensaje);
}