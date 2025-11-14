// get the weather type and image element
const typeElem = document.getElementById('type');
const type = typeElem.textContent.toLowerCase();

const weatherImg = document.getElementById('weather_photo');
if(!weatherImg.src){
    switch (type) {
        case 'sunny':
            weatherImg.src = './images/weather/sunny.webp';
            break;
        case 'rainy':
            weatherImg.src = './images/weather/rainy.webp';
            break;
        case 'cloudy':
            weatherImg.src = './images/weather/cloudy.webp';
            break;
        case 'snowy':
            weatherImg.src = './images/weather/snowy.webp' ;
            break;
        case 'tornado warning':
            weatherImg.src = './images/weather/tornado.webp';
            break;
        default:
            weatherImg.src = './images/weather/default.webp';
            break;
    }
}

//get and display windchill

const windspeed = parseFloat(document.getElementById('Windspeed').textContent);
const temperature = parseFloat(document.getElementById('avgTemp').textContent);

const windchillElem = document.getElementById('Windchill');
if (temperature <= 50 && windspeed >= 3) {
    const windChill =
        35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);

    windchillElem.textContent = Math.round(windChill) + "°F";
} else {
    windchillElem.textContent = "N/A";
}
