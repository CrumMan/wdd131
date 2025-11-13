// get the weather type and image element
const typeElem = document.getElementById('type');
const type = typeElem.textContent.toLowerCase();

const weatherImg = document.getElementById('weather_photo');

switch (type) {
    case 'sunny':
        weatherImg.src = '/images/weather/sunny.jpg';
        break;
    case 'rainy':
        weatherImg.src = '/images/weather/rainy.jpg';
        break;
    case 'cloudy':
        weatherImg.src = '/images/weather/cloudy.jpg';
        break;
    case 'snowy':
        weatherImg.src = '/images/weather/snowy.jpg' 
    case 'tornado warning':
        weatherImg.src = '/images/weather/tornado.jpg'
        break;
    default:
        weatherImg.src = '/images/weather/default.jpg';
        break;
}