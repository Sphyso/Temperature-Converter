//On calculate click
document.getElementById('converter-form').addEventListener('submit', function(e){
    //Hide results & show loader
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    setTimeout(convertTemperature, 2000);

    e.preventDefault();
});


//Convert Temperature (Degrees to Fahrenheit)
function convertTemperature(){

    const degrees = document.getElementById('degrees');
    const fahrenheit = document.getElementById('fahrenheit');

    const degreesValue = parseFloat(degrees.value);

    //Calculate fahrenheit
    const fahrenheitValue = (degreesValue * 1.8) + 32;

    if(isFinite(fahrenheitValue)) {
        fahrenheit.value = fahrenheitValue.toFixed(2);
        console.log(fahrenheitValue);
        //Show results & hide loader
        document.getElementById('results').style.display = 'block';
        
        document.getElementById('loading').style.display = 'none';
    }

    
}