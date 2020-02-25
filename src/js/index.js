import '../css/style.css';
import '../css/style.scss';
import search from './search';
import {positionCurrent} from './position';
import {mapPosition} from './map';
import date from "./date";
import loadImage from "./loadImage";

mapPosition();
setTimeout(positionCurrent,2000);
setInterval(date, 60000);

document.getElementById('main-search-searchButton').addEventListener('click', () =>{
    search()});

document.getElementById('main-search-searchField').addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === 'Enter') {search();}
});

document.getElementById('main-search-refresh-refreshButton').addEventListener('click', () =>{
    loadImage();
});