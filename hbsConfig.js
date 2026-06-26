const { engine } = require('express-handlebars');
const path = require('path');

function repeatStars(rating) {
    const value = Math.max(0, Math.min(5, Math.floor(Number(rating) || 0)));
    return Array(value).fill('★').join(' ');
}

function hbsConfig(app) {
    app.engine('hbs', engine({
        extname: 'hbs',
        layoutsDir: path.resolve(__dirname, 'views/layouts'),
        partialsDir: path.resolve(__dirname, 'views/partials'),
        defaultLayout: 'main',
        helpers: {
            stars: repeatStars,
            hasMovies(movies) {
                return Array.isArray(movies) && movies.length > 0;
            },
        },
    }));

    app.set('view engine', 'hbs');
    app.set('views', path.resolve(__dirname, 'views'));
}

module.exports = hbsConfig;
