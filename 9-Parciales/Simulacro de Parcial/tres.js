/*
Alumno: Pablo Cugliari
Division: B

3.	De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)

El programa debera mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.

Sabiendo que: 

   *Si no tiene hijos no le corresponde asignación familiar 
   *Si tiene un hijo le corresponde 5000
   *Si tiene dos hijos le corresponde 8000 por sus dos hijos
   *Y si tiene más de dos hijos le corresponde 10000

d. Mostrar el total de dinero que debera pagar la PYME en concepto de asignaciones

*/

function mostrar()
{
   var nombre;
   var apellido;
   var genero;
   var cantidadHijos;
   var cantidadFemenino=0;
   var cantidadMasculino=0;
   var cantidadNoBinaria =0;
   var maximoNombreNoBinario;
   var maximoHijosNoBinario;
   var esPrimero = true;
   var nombreSinHijos;
   var apellidoSinHijos;
   var mensaje="";
   var porcentajeMasculino;
   var porcentajeFemenino;
   var porcentajeNoBinario;
   var totalDinero=0;
   var primeroSinHijos = true;

   for(var i=0;i<10;i++){
      nombre = prompt ("Ingrese el nombre");
      apellido = prompt ("Ingrese el apellido");
     
      genero = prompt ("Ingrese el genero (Femenino, Masculino, No Binario)");
      while(genero != "Femenino" && genero != "Masculino" && genero != "No Binario"){
         genero = prompt ("Error en genero, Ingrese el genero (Femenino, Masculino, No Binario)");
      }
      
      cantidadHijos = prompt ("Ingrese la cantidad de hijos");
      while(cantidadHijos < 0){
         cantidadHijos = prompt ("Error ,Ingrese la cantidad de hijos positiva");
      }

      cantidadHijos = parseInt(cantidadHijos);

      if(cantidadHijos==0 && primeroSinHijos){
         nombreSinHijos=nombre;
         apellidoSinHijos=apellido;
         primeroSinHijos = false;
      }else if(cantidadHijos==1){
         totalDinero += 5000;
      }else if(cantidadHijos==2){
         totalDinero += 8000;
      }else{
         totalDinero += 10000;
      }

      if(genero == "No Binario"){
         if(cantidadHijos > maximoHijosNoBinario || esPrimero){
            maximoNombreNoBinario = nombre;
            maximoHijosNoBinario = cantidadHijos;
            esPrimero = false;
         }
         cantidadNoBinaria++;
      }else if (genero == "Masculino"){
         cantidadMasculino++;
      }else{
         cantidadFemenino++;
      }

      //console.log(nombre,apellido,genero,cantidadHijos)

   }

   porcentajeMasculino=(cantidadMasculino*100)/10;
   porcentajeFemenino=(cantidadFemenino*100)/10;
   porcentajeNoBinario=(cantidadNoBinaria*100)/10;

   mensaje+="a)Porcentaje de empleados por cada genero <br>"
   mensaje+="  -Porcentaje Masculino: "+porcentajeMasculino+"% <br>"
   mensaje+="  -Porcentaje Femenino: "+porcentajeFemenino+"% <br>"
   mensaje+="  -Porcentaje No Binario: "+porcentajeNoBinario+"% <br>"
   mensaje+="b) El nombre del empleado No Binario con mas cantidad de hijos es: "+maximoNombreNoBinario+"<br>";
   mensaje+="c) Nombre y apellido del primer empleado que no tiene hijos son: "+nombreSinHijos+","+apellidoSinHijos+"<br>";
   mensaje+="d) El total de dinero que debera pagar la PYME es: $"+totalDinero;

   document.write(mensaje);

	
}	
