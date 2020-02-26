export default function loadImage (searchField) {
    if (searchField) {
        const url = `https://api.unsplash.com/photos/random?query=${searchField}&client_id=E93ah58UBXrmi4s9gDj6fYnJ_U_jdUvF_jpZouatjE0`;
        fetch(url)
            .then(res => res.json())
            .then(data => data.urls.regular )
            .then(link => {
                document.querySelector('.body').style.backgroundImage = `url('${link}')`;
            });
    } else {
        let citySave = document.getElementById("main-geoPosition").innerHTML;

        fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=a77fffe6-e143-4f4c-b9c0-e5a4f98c6a07\n&format=json&geocode=${citySave}&lang=en_US`)
            .then(res => res.json())
            .then(data => {
                // Take city for background image
                const city = data.response.GeoObjectCollection.featureMember[0].GeoObject.name;
                const url = `https://api.unsplash.com/photos/random?query=${city}&client_id=E93ah58UBXrmi4s9gDj6fYnJ_U_jdUvF_jpZouatjE0`;
                fetch(url)
                    .then(res => res.json())
                    .then(info => info.urls.regular )
                    .then(link => {
                        document.querySelector('.body').style.backgroundImage = `url('${link}')`;
                    });
            });
    }
}