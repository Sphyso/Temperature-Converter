//On calculate click
document.getElementById('converter-form').addEventListener('submit', convertTemperature);


//Convert Temperature (Degrees to Fahrenheit)
function convertTemperature(e){

    const degrees = document.getElementById('degrees');
    const fahrenheit = document.getElementById('fahrenheit');

    const degreesValue = parseFloat(degrees.value);

    //Calculate fahrenheit
    const fahrenheitValue = (degreesValue * 1.8) + 32;

    if(isFinite(fahrenheitValue)) {
        fahrenheit.value = fahrenheitValue.toFixed(2);
        console.log(fahrenheitValue);
        document.getElementById('results').style.display = 'block';

        document.getElementById('loading').style.display = 'block';
    }

    e.preventDefault();
}