const router = require('express').Router();

const castService = require('../services/castService');
const movieService = require('../services/movieService');

router.get('/create/cast', (req, res) => {
    res.render('casts/create', { pageTitle: 'Create Cast Page' });
});

router.post('/create/cast', async (req, res) => {
    await castService.create(req.body);
    res.redirect('/');
});

router.get('/attach/cast/:id', async (req, res) => {
    const movie = await movieService.getById(req.params.id);

    if (!movie) {
        return res.status(404).render('404', { pageTitle: '404 Page' });
    }

    const attachedCastIds = movie.casts.map(cast => cast.id);
    const casts = await castService.getAll({ excludeIds: attachedCastIds });

    res.render('casts/attach', {
        movie,
        casts,
        pageTitle: 'Attach Cast Page',
    });
});

router.post('/attach/cast/:id', async (req, res) => {
    const movieId = req.params.id;
    const castId = req.body.castId;

    if (!castId || castId === 'none') {
        return res.redirect('/attach/cast/' + movieId);
    }

    await movieService.attachCast(movieId, castId);
    res.redirect('/details/' + movieId);
});

module.exports = router;
