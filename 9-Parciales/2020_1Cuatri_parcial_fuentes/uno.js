/*
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/



function mostrar()
{
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var minimoPrecio;
	var minimoCantidad;
	var minimoFabricante;
	var esPrimerIngresoAlcohol=true;
	var mayorTipo;
	var mensaje="";
	var promedio;

	var cantidadJabon=0;
	var cantidadBarbijo=0;
	var cantidadAlcohol=0;
	var contadorJabon=0;
	var contadorBarbijo=0;
	var contadorAlcohol=0;
	

	for(var i=1;i<4;i++){
		precio=0;
		cantidad=0;
		tipo="";

		while(tipo != "barbijo" && tipo!="jabon" && tipo!="alcohol"){
			tipo = prompt ("Ingrese el tipo,(validar barbijo , jabón o alcohol)");
		}
	
		while(precio <100 || precio >300){
			precio = prompt("Ingrese el precio entre 100 y 300");
		}
	
		while(cantidad<1 || cantidad >1000){
			cantidad=prompt("Ingrese la cantidad de unidades entre 1 y 1000");
		}
		
		cantidad=parseInt(cantidad);
		precio=parseFloat(precio);

		marca = prompt("Ingrese la marca");
		fabricante = prompt ("Ingrese la fabricante");

		switch(tipo){
			case "alcohol":
				cantidadAlcohol+=cantidad;
				contadorAlcohol++;
				 if(precio < minimoPrecio || esPrimerIngresoAlcohol){
					minimoPrecio=precio;
					minimoCantidad=cantidad;
					minimoFabricante=fabricante;
					esPrimerIngresoAlcohol=false;
				}
			break;
			case "barbijo":
				cantidadBarbijo+=cantidad;
				contadorBarbijo++;
			break;
			case "jabon":
				cantidadJabon+=cantidad;
				contadorJabon++;
			break;
		}

		if(cantidadAlcohol>cantidadBarbijo && cantidadAlcohol>cantidadJabon){
			mayorTipo="alcohol";
			promedio = cantidadAlcohol/contadorAlcohol;
		}else if (cantidadBarbijo> cantidadAlcohol && cantidadBarbijo>cantidadJabon){
			mayorTipo="barbijo";
			promedio = cantidadBarbijo/contadorBarbijo;
		}else{
			mayorTipo="jabon";
			promedio = cantidadJabon/contadorJabon;
		}

		console.log(tipo,precio,cantidad,marca,fabricante);
		
	}

	//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
	//b) Del tipo con mas unidades, el promedio por compra
	//c) Cuántas unidades de jabones hay en total
	mensaje+="<br>"
	mensaje+="a) El mas barato de los alcoholes cuesta: "+minimoPrecio+" la cantidad de unidades fueron: "+minimoCantidad+" y el fabricante: "+minimoFabricante+"<br>";
	mensaje+="b) El tipo con mas unidades es: "+mayorTipo+" y el promedio por compra es: "+promedio+ "<br>";
	mensaje+="c) Cantidad de jabones en total es: "+cantidadJabon+"<br>";

	document.write(mensaje);

}
