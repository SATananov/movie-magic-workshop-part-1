const movieRepository = require('../repositories/movieRepository');

function normalizeMovieData(movieData) {
    return {
        title: movieData.title?.trim(),
        category: movieData.category?.trim(),
        genre: movieData.genre?.trim(),
        director: movieData.director?.trim(),
        year: Number(movieData.year),
        imageUrl: movieData.imageURL?.trim() || movieData.imageUrl?.trim(),
        rating: Number(movieData.rating),
        description: movieData.description?.trim(),
    };
}

async function getAll(filter) {
    return movieRepository.getAll(filter);
}

async function getById(id) {
    return movieRepository.getById(id);
}

async function create(movieData) {
    const normalizedMovieData = normalizeMovieData(movieData);
    return movieRepository.create(normalizedMovieData);
}

async function attachCast(movieId, castId) {
    return movieRepository.attachCast(movieId, castId);
}

module.exports = {
    getAll,
    getById,
    create,
    attachCast,
};
