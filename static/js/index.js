import { getBestFilms } from "./getBestFilms.js";

document.addEventListener("DOMContentLoaded", function () {
    getBestFilms();

    document.querySelectorAll('a[data-bs-toggle="modal"]').forEach(img => {
        img.addEventListener('click', function () {
            const parent = this.parentElement;
            const image = parent.querySelector('img');
            const id = this.getAttribute('id').split('-')[1]
            console.log(id)

<<<<<<< HEAD
            // Changer le contenu de la modale dans le then de la requete , plutôt que ce qu'il y a en dessous
=======
            const modalTitle = document.querySelector('.modal-title');
            if (modalTitle) {
                modalTitle.textContent = `Titre : ${image.getAttribute('alt')}`;
            }

>>>>>>> 0fbcdeb8795b96d1c55969040a52d517d04bdf06
            const modalBody = document.querySelector('.modal-body'); // Get the first matching element
            if (modalBody) {
                modalBody.textContent = `(ID : ${id})`;

                
            }
        });
    });
});