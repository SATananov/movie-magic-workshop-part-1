const fs = require('fs/promises');
const path = require('path');

const Movie = require('../models/Movie');

const dbPath = path.resolve(__dirname, '../config/database.json');

async function readDatabase() {
    const content = await fs.readFile(dbPath, 'utf-8');
    return JSON.parse(content);
}

async function writeDatabase(database) {
    const content = JSON.stringify(database, null, 2);
    await fs.writeFile(dbPath, content, 'utf-8');
}

function getNextId(movies) {
    if (movies.length === 0) {
        return 1;
    }

    return Math.max(...movies.map(movie => Number(movie.id))) + 1;
}

async function getAll(filter = {}) {
    const database = await readDatabase();
    let movies = database.movies;

    const title = (filter.title || '').trim().toLowerCase();
    const genre = (filter.genre || '').trim().toLowerCase();
    const year = String(filter.year || '').trim().toLowerCase();

    if (title) {
        movies = movies.filter(movie => movie.title.toLowerCase().includes(title));
    }

    if (genre) {
        movies = movies.filter(movie => movie.genre.toLowerCase().includes(genre));
    }

    if (year) {
        movies = movies.filter(movie => String(movie.year).toLowerCase().includes(year));
    }

    return movies;
}

async function getById(id) {
    const database = await readDatabase();
    return database.movies.find(movie => Number(movie.id) === Number(id));
}

async function create(movieData) {
    const database = await readDatabase();
    const nextId = getNextId(database.movies);

    const movie = new Movie(
        nextId,
        movieData.title,
        movieData.category,
        movieData.genre,
        movieData.director,
        movieData.year,
        movieData.imageURL,
        movieData.rating,
        movieData.description
    );

    database.movies.push(movie);
    await writeDatabase(database);

    return movie;
}

module.exports = {
    getAll,
    getById,
    create,
};
