/*
Alumno : Pablo Cugliari
Division : B

Ejercicio 3
UTN airlines nos pide desarrollar una app para registrar el ingreso de pasajeros a distintos vuelos, 
se le pide a los pasajeros: nombre, edad (validar 13-85), cantidad de asientos que desea reservar (validar minimo 1 maximo 5 asientos),
 cantidad de kilómetros del viaje (validar 3000 kilómetros el mínimo - 18000 kilómetros máximo) y el destino (validar río de janeiro, 
	italia, cancún, japón), el precio por asiento es 1500 pesos, informar:
La cantidad total asientos ocupados
Dependiendo el destino seleccionado se aplican aumentos o descuentos según corresponda:
japón 40% de aumento
rio 10% descuento
italia 25% aumento
cancún 5% descuento
Según la cantidad de asientos reservados se aplican ciertos descuentos sobre el PRECIO FINAL:
1 pasajero 10% descuento
2-3 pasajeros 15% descuento
4-5 pasajeros 20% descuento
La recaudación total del vuelo

*/

function mostrar(){
	var nombre;
	var edad;
	var cantidadAsientos;
	var cantidadKilometros;
	var destino;
	var mensaje = "";
	var respuesta = "si";

	var sumaAsientos =0;

	var ajustePrecio;
	var precioFinal;

	var sumaTotalVuelo =0;


	while (respuesta == "si"){
		nombre = prompt ("Ingresar el nombre");

		edad = prompt ("Ingresar edad, entre 13 y 85");
		while(edad < 13 || edad > 85){
			edad = prompt ("Error en edad,Ingresar edad, entre 13 y 85");
		}

		cantidadAsientos = prompt ("Ingresar la cantidad de asientos (minimo 1, maximo 5)");
		while (cantidadAsientos < 1 || cantidadAsientos > 5){
			cantidadAsientos = prompt ("Error cantidad de asientos,Ingresar la cantidad de asientos (minimo 1, maximo 5)");
		}

		cantidadKilometros = prompt ("Ingresar la cantidad de kilometros (minimo 3000 a 18000)");
		while(cantidadKilometros < 3000 || cantidadKilometros > 18000){
			cantidadKilometros = prompt ("Error en cantidad de kilometros,Ingresar la cantidad de kilometros (minimo 3000 a 18000)");
		}


		destino = prompt ("Ingresa el destino, (rio de janeiro,italia,cancun,japon)");
		while(destino != "rio de janeiro" && destino != "italia" && destino != "cancun" && destino != "japon"){
			destino = prompt ("Error en destino,Ingresa el destino, (rio de janeiro,italia,cancun,japon)");
		}


		cantidadAsientos = parseInt (cantidadAsientos);
		cantidadKilometros = parseInt (cantidadKilometros);
		edad = parseInt (edad);

		sumaAsientos += cantidadAsientos;
		precioSinDescuento = 1500*cantidadAsientos;


		//console.log(nombre,edad,cantidadAsientos,cantidadKilometros,destino);

		do{
			respuesta = prompt ("Desea seguir ingresando vuelos ? si/no");
		}while(respuesta != "si" && respuesta !="no");

		switch(destino){
			case "rio de janeiro":
				ajustePrecio = 0.9;//DESCUENTO
			break;
			case "italia":
				ajustePrecio = 1.25;//AUMENTO
			break;
			case "cancun":
				ajustePrecio = 0.95;//DESCUENTO
			break;
			default:
				ajustePrecio = 1.4;//AUMENTO
			break;
		}


		if(cantidadAsientos == 1){
			descuentoAsientos = 0.9;
		}else if(cantidadAsientos > 1 && cantidadAsientos < 4){
			descuentoAsientos = 0.85;
		}else if(cantidadAsientos > 3 && cantidadAsientos < 6){
			descuentoAsientos = 0.8;
		}


		precioFinal = precioSinDescuento*descuentoAsientos*ajustePrecio;
		/*console.log(precioSinDescuento)
		console.log(descuentoAsientos)
		console.log(ajustePrecio);
		console.log(precioFinal);*/

		sumaTotalVuelo += precioFinal;
	}

	mensaje += "Total de asientos ocupados es: "+sumaAsientos+"<br>";
	mensaje += "La recuadacion final del vuelo es: "+sumaTotalVuelo+"<br>";

	document.write(mensaje);
}
