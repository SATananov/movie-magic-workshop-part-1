const router = require('express').Router();

const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');
const castController = require('./controllers/castController');

router.use(homeController);
router.use(movieController);
router.use(castController);

router.use((req, res) => {
    res.status(404).render('404', { pageTitle: '404 Page' });
});

module.exports = router;
