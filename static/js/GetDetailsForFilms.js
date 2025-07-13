import { displayToast } from './displayToast.js';

export let bestFilmsDetails = [];

export function getDetailsForBestFilms() {
    fetch('http://localhost:8000/api/v1/titles/?page_size=6&sort_by=-avg_vote')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des meilleurs films');
            }
            return response.json();
        })
        .then(data => {
            const filmUrls = data.results.map(film => film.url);

            // Pour chaque URL, faire un fetch
            const detailFetches = filmUrls.map(url =>
                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Erreur de récupération pour ${url}`);
                        }
                        return response.json();
                    })
            );

            // Promise.all attend que toutes les requêtes soient terminées
            return Promise.all(detailFetches);
        })
        .then(filmDetails => {
            console.log("Détails complets des films :", filmDetails);
        })
        .catch(error => {
            console.error(error);
            displayToast(error.message);
        });
}