const express = require("express");
const router = express.Router();

const Movie = require("../models/movie.js");
const Celebrity = require("../models/celebrity.js");

router.get("/", (req, res, next) => {
  Movie.find()
    .then((movies) => res.render("movies/index", { movies }))
    .catch((err) => next(err));
});

router.get('/new', (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    res.render('movies/new', {
      celebrities: celebrities
    })
  })
  .catch((err) => next(err));
});

router.post("/", (req, res, next) => {
  const title = req.body.title;
  const genre = req.body.genre;
  const plot = req.body.plot;
  const cast = req.body.cast;

  const movie = new Movie({
    title,
    genre,
    plot,
    cast,
  });

  movie
    .save()
    .then((movie) => {
      res.redirect("/movies");
    })
    .catch((err) => {
      res.render("movies/new");
    });
});

module.exports = router;