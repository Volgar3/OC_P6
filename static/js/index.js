import { getBestFilms } from "./getBestFilms.js";

document.addEventListener("DOMContentLoaded", function () {
    getBestFilms();

    document.querySelectorAll('a[data-bs-toggle="modal"]').forEach(img => {
        img.addEventListener('click', function () {
            const id = this.getAttribute('id').split('-')[1]
            const modalTitle = document.querySelector('.modal-title');
            const modalImage = document.querySelector('#modal-image');
            const modalDescription = document.querySelector('.modal-description > p');
            const modalGenre = document.querySelector('#modal-genre');

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
                }
            );
        });
    });
});