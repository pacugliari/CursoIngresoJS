/*

Alumno: Pablo Alberto Cugliari
Division: B
TP: 3

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //FORMULA (Fahrenheit  − 32) × 5/9 = Centigrados
    //Declaracion de variables
    var temperaturaFahrenheit;
    var temperaturaCentigrados;

    //Obtencion de datos
    temperaturaFahrenheit = txtIdTemperatura.value;

    //Parseo a entero
    temperaturaFahrenheit = parseFloat(temperaturaFahrenheit);

    //Transformo Fahrenheit a Centigrados
    temperaturaCentigrados = (temperaturaFahrenheit-32)*(5/9);

    //Muestro la temperatura transformada
    alert (temperaturaFahrenheit + " Fahrenheit son " + temperaturaCentigrados.toFixed(2) + " centígrados");

	
}

function CentigradosFahrenheit () 
{
    //FORMULA temperaturaFahrenheit  = (temperaturaCentigrados*9/5)+32
    //Declaracion de variables
    var temperaturaFahrenheit;
    var temperaturaCentigrados;

    //Obtencion de datos
    temperaturaCentigrados = txtIdTemperatura.value;

    //Parseo a entero
    temperaturaCentigrados = parseFloat(temperaturaCentigrados);

    //Transformo Fahrenheit a Centigrados
    temperaturaFahrenheit = (temperaturaCentigrados*9/5)+32;

    //Muestro la temperatura transformada
    alert (temperaturaCentigrados + " Centígrados son " + temperaturaFahrenheit.toFixed(2) + " Fahrenheit");
	
}
