import date from "./date";

export default function weather(latitude, longitude){
    const corsPolicy = 'https://cors-anywhere.herokuapp.com/';
    const source = `${corsPolicy}https://api.darksky.net/forecast/5dad61ce95b95b9d4b1ccdcef92e8f92/${latitude},${longitude}?units=si&lang=ru`;
    fetch(source)
        .then(res => res.json())
        .then(data => {
            let timeZone = data.timezone;
            date(timeZone);

            // Установка погоды сегодня
            let curentTemperature = Math.round(data.currently.temperature);
            document.querySelector('.main-weather-current-temperature').innerHTML = `${curentTemperature}°С`;

            document.querySelector(".main-weather-current-summary").innerHTML = data.currently.summary;

            let apparentTemperature = Math.round(data.currently.apparentTemperature);
            document.querySelector('.main-weather-current-feelsLike').innerHTML = `Ощущается как: ${apparentTemperature}°С`;

            let wind = Math.round(data.currently.windSpeed);
            document.querySelector('.main-weather-current-wind').innerHTML = `Ветер: ${wind}м/с`;

            let humidity = Math.round(data.currently.humidity*100);
            document.querySelector('.main-weather-current-humidity').innerHTML = `Влажность: ${humidity}%`;

            let currentIcon = require(`../assets/icons/${data.currently.icon}.png`);
            document.querySelector('.main-weather-current-img').src = `${currentIcon}`;


            let day = document.querySelector('.main-time').innerHTML.slice(0,3);
            let futureDays = [];
            switch (day) {
                case 'Суб': futureDays[0] = 'Воскресение'; futureDays[1] = 'Понедельник'; futureDays[2] = 'Вторник';
                    break;
                case 'Вос': futureDays[0] = 'Понедельник'; futureDays[1] = 'Вторник'; futureDays[2] = 'Среда';
                    break;
                case 'Пон': futureDays[0] = 'Вторник'; futureDays[1] = 'Среда'; futureDays[2] = 'Четверг';
                    break;
                case 'Вто': futureDays[0] = 'Среда'; futureDays[1] = 'Четверг'; futureDays[2] = 'Пятница';
                    break;
                case 'Сре': futureDays[0] = 'Четверг'; futureDays[1] = 'Пятница'; futureDays[2] = 'Воскресение';
                    break;
                case 'Чет': futureDays[0] = 'Пятница'; futureDays[1] = 'Суббота'; futureDays[2] = 'Воскресение';
                    break;
                case 'Пят': futureDays[0] = 'Суббота'; futureDays[1] = 'Воскресение'; futureDays[2] = 'Понедельник';
                    break;
            }

            // Установка погоды завтра
            let temperatureFirstDay = Math.round((data.daily.data[0].temperatureMax + data.daily.data[0].temperatureMin)/2);
            document.querySelector('.main-weather-forecast-first-day').innerHTML = `${futureDays[0]}`;
            document.querySelector('.main-weather-forecast-first-temperature').innerHTML = `${temperatureFirstDay}°С`;
            let firstDayIcon = require(`../assets/icons/${data.daily.data[0].icon}.png`);
            document.querySelector('.main-weather-forecast-first-img').src = `${firstDayIcon}`;

            // Установка погоды послезавтра
            let temperatureSecondDay = Math.round((data.daily.data[1].temperatureMax + data.daily.data[1].temperatureMin)/2);
            document.querySelector('.main-weather-forecast-second-day').innerHTML = `${futureDays[1]}`;
            document.querySelector('.main-weather-forecast-second-temperature').innerHTML = `${temperatureSecondDay}°С`;
            let secondDayIcon = require(`../assets/icons/${data.daily.data[1].icon}.png`);
            document.querySelector('.main-weather-forecast-second-img').src = `${secondDayIcon}`;

            // Установка погоды через 2 дня
            let temperatureThirdDay = Math.round((data.daily.data[2].temperatureMax + data.daily.data[2].temperatureMin)/2);
            document.querySelector('.main-weather-forecast-third-day').innerHTML = `${futureDays[2]}`;
            document.querySelector('.main-weather-forecast-third-temperature').innerHTML = `${temperatureThirdDay}°С`;
            let thirdDayIcon = require(`../assets/icons/${data.daily.data[2].icon}.png`);
            document.querySelector('.main-weather-forecast-third-img').src = `${thirdDayIcon}`;
        });
}

