import { getBestFilms } from "./getBestFilms.js";


document.addEventListener("DOMContentLoaded", function () {
    getBestFilms();

    document.querySelectorAll('a[data-bs-toggle="modal"]').forEach(img => {
        img.addEventListener('click', function () {
            const parent = this.parentElement;
            const image = parent.querySelector('img');
            const altText = image.getAttribute('alt');
            const id = this.getAttribute('id').split('-')[1]
            console.log(id)

            // Changer le contenu de la modale dans le then de la requete , plutôt que ce qu'il y a en dessous
            const modalBody = document.querySelector('.modal-body'); // Get the first matching element
            if (modalBody) {
                modalBody.textContent = altText;
            }
        });
    });
});