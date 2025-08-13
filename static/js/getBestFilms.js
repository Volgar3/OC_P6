

import { displayToast } from './displayToast.js';

export function getBestFilms(category, elementId) {
        let url = null;
        
        if (category) {
            url = `http://localhost:8000/api/v1/titles/?genre=${category}&page_size=6&sort_by=-avg_vote`
        } else {
            url = 'http://localhost:8000/api/v1/titles/?page_size=6&sort_by=-avg_vote';
        }
        fetch(url) // change to your actual local URL and port
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // or response.text(), depending on what your server returns
        })
        .then(data => {
            const container = document.getElementById(elementId);

            const films = container.querySelectorAll('.film-container');
            data.results.forEach((item, index) => {
                const img = films[index].querySelector('img');
                const titleElement = films[index].querySelector('.film-title');
                const button = films[index].querySelector('a');

                img.src = item.image_url;
                img.setAttribute('alt', item.title);
                titleElement.textContent = item.title;
                button.id = `film-${item.id}`;
            });
        })
        .catch(error => {
            console.log(error);
            displayToast(error.message);
        });
}