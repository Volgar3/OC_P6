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

            const modalBody = document.querySelector('.modal-body'); // Get the first matching element
            if (modalBody) {
                modalBody.textContent = altText;
            }
        });
    });
});