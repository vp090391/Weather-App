export default function date(timeZone) {
    let time = timeZone;
    let date = new Date();
    let options = { timeZone: time, weekday: 'short', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    let day = date.getDay();
    let month = date.getMonth();

    switch (day) {
        case 1: day = "Mon";
            break;
        case 2: day = "Tue";
            break;
        case 3: day = "Wed";
            break;
        case 4: day = "Thu";
            break;
        case 5: day = "Fri";
            break;
        case 6: day = "Sat";
            break;
        case 0: day = "Sun";
            break;
    }
    switch (month) {
        case 0: month = "January";
            break;
        case 1: month = "February";
            break;
        case 2: month = "March";
            break;
        case 3: month = "April";
            break;
        case 4: month = "May";
            break;
        case 5: month = "June";
            break;
        case 6: month = "July";
            break;
        case 7: month = "August";
            break;
        case 8: month = "September";
            break;
        case 9: month = "October";
            break;
        case 10: month = "November";
            break;
        case 11: month = "December";
            break;
    }

    date = date.toLocaleString('en-GB', options);
    let dateArray = date.split(" ");

    document.querySelector('.main-time').innerHTML = `${day}, ${dateArray[1]} ${month}, ${dateArray[3]} `;
}