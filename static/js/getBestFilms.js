

import { displayToast } from './displayToast.js';

export function getBestFilms() {
        fetch('http://localhost:8000/api/v1/titles/?page_size=6&sort_by=-avg_vote') // change to your actual local URL and port
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // or response.text(), depending on what your server returns
        })
        .then(data => {
            console.log(data);
            const container = document.getElementById('bestFilms');

            const films = container.querySelectorAll('.film');
            data.results.forEach((item, index) => {
                const img = films[index].querySelector('img');
                const title = films[index].querySelector('.title-film');

                img.src = item.image_url;
                title.innerHTML = `<h6>${item.title}</h6>`;
            });
        })
        .catch(error => {
            console.log(error);
            displayToast(error.message);
        });
}