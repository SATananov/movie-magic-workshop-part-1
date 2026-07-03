const prisma = require('../lib/prisma');

function formatMovie(movie) {
    if (!movie) {
        return null;
    }

    return {
        ...movie,
        imageURL: movie.imageUrl,
        casts: movie.casts ? movie.casts.map(movieCast => movieCast.cast) : [],
    };
}

async function getAll(filter = {}) {
    const title = (filter.title || '').trim();
    const genre = (filter.genre || '').trim();
    const year = String(filter.year || '').trim();

    const where = {};

    if (title) {
        where.title = {
            contains: title,
            mode: 'insensitive',
        };
    }

    if (genre) {
        where.genre = {
            contains: genre,
            mode: 'insensitive',
        };
    }

    let movies = await prisma.movie.findMany({
        where,
        include: {
            casts: {
                include: {
                    cast: true,
                },
            },
        },
        orderBy: {
            id: 'desc',
        },
    });

    if (year) {
        movies = movies.filter(movie => String(movie.year).includes(year));
    }

    return movies.map(formatMovie);
}

async function getById(id) {
    const movie = await prisma.movie.findUnique({
        where: {
            id: Number(id),
        },
        include: {
            casts: {
                include: {
                    cast: true,
                },
            },
        },
    });

    return formatMovie(movie);
}

async function create(movieData) {
    const movie = await prisma.movie.create({
        data: {
            title: movieData.title,
            category: movieData.category,
            genre: movieData.genre,
            director: movieData.director,
            year: movieData.year,
            rating: movieData.rating,
            description: movieData.description,
            imageUrl: movieData.imageUrl,
        },
    });

    return formatMovie(movie);
}

module.exports = {
    getAll,
    getById,
    create,
};
