/*

Alumno: Pablo Cugliari
Division: B

2.	La empresa SILKEY necesita liquidar las comisiones de sus 3 vendedores para la zona sur de GBA. 

Se cargan las planillas de ventas que poseen los siguientes datos (No sabemos cuantas planillas 
hay):

*Nombre de vendedor (Juan, Pedro o Maria)
*Importe de la venta (numero positivo NO mayor que 10000)

Al terminar de cargar las planillas se debe calcular el total de la comision por vendedor:
Si el vendedor logro recaudar en sus ventas un importe mayor o igual a $500000 obtendra una 
comisión del 10% sobre ese total.
De no alcanzar esta cifra, su comision sera del 5%.
Mostrar:
a. Importe total de ventas, cantidad de ventas y comision. (Por cada vendedor)
b. El nombre del vendedor que mas dinero recaudo en comisiones

*/

function mostrar()
{
    var nombre;
    var importe;
    var respuesta="si";
    var totalJuan=0;
    var totalPedro=0;
    var totalMaria=0;
    var cantidadVentasJuan=0;
    var cantidadVentasPedro=0;
    var cantidadVentasMaria=0;
    var comisionJuan;
    var comisionPedro;
    var comisionMaria;
    var mensaje="";
    var nombreMasRecaudo;


    while(respuesta=="si"){
        nombre = prompt("Ingrese el nombre: (Juan, Pedro o Maria)");
        while(nombre != "Juan" && nombre != "Pedro" && nombre != "Maria"){
            nombre = prompt("Error en nombre, Ingrese el nombre: (Juan, Pedro o Maria)");
        }

        importe = prompt("Ingrese el importe (numero positivo NO mayor que 10000)");
        while(importe < 0 || importe > 10000){
            importe = prompt("Error en importe, Ingrese el importe (numero positivo NO mayor que 10000)");
        }

        importe = parseFloat(importe);
        console.log(nombre,importe)

        do{
            respuesta = prompt("Desea seguir ingresando planillas ? si/no");
        }while(respuesta != "si" && respuesta != "no");

        switch(nombre){
            case "Juan":
                totalJuan += importe;
                cantidadVentasJuan++;
            break;
            case "Maria":
                totalMaria += importe;
                cantidadVentasMaria++;
            break;
            case "Pedro":
                totalPedro += importe;
                cantidadVentasPedro++;
            break;
        }
    }

    if(totalJuan >= 500000){
        comisionJuan=totalJuan*0.1;
    }else{
        comisionJuan=totalJuan*0.05;
    }

    if(totalMaria >= 500000){
        comisionMaria=totalMaria*0.1;
    }else{
        comisionMaria=totalMaria*0.05;
    }

    if(totalPedro >= 500000){
        comisionPedro=totalPedro*0.1;
    }else{
        comisionPedro=totalPedro*0.05;
    }

    if(comisionJuan > comisionMaria && comisionJuan > comisionPedro){
        nombreMasRecaudo="Juan";
    }else if(comisionMaria > comisionJuan && comisionMaria > comisionPedro){
        nombreMasRecaudo="Maria";
    }else{
        nombreMasRecaudo="Pedro"
    }

    mensaje+="a) Importe total,cantidad de ventas y comision <br>";
    mensaje+="  -Juan, Importe: "+totalJuan+", Cantidad ventas: "+cantidadVentasJuan+", Comision: "+comisionJuan+"<br>";
    mensaje+="  -Maria, Importe: "+totalMaria+", Cantidad ventas: "+cantidadVentasMaria+", Comision: "+comisionMaria+"<br>";
    mensaje+="  -Pedro, Importe: "+totalPedro+", Cantidad ventas: "+cantidadVentasPedro+", Comision: "+comisionPedro+"<br>";
    mensaje+="b) El nombre del vendedor que mas dinero recaudo en comisiones es: "+nombreMasRecaudo+"<br>";

    document.write(mensaje);

}
