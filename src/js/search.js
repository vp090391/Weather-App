import {position} from "./position";

export default function search(){
    const searchField = document.getElementById('main-search-searchField').value;
    if (!searchField) {alert("Введите место, в котором хотите узнать погоду")}
    position(searchField);
}
