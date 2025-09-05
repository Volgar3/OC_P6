import { getBestFilms } from "./getBestFilms.js";
import { getCategoryFilms } from './getCategoryFilms.js';
import { initBtnController } from './btnController.js';

document.addEventListener("DOMContentLoaded", function () {

    // Init getBestFilms    
    getBestFilms(null, 'bestFilms');
    getBestFilms('mystery', 'mysteryFilms');
    getBestFilms('drama', 'dramaFilms');

    // Init selected cateogry
    getCategoryFilms('categorySelector', 'categoryFilms');
    getCategoryFilms('secondCategorySelector', 'secondCategoryFilms');

    const categorySelect = document.querySelector('#categorySelector');
    const secondCategorySelect = document.querySelector('#secondCategorySelector');
    if (categorySelect && secondCategorySelect) {
        categorySelect.value = 'Action';
        secondCategorySelect.value = 'Fantasy';
        categorySelect.dispatchEvent(new Event('change'));
        secondCategorySelect.dispatchEvent(new Event('change'));
    }

    // Init btn-controllers
    initBtnController({ sectionSelector: '#mysteryFilms', filmSelector: '.film-container' });
    initBtnController({ sectionSelector: '#dramaFilms', filmSelector: '.film-container' });
    initBtnController({ sectionSelector: '#bestFilms', filmSelector: '.film-container' });


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
                    modalImage.onerror = () => {
                        modalImage.src = 'static/img/img-not-found.jpg';
                    };
                    modalDescription.textContent = data.long_description;
                    modalGenre.innerHTML = `<strong>Genres :</strong> ${data.genres.join(", ")}`;
                    modalDuration.innerHTML = `<strong>Durée :</strong> ${data.duration} minutes`;
                    modalDirector.innerHTML = `<strong>Réalisateur :</strong> ${data.directors}`;
                    modalBoxOffice.innerHTML = `<strong>Recettes au box-office : </strong>${data.worldwide_gross_income ?? "Unknown"}`;
                    modalIMBD.innerHTML = `<strong>Score IMDB :</strong> ${data.avg_vote} /10`;
                    modalActors.innerHTML = `<u>Acteurs et actrices :</u>  ${data.actors}`;
                    modalReleaseDate.innerHTML = `<u>Sortie en :</u>  ${releaseYear}`;
                }
            );
        });
    });
});

