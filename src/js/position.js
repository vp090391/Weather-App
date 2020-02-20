import {mapPosition} from "./map";
import weather from "./weather";
import loadImage from "./loadImage";

export function positionCurrent() {
    fetch('https://ipinfo.io/json?token=425c34789b0005')
        .then(res => res.json())
        .then(data => {
            let searchField = data.city;
            position(searchField);
        });
}

export function position(searchField) {
    fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=a77fffe6-e143-4f4c-b9c0-e5a4f98c6a07\n&format=json&geocode=${searchField}`)
        .then(res => res.json())
        .then(async data => {
            let coordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
            let coordinatesArray = coordinates.split(" ");

            let latitude = await coordinatesArray[1].slice(0,6);
            let longitude = await coordinatesArray[0].slice(0,6);

            weather(latitude, longitude);
            mapPosition(latitude,longitude);

            document.getElementById('main-geoPosition').innerHTML = data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text;

            document.querySelector(".main-coordinates-latitude").innerHTML = `Широта: ${latitude}`;
            document.querySelector(".main-coordinates-longitude").innerHTML = `Долгота: ${longitude}`;
        });

    fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=a77fffe6-e143-4f4c-b9c0-e5a4f98c6a07\n&format=json&geocode=${searchField}&lang=en_US`)
        .then(res => res.json())
        .then(data => {
            // Получаем город для поиска фонового изображения
            let city = data.response.GeoObjectCollection.featureMember[0].GeoObject.name;
            if (!document.getElementById('main-search-searchField').value) {document.getElementById('main-search-searchField').value = city;}
            setTimeout(loadImage(city), 2000)
        });
}

