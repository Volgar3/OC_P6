import { getBestFilms } from "./getBestFilms.js";
import { getCategoryFilms } from './getCategoryFilms.js';

document.addEventListener("DOMContentLoaded", function () {
    getBestFilms(null, 'bestFilms');
    getBestFilms('mystery', 'mysteryFilms');
    getBestFilms('drama', 'dramaFilms');

    getCategoryFilms('categorySelector', 'categoryFilms');
    getCategoryFilms('secondCategorySelector', 'secondCategoryFilms');

    const seeMoreBtn = this.documentElement.querySelector('#see-more-best');
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', () => {

            let nextDivs = [];
            let sibling = this.activeElement.nextElementSibling;
            console.log(this.activeElement.nextElementSibling);

            // Cache le bouton Voir plus
            this.activeElement.classList.remove('d-md-inline');
            this.activeElement.classList.add('d-md-none');

// On retire la visibilité des deux images
            while (sibling && nextDivs.length < 2) {
                if (sibling.tagName.toLowerCase() === 'div') {
                    nextDivs.push(sibling);
                }
                sibling = sibling.nextElementSibling;
            }

            nextDivs.forEach((div, index) => {
                div.classList.remove('d-none');
            });


            // On affiche le bouton "Voir moins"
            sibling.classList.remove('d-md-none');
            sibling.classList.add('d-md-inline');
        });
    }


    document.querySelectorAll('a[data-bs-toggle="modal"]').forEach(img => {
        img.addEventListener('click', function () {
            const id = this.getAttribute('id').split('-')[1];
            const modalTitle = document.querySelector('.modal-title');
            const modalReleaseDate = document.querySelector('#modal-release');
            const modalImage = document.querySelector('#modal-image');
            const modalDescription = document.querySelector('.modal-description > p');
            const modalGenre = document.querySelector('#modal-genre');
            const modalDuration = document.querySelector('#modal-duration');
            const modalDirector = document.querySelector('#modal-director');
            const modalBoxOffice = document.querySelector('#modal-boxOffice');
            const modalIMBD = document.querySelector('#modal-IMDB');
            const modalActors = document.querySelector('#modal-actors');


            fetch(`http://localhost:8000/api/v1/titles/${id}`).then(
                response => {
                    return response.json();
                }
            ).then(
                data => {
                    const releaseYear = data.date_published.split('-')[0];

                    modalTitle.textContent = data.title;
                    modalImage.src = data.image_url;
                    modalDescription.textContent = data.long_description;
                    modalGenre.innerHTML = `<strong>Genres :</strong> ${data.genres.join(", ")}`;
                    modalDuration.innerHTML = `<strong>Durée :</strong> ${data.duration} minutes`;
                    modalDirector.innerHTML = `<strong>Réalisateur :</strong> ${data.directors}`;
                    modalBoxOffice.innerHTML = `<strong>Recettes au box-office : </strong>${data.worldwide_gross_income ?? "Unknown"}`;
                    modalIMBD.innerHTML = `<strong>Score IMDB :</strong> ${data.avg_vote} /10`;
                    modalActors.innerHTML = `<u>Acteurs et actrices :</u>  ${data.actors}`;
                    modalReleaseDate.innerHTML =`<u>Sortie en :</u>  ${releaseYear}`;
                }
            );
        });
    });
});

