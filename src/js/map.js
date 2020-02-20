let map;

export function mapPosition(latitude, longitude) {
    if (latitude) {map.setCenter([latitude, longitude]);
    } else {ymaps.ready( function () {
        map = new ymaps.Map("map", {
            center: [55.753215, 37.617635],
            zoom: 10
        });
        // Подключаем поисковые подсказки к полю ввода.
        var suggestView = new ymaps.SuggestView('main-search-searchField');
    });
    }
}


