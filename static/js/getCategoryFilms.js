

import { displayToast } from './displayToast.js';

export function getCategoryFilms() {

    const categorySelector = document.getElementById('categorySelector');
    const dynamicImg = document.getElementById('dynamicImg');

    categorySelector.addEventListener('change', function () {
        const selectedGenre = categorySelector.value; // var me permettant de savoir quel est le genre choisi
        fetch(`http://localhost:8000/api/v1/titles/?genre=${selectedGenre}&sort_by=-avg_vote`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.result.legnth > 0) {
                    console.log("check voir si ça marche :", data.results[0]);
                    dynamicImg.src = data.result[0].image_url;
                    dynamicImg.alt = data.result[0].title;

                } else {
                    dynamicImg.src = ''
                    dynamicImg.alt = 'Aucun film trouvé';
                }
            })
            .catch(error => {
                console.log(error);
                displayToast(error.message);
            });
    });
}