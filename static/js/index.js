import { getBestFilms } from "./getBestFilms.js";

document.addEventListener("DOMContentLoaded", function () {
    getBestFilms();

    document.querySelectorAll('a[data-bs-toggle="modal"]').forEach(img => {
        img.addEventListener('click', function () {
            const id = this.getAttribute('id').split('-')[1]
            const modalTitle = document.querySelector('.modal-title');
            const modalReleaseDate = document.querySelector('#modal-release');
            //const ReleaseYear = data.date_published.split('-')[0] Trouver une solution
            const modalImage = document.querySelector('#modal-image');
            const modalDescription = document.querySelector('.modal-description > p');
            const modalGenre = document.querySelector('#modal-genre');
            const modalDuration = document.querySelector('#modal-duration');
            const modalDirector = document.querySelector('#modal-director');
            const modalBoxOffice = document.querySelector('#modal-boxOffice'); // Trouver ce qu'il y a apres "data."
            const modalIMBD = document.querySelector('#modal-IMDB');
            const modalActors = document.querySelector('#modal-actors');

            fetch(`http://localhost:8000/api/v1/titles/${id}`).then(
                response => {
                    return response.json();
                }
            ).then(
                data => {
                    console.log(data);
                    modalTitle.textContent = data.title;
                    modalImage.src = data.image_url;
                    modalDescription.textContent = data.long_description;
                    modalGenre.innerHTML = `<strong>Genres :</strong> ${data.genres.join(", ")}`;
                    modalDuration.innerHTML = `<strong>Durée :</strong> ${data.duration} minutes`;
                    modalDirector.innerHTML = `<strong>Réalisateur :</strong> ${data.directors}`;
                    // A trouver modalBoxOffice.innerHTML = `<strong>Recettes au box-office :</strong>${data.}`;
                    modalIMBD.innerHTML = `<strong>Score IMDB :</strong> ${data.avg_vote} /10`;
                    modalActors.innerHTML = `<u>Acteurs et actrices :</u>  ${data.actors}`;
                    modalReleaseDate.innerHTML =`<u>Sortie en :</u>  ${ReleaseYear}`; // Trouver une solution


                }
            );
        });
    });
});