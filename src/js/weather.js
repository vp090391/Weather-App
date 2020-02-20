import date from "./date";

export default function weather(latitude, longitude){
    const corsPolicy = 'https://cors-anywhere.herokuapp.com/';
    const source = `${corsPolicy}https://api.darksky.net/forecast/5dad61ce95b95b9d4b1ccdcef92e8f92/${latitude},${longitude}?units=si&lang=en`;
    fetch(source)
        .then(res => res.json())
        .then(data => {
            let timeZone = data.timezone;
            date(timeZone);

            // Weather forecast for today
            let curentTemperature = Math.round(data.currently.temperature);
            document.querySelector('.main-weather-current-temperature').innerHTML = `${curentTemperature}°С`;

            document.querySelector(".main-weather-current-summary").innerHTML = data.currently.summary;

            let apparentTemperature = Math.round(data.currently.apparentTemperature);
            document.querySelector('.main-weather-current-feelsLike').innerHTML = `Feels like: ${apparentTemperature} °С`;

            let wind = Math.round(data.currently.windSpeed);
            document.querySelector('.main-weather-current-wind').innerHTML = `Wind: ${wind} m/s`;

            let humidity = Math.round(data.currently.humidity*100);
            document.querySelector('.main-weather-current-humidity').innerHTML = `Humidity: ${humidity} %`;

            let currentIcon = require(`../assets/icons/${data.currently.icon}.png`);
            document.querySelector('.main-weather-current-img').src = `${currentIcon}`;


            let day = document.querySelector('.main-time').innerHTML.slice(0,3);
            let futureDays = [];
            switch (day) {
                case 'Sat': futureDays[0] = 'Sunday'; futureDays[1] = 'Monday'; futureDays[2] = 'Tuesday';
                    break;
                case 'Sun': futureDays[0] = 'Monday'; futureDays[1] = 'Tuesday'; futureDays[2] = 'Wednesday';
                    break;
                case 'Mon': futureDays[0] = 'Tuesday'; futureDays[1] = 'Wednesday'; futureDays[2] = 'Thursday';
                    break;
                case 'Tue': futureDays[0] = 'Wednesday'; futureDays[1] = 'Thursday'; futureDays[2] = 'Friday';
                    break;
                case 'Wed': futureDays[0] = 'Thursday'; futureDays[1] = 'Friday'; futureDays[2] = 'Saturday';
                    break;
                case 'Thu': futureDays[0] = 'Friday'; futureDays[1] = 'Saturday'; futureDays[2] = 'Sunday';
                    break;
                case 'Fri': futureDays[0] = 'Saturday'; futureDays[1] = 'Sunday'; futureDays[2] = 'Monday';
                    break;
            }

            // Weather forecast tomorrow
            let temperatureFirstDay = Math.round((data.daily.data[0].temperatureMax + data.daily.data[0].temperatureMin)/2);
            document.querySelector('.main-weather-forecast-first-day').innerHTML = `${futureDays[0]}`;
            document.querySelector('.main-weather-forecast-first-temperature').innerHTML = `${temperatureFirstDay}°С`;
            let firstDayIcon = require(`../assets/icons/${data.daily.data[0].icon}.png`);
            document.querySelector('.main-weather-forecast-first-img').src = `${firstDayIcon}`;

            // Weather forecast day after tomorrow
            let temperatureSecondDay = Math.round((data.daily.data[1].temperatureMax + data.daily.data[1].temperatureMin)/2);
            document.querySelector('.main-weather-forecast-second-day').innerHTML = `${futureDays[1]}`;
            document.querySelector('.main-weather-forecast-second-temperature').innerHTML = `${temperatureSecondDay}°С`;
            let secondDayIcon = require(`../assets/icons/${data.daily.data[1].icon}.png`);
            document.querySelector('.main-weather-forecast-second-img').src = `${secondDayIcon}`;

            // Weather forecast in 2 days
            let temperatureThirdDay = Math.round((data.daily.data[2].temperatureMax + data.daily.data[2].temperatureMin)/2);
            document.querySelector('.main-weather-forecast-third-day').innerHTML = `${futureDays[2]}`;
            document.querySelector('.main-weather-forecast-third-temperature').innerHTML = `${temperatureThirdDay}°С`;
            let thirdDayIcon = require(`../assets/icons/${data.daily.data[2].icon}.png`);
            document.querySelector('.main-weather-forecast-third-img').src = `${thirdDayIcon}`;
        });
}

