
// Fonction pour créer le bouton
function createToggleButton({ section, films, insertAfterIndex, hideAfterIndex }) {
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Voir plus...';
    toggleBtn.classList.add('toggle-btn');
    toggleBtn.setAttribute('type', 'button');

    const targetFilm = films[insertAfterIndex];
    if (targetFilm) {
        const filmGrid = section.querySelector('.film-grid');
        filmGrid.insertAdjacentElement('afterend', toggleBtn);
    }

    toggleBtn.addEventListener('click', () => {
        const isShowing = toggleBtn.textContent === 'Voir moins...';

        films.forEach((film, index) => {
            if (index > hideAfterIndex) {
                film.style.display = isShowing ? 'none' : '';
            }
        });

        toggleBtn.textContent = isShowing ? 'Voir plus...' : 'Voir moins...';
    });
}

// Fonction pour s'adapter au format utlisé
export function initBtnController({ sectionSelector, filmSelector }) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const films = section.querySelectorAll(filmSelector);
    if (films.length === 0) return;

    section.querySelectorAll('.toggle-btn').forEach(btn => btn.remove());

    const screenWidth = window.innerWidth;
    let insertAfterIndex;
    let hideAfterIndex;

    if (screenWidth < 768) {
        insertAfterIndex = 0;
        hideAfterIndex = 0;
    } else if (screenWidth < 992) {
        insertAfterIndex = 2;
        hideAfterIndex = 3;
    } else {
        films.forEach(film => (film.style.display = ''));
        return;
    }

    films.forEach((film, index) => {
        film.style.display = index > hideAfterIndex ? 'none' : '';
    });

    // On init la fonction avec les paramètres
    createToggleButton({ section, films, insertAfterIndex, hideAfterIndex });
}
// Fonction pour (re)charger dynamiquement tous les boutons
const sections = ['#mysteryFilms', '#dramaFilms', '#bestFilms'];

export function loadAllBtnControllers() {
    sections.forEach(sectionSelector => {
        initBtnController({
            sectionSelector,
            filmSelector: '.film-container',
        });
    });
}

// Appel au chargement initial
loadAllBtnControllers();

// Ajout d’un listener resize pour réinitialiser selon la taille
window.addEventListener('resize', () => {
    loadAllBtnControllers();
});