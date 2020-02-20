import {position} from "./position";

export default function search(){
    const searchField = document.getElementById('main-search-searchField').value;
    if (!searchField) {alert("Enter the place where you want to know the weather")}
    position(searchField);
}
