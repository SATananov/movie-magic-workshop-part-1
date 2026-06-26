const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/', async (req, res) => {
    const movies = await movieService.getAll();
    res.render('home', { movies, pageTitle: 'Home Page' });
});

router.get('/about', (req, res) => {
    res.render('about', { pageTitle: 'About Page' });
});

module.exports = router;
