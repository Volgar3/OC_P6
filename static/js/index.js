import { getBestFilms } from "./getBestFilms.js";
import { getDetailsForBestFilms, bestFilmsDetails } from "./GetDetailsForFilms.js";

document.addEventListener("DOMContentLoaded", async function () {
    await getBestFilms();
    await getDetailsForBestFilms(); // <== on attend la fin du chargement des détails

    // Ajouter les événements après que les données soient disponibles
    document.querySelectorAll('a.details-button').forEach((btn, index) => {
        btn.addEventListener('click', function () {
            const film = bestFilmsDetails[index]; // <== on prend le bon film selon l'index

            if (film) {
                const modalBody = document.querySelector('.modal-body');
                modalBody.innerHTML = `
                    <h5>${film.title}</h5>
                    <p><strong>Genres :</strong> ${film.genres.join(', ')}</p>
                    <p><strong>Date de sortie :</strong> ${film.date_published}</p>
                    <p><strong>Note IMDb :</strong> ${film.imdb_score}</p>
                    <p><strong>Résumé :</strong> ${film.description}</p>
                `;
            }
        });
    });
});