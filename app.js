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
    } else {
        showError('Enter or check your number');
    }   
}

function showError(error){
    //Hide results and loader
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'none';

    //Show error message
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);
    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}