/*
Alumno: Pablo Cugliari
Division: B

Ejercicio 2
Un aficionado a las cartas coleccionables desea organizar su colección, para esto necesita ingresar en un programa:
nombre, tipo de carta (validar monstruo, arma, mágica) y su cantidad.
 Además deberá Especificar su rareza (validar común, rara, legendaria), precio (validar entre $250 y $5000). 
 dejar ingresar hasta que el usuario quiera e informar lo siguiente:
La cantidad de cartas de cada tipo.
De las cartas raras la que menos precio tiene y su nombre
El valor de la colección entera
Informar el porcentaje de cartas según su rareza. (Sobre el total de cartas, no de ingresos)
*/

function mostrar(){
	var nombre;
	var tipoCarta;
	var cantidad;
	var rareza;
	var precio;
	var respuesta = "si";
	var mensaje = "";

	var contadorMonstruo=0;
	var contadorArma=0;
	var contadorMagica=0;

	var minimoPrecio = "NO SE INGRESO CARTAS RARAS";;
	var minimoNombre = "NO SE INGRESO CARTAS RARAS";;
	var esPrimeraCarta = true;

	var sumaTotal =0;

	var contadorComun=0;
	var contadorTotalCartas=0;
	var contadorRara=0;
	var contadorLegendaria=0;

	var porcentajeComun;
	var porcentajeRara;
	var porcentajeLegendaria;



	while(respuesta == "si"){
		nombre = prompt ("Ingresar el nombre");

		tipoCarta = prompt ("Ingresar el tipo de carta, monstruo, arma, mágica ");
		while (tipoCarta != "monstruo" && tipoCarta != "arma" && tipoCarta != "magica"){
			tipoCarta = prompt ("Error en tipo de carta,Ingresar el tipo de carta, monstruo, arma, mágica ");
		}

		cantidad = prompt ("Ingresar la cantidad");
		while (cantidad < 0){
			cantidad = prompt ("Error cantidad, Ingresar la cantidad positiva");
		}

		rareza = prompt ("Ingresar el tipo de rareza, comun, rara, legendaria ");
		while (rareza != "comun" && rareza != "rara" && rareza != "legendaria"){
			rareza = prompt ("Error en tipo de carta,Ingresar el tipo de rareza, comun, rara, legendaria  ");
		}

		precio = prompt ("Ingrsar el precio entre  $250 y $5000");
		while (precio < 250 || precio > 5000){
			precio = prompt ("Error en precio,Ingrsar el precio entre  $250 y $5000");
		}

		cantidad = parseInt (cantidad);
		precio = parseFloat (precio);

		//console.log(nombre,tipoCarta,cantidad,rareza,precio);

		do{
			respuesta = prompt ("Desea seguir ingresando cartas ? si/no");
		}while(respuesta != "si" && respuesta !="no");


		switch(tipoCarta){
			case "monstruo":
				contadorMonstruo++;
			break;
			case "arma":
				contadorArma++;
			break;
			case "magica":
				contadorMagica++;
			break;

		}

		if(rareza == "rara"){
			if (esPrimeraCarta || precio < minimoPrecio){
				minimoPrecio = precio;
				minimoNombre = nombre;
				esPrimeraCarta = false;
			}
			contadorRara++
		}else if(rareza == "comun"){
			contadorComun++;
		}else{
			contadorLegendaria++;
		}

		contadorTotalCartas++;
		sumaTotal+=precio;

	}

	if(contadorTotalCartas){
		porcentajeComun = (contadorComun*100)/contadorTotalCartas;
		porcentajeLegendaria = (contadorLegendaria*100)/contadorTotalCartas;
		porcentajeRara = (contadorRara*100)/contadorTotalCartas;
	}


	mensaje += "La cantidad de cartas de cada tipo es: <br>";
	mensaje += "---Monstruo: "+contadorMonstruo+"<br>";
	mensaje += "---Arma: "+contadorArma+"<br>";
	mensaje += "---Magica: "+contadorMagica+"<br>";
	mensaje += "De las cartas raras la que menos precio tiene es: "+ minimoPrecio+ " y su nombre es: " +minimoNombre+"<br>";
	mensaje += "El valor de la colección entera es: "+sumaTotal+"<br>";
	mensaje += "Informar el porcentaje de cartas según su rareza. (Sobre el total de cartas, no de ingresos) <br>";
	mensaje += "---Rara: "+porcentajeRara+"% <br>";
	mensaje += "---Comun: "+porcentajeComun+"% <br>";
	mensaje += "---Legendaria: "+porcentajeLegendaria+"% <br>";

	document.write(mensaje);
}









