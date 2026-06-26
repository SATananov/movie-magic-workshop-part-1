const router = require('express').Router();

const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');

router.use(homeController);
router.use(movieController);

router.use((req, res) => {
    res.status(404).render('404', { pageTitle: '404 Page' });
});

module.exports = router;
