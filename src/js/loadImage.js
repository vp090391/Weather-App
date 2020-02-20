export default function loadImage (searchField) {
    let citySave = document.getElementById('main-search-searchField').value;
    if (searchField) {
        let url = `https://api.unsplash.com/photos/random?query=${searchField}&client_id=a85731e056bddacdfa28e14195f55378a793e7053601f0b195faeab10b0178c8`;
        fetch(url)
            .then(res => res.json())
            .then(data => data.urls.small )
            .then(link => {
                document.querySelector('.main').style.backgroundImage = `url('${link}')`;
            });
    } else {
        fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=a77fffe6-e143-4f4c-b9c0-e5a4f98c6a07\n&format=json&geocode=${citySave}&lang=en_US`)
            .then(res => res.json())
            .then(data => {
                // Получаем город для поиска фонового изображения
                let city = data.response.GeoObjectCollection.featureMember[0].GeoObject.name;
                let url = `https://api.unsplash.com/photos/random?query=${city}&client_id=a85731e056bddacdfa28e14195f55378a793e7053601f0b195faeab10b0178c8`;
                fetch(url)
                    .then(res => res.json())
                    .then(data => data.urls.small )
                    .then(link => {
                        document.querySelector('.main').style.backgroundImage = `url('${link}')`;
                    });
            });
    }




}