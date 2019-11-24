const express = require('express'),
      axios = require('axios'),
      movieRouter = express.Router()

movieRouter.route('/')
    .get((req, res, next) => {
        const api_key = process.env.OMDBAPI_KEY,
              value = req.query.value,
              apiUrl = `https://www.omdbapi.com/?apikey=${api_key}&s=${value}`;

        axios.get(apiUrl) // Makes a GET request to OMDB API
             .then(response => {
                const movies = response.data.Search // This is where the movies are stored

                if (movies) { // Checks to see if there are any movies
                    return res.status(200).json(movies) // If found, return movies in JSON
                }

                return res.status(200).json({ err: "NOMOVIES" }) // If no movies return message saying there's no movies found
             })
             .catch(err => {
                next(err)
             })
    })
    .post((req, res) => res.status(404).end()) // NA
    .put((req, res) => res.status(404).end()) // NA
    .delete((req, res) => res.status(404).end()) // NA

module.exports = movieRouter
