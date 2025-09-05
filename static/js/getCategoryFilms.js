import { getBestFilms } from './getBestFilms.js';

export function getCategoryFilms() {

    const categorySelector = document.getElementById('categorySelector');
    const secondCategorySelector = document.getElementById('secondCategorySelector');

    categorySelector.addEventListener('change', function () {
        const selectedGenre = categorySelector.value;
        getBestFilms(selectedGenre, 'categoryFilms');
    });

    secondCategorySelector.addEventListener('change', function () {
        const secondSelectedGenre = secondCategorySelector.value;
        getBestFilms(secondSelectedGenre, 'secondCategoryFilms');
    });
}