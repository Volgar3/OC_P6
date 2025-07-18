import { fetchBestFilms } from './getBestFilms.js';

fetchBestFilms()
    .then(films => {
        const filmIds = films.map(film => film.id); // ← tu récupères juste les IDs
        const filmTitles = films.map(film => film.title);
        console.log('Les 6 IDs :', filmIds);
        console.log('Les 6 titres :', filmTitles);

        // Reconstitution des URL
        const urls = filmIds.map(id => `http://localhost:8000/api/v1/${title}/${id}`);
        console.log('Les six URL :', urls);
    })