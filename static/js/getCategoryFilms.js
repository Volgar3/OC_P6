import { getBestFilms } from './getBestFilms.js';

export function getCategoryFilms() {

    const categorySelector = document.getElementById('categorySelector');

    categorySelector.addEventListener('change', function () {
        const selectedGenre = categorySelector.value; // var me permettant de savoir quel est le genre choisi
        getBestFilms(selectedGenre);
    });
}