/*
Alumno: Pablo Cugliari
Division: B



*/

function mostrar()
{
   //DECLARACION VARIABLES 1RA PARTE
   var altura;
   var edad;
   var temperatura;
   var sexo;
   var nota;
   var nombre;
   var respuesta="si";
   var contadorMujeres=0;
   var contadorHombres=0;
   var contadorNb=0;
   var contadorTotal=0;
   var contadorFiebre=0;
   var sumaEdadHombres=0;
   var sumaEdadMujeres=0;
   var sumaEdadNb=0;
   var mensaje="";
   var promedioEdadHombres="NO SE ENCONTRO";
   var promedioEdadMuejeres="NO SE ENCONTRO";
   var promedioEdadNb="NO SE ENCONTRO";
   var personasSinFiebre;
   
   //DECLARACION VARIABLES 2RA PARTE
   var esPrimerAprobado = true;
   var primerAprobado="NO SE ENCONTRO";
   var esPrimerCarga = true;
   var maximoNombre;
   var maximoEdad;
   var maximaTemperatura;
   var esPrimerCargaNb = true;
   var minimaAltura="NO SE ENCONTRO";
   var minimaNota="NO SE ENCONTRO";
   var minimaEdad;
   
   //DECLARACION VARIABLES 3RA PARTE
   var esPrimerMujerAlta = true;
   var nombreMasAlta;
   var alturaMujerMax;
   var contadorDesaprobados = 0;
   var porcentajeDesaprobados;
   var esPrimerHombreBajo = true;
   var nombreHombreBajo="NO SE ENCONTRO";


   while(respuesta=="si"){
      altura = prompt("Ingrese la altura en centimetros (valor entre 0 y 250)");
      while(altura < 0 || altura > 250){
         altura = prompt("Error en altura,Ingrese la altura en centimetros (valor entre 0 y 250) ");
      }

      edad = prompt("Ingrese la edad (valor entre 0 y 100)");
      while(edad < 0 || edad > 100){
         edad = prompt("Error en edad,Ingrese la edad (valor entre 0 y 100) ");
      }

      temperatura = prompt("Ingrese la temperatura (valor entre 35 a 42)")
      while(temperatura < 35 || temperatura > 42){
         temperatura = prompt("Error en temperatura,Ingrese la temperatura (valor entre 35 a 42)");
      }

      sexo = prompt("Ingrese el sexo (f,m o nb)");
      while(sexo != "f" && sexo != "m" && sexo != "nb"){
         sexo = prompt("Error en sexo,Ingrese el sexo (f,m o nb)");
      }

      nota = prompt("Ingrese la nota (valor entre 1 a 10)")
      while(nota < 1 || nota > 10){
         nota = prompt("Error en nota,Ingrese la nota (valor entre 1 a 10)");
      }

      nombre = prompt ("Ingrese el nombre");


      do{
         respuesta = prompt("Desea seguir ingresando datos? si/no");
      }while(respuesta != "si" && respuesta != "no")

      altura = parseInt(altura);
      edad = parseInt(edad);
      temperatura = parseFloat (temperatura);
      nota = parseInt(nota);

      console.log(altura,edad,temperatura,sexo,nota,nombre);

      if(sexo=="f"){
         if(nota > 3 && (altura > alturaMujerMax || esPrimerMujerAlta)){
            alturaMujerMax = altura;
            nombreMasAlta = nombre;
            esPrimerMujerAlta = false;
         }
         contadorMujeres++;
         sumaEdadMujeres+=edad;
      }else if (sexo=="m"){
         if (nota < 4 && altura < 160 && esPrimerHombreBajo){
            nombreHombreBajo = nombre;
            esPrimerHombreBajo=false;
         }
         sumaEdadHombres+=edad;
         contadorHombres++;
      }else{
         if(esPrimerCargaNb || edad < minimaEdad){
            minimaEdad = edad;
            minimaAltura = altura;
            minimaNota = nota;
            esPrimerCargaNb = false;
         }
         sumaEdadNb+=edad;
         contadorNb++;
      }

      if(nota > 3 && esPrimerAprobado){
         primerAprobado = nombre;
         esPrimerAprobado=false;
      }else if (nota < 4){
         contadorDesaprobados++;
      }

      if(esPrimerCarga || temperatura > maximaTemperatura){
         maximoEdad = edad;
         maximoNombre = nombre;
         maximaTemperatura = temperatura;
         esPrimerCarga = false;
      }

      if(temperatura >= 37){
         contadorFiebre++;
      }

      contadorTotal++;
   }

   if(contadorHombres)
      promedioEdadHombres = sumaEdadHombres/contadorHombres;
   if(contadorMujeres)
      promedioEdadMuejeres = sumaEdadMujeres/contadorMujeres;
   if(contadorNb)
      promedioEdadNb = sumaEdadNb/contadorNb;

   personasSinFiebre = contadorTotal-contadorFiebre;

   if(contadorTotal)
      porcentajeDesaprobados = contadorDesaprobados*100/contadorTotal;
   
   //1RA PARTE
   mensaje += "a) Cantidad de mujeres: "+contadorMujeres+"<br>";
   mensaje += "b) Personas con fiebre: "+contadorFiebre+ "<br>";
   mensaje += "---Personas sin fiebre: "+personasSinFiebre+"<br>";
   mensaje += "c) Promedio de edad <br>";
   mensaje += "---Hombres: "+promedioEdadHombres+"<br>";
   mensaje += "---Mujeres: "+promedioEdadMuejeres+"<br>";
   mensaje += "---No Binario: "+promedioEdadNb+"<br>";
   
   //2DA PARTE
   mensaje += "d) Primer alumno aprobado: "+primerAprobado+"<br>";
   mensaje += "e) Maxima temperatura registrada de : "+maximoNombre + " y tiene "+maximoEdad+" años de edad <br>";
   mensaje += "f) La altura del No Binario mas joven es: "+minimaAltura + " y su nota fue de : "+minimaNota+ "<br>";

   //3RA PARTE
   mensaje += "g) El nombre de la mujer mas alta que aprobo es: "+nombreMasAlta+"<br>";
   mensaje += "h) El porcentaje de personas que desaprobo es: "+porcentajeDesaprobados.toFixed(2) +"% <br>";
   mensaje += "i) El nombre del primer hombre cuya altura es menor a 160 y desaprobo es: "+nombreHombreBajo+"<br>"

   document.write(mensaje);

	
}	
