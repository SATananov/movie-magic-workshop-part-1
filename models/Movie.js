class Movie {
    constructor(id, title, category, genre, director, year, imageURL, rating, description) {
        this.id = Number(id);
        this.title = title;
        this.category = category;
        this.genre = genre;
        this.director = director;
        this.year = Number(year);
        this.imageURL = imageURL;
        this.rating = Number(rating);
        this.description = description;
    }
}

module.exports = Movie;
