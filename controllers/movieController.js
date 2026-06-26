const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/create', (req, res) => {
    res.render('movies/create', { pageTitle: 'Create Page' });
});

router.post('/create', async (req, res) => {
    await movieService.create(req.body);
    res.redirect('/');
});

router.get('/details/:id', async (req, res) => {
    const movie = await movieService.getById(req.params.id);

    if (!movie) {
        return res.status(404).render('404', { pageTitle: '404 Page' });
    }

    res.render('movies/details', { movie, pageTitle: 'Details Page' });
});

router.get('/search', async (req, res) => {
    const filter = {
        title: req.query.title || '',
        genre: req.query.genre || '',
        year: req.query.year || '',
    };

    const movies = await movieService.getAll(filter);

    res.render('movies/search', {
        movies,
        filter,
        pageTitle: 'Search Page',
    });
});

module.exports = router;
