// get the weather type and image element
const typeElem = document.getElementById('type');
const type = typeElem.textContent.toLowerCase();

const weatherImg = document.getElementById('weather_photo');

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