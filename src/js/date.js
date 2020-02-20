export default function date(timeZone) {
    let time = timeZone;
    let date = new Date();
    let options = { timeZone: time, weekday: 'short', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    let day = date.getDay();
    let month = date.getMonth();

    switch (day) {
        case 1: day = "Пон";
            break;
        case 2: day = "Вто";
            break;
        case 3: day = "Сре";
            break;
        case 4: day = "Чет";
            break;
        case 5: day = "Пят";
            break;
        case 6: day = "Суб";
            break;
        case 0: day = "Вос";
            break;
    }
    switch (month) {
        case 0: month = "Января";
            break;
        case 1: month = "Февраля";
            break;
        case 2: month = "Марта";
            break;
        case 3: month = "Апреля";
            break;
        case 4: month = "Мая";
            break;
        case 5: month = "Июня";
            break;
        case 6: month = "Июля";
            break;
        case 7: month = "Августа";
            break;
        case 8: month = "Сентября";
            break;
        case 9: month = "Октября";
            break;
        case 10: month = "Ноября";
            break;
        case 11: month = "Декабря";
            break;
    }

    date = date.toLocaleString('en-GB', options);
    let dateArray = date.split(" ");

    document.querySelector('.main-time').innerHTML = `${day}, ${dateArray[1]} ${month}, ${dateArray[3]} `;
}