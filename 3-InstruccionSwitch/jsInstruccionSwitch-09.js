/*
Alumno: Pablo Alberto Cugliari
Division: B
Ejercicio : 9 (Instruccion SWITCH)

Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año
 y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene 
el precio sin descuento
*/

function mostrar()
{
	var estacionIngresada = document.getElementById("txtIdEstacion").value;//txtIdEstacion.value;
	var destinoIngresado = document.getElementById("txtIdDestino").value;//txtIdDestino.value;
	var precioBase=15000;
	var ajustePrecio;
	var precioFinal;

	switch(estacionIngresada){
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche":
					ajustePrecio=1.2;//AUMENTO 20%
				break;
				case "Cataratas":
				case "Cordoba":
					ajustePrecio=0.9;//DESCUENTO 10%
				break;
				case "Mar del plata":
					ajustePrecio=0.8;//DESCUENTO 20%
				break;
			}
		break;
		case "Verano":
			switch(destinoIngresado){
				case "Bariloche":
					ajustePrecio=0.8;//DESCUENTO 20%
				break;
				case "Cataratas":
				case "Cordoba":
					ajustePrecio=1.1;//AUMENTO 10%
				break;
				case "Mar del plata":
					ajustePrecio=1.2;//AUMENTO 20%
				break;
			}
		break;
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado){
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					ajustePrecio=1.1;//AUMENTO 10%
				break;

				case "Cordoba":
					ajustePrecio=1;//SIN DESCUENTO
				break;
			}
		break;
	}

	precioFinal = precioBase*ajustePrecio;
	alert("El precio final es: $"+precioFinal);

}//FIN DE LA FUNCIÓN