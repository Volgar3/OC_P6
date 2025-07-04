

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

            const images = container.querySelectorAll('img');
            let index = 0;
            data.results.forEach(item => {
                images[index].src = item.image_url;
                index++;
            });
        })
        .catch(error => {
            console.log(error);
            displayToast(error.message);
        });
}