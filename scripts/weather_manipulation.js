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

const windspeed = document.getElementById('Windspeed')
const temprature = document.getElementById('avgTemp').innerText
const windchillselect= document.getElementById('Windchill')
windchillselect.innerText = Math.round(35.74 + 0.6215 * temprature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temprature * Math.pow(windspeed, 0.16));