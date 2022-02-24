/*
Alumno: Pablo Alberto Cugliari
Division: B

1.	Se ingresan 5 importes, marca del producto y pais de origen (China, Uruguar o Paraguay).
Calcular y mostrar:
a.	Minimo importe con su pais
b.	Maximo importe con su marca
c.	Promedio importe
d.	Cantidad de productos de China
e.	Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
*/

function mostrar()
{
    var importe;
    var marca;
    var pais;
    var minimoImporte;
    var minimoPais;
    var maximoImporte;
    var maximoMarca;
    var cantidadChina=0;
    var esPrimero = true;
    var mensaje="";
    var promedio;
    var importeTotal=0;
    var descuento;

    for(var i=0;i<5;i++){
        importe=prompt("Ingrese el importe");
        while(importe<0){
            importe=prompt("Error en importe,Ingrese el importe");
        }
        
        marca = prompt("Ingrese marca del producto");
        
        pais=prompt("Ingrese el pais (China,Uruguay,Paraguay)");
        while(pais != "China" && pais != "Uruguay" && pais != "Paraguay"){
            pais=prompt("Error en pais,Ingrese el pais");
        }

        importe = parseFloat(importe);
        console.log(importe,marca,pais);
        
        if(esPrimero){
            minimoImporte = importe;
            maximoImporte = importe;
            minimoPais = pais;
            maximoMarca = marca;
            esPrimero = false;
        }else if (importe < minimoImporte){
            minimoImporte = importe;
            minimoPais = pais;
        }else if(importe > maximoImporte){
            maximoImporte = importe;
            maximoMarca = marca;
        }

        if(pais=="China"){
            cantidadChina ++;
        }

        importeTotal += importe;
    }

    promedio = importeTotal/5;
    descuento=maximoImporte*0.9;

    mensaje+="a) Minimo importe es: "+minimoImporte+" su pais fue: "+minimoPais+"<br>";
    mensaje+="b) Maximo importe es: "+maximoImporte+" su marca fue: "+maximoMarca+"<br>";
    mensaje+="c) El promedio de importe es: "+promedio+"<br>"
    mensaje+="d) Cantidad de productos de China: "+cantidadChina+"<br>";
    mensaje+="e) El descuento 10% sobre el maximo es: "+descuento;

    document.write(mensaje);
}
