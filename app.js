// Require packages used in project
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// Setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
const movieList = require('./movies.json')

// Setting static files
app.use(express.static('public'))

// Setting route
app.get('/', (req, res) => {
  // Past the movie data into 'index' partial template
  res.render(`index`, { movies: movieList.results })
})

app.get('/movies/:movie_id', (req, res) => {
  const movie = movieList.results.find(movie =>
    movie.id.toString() == req.params.movie_id
  )
  res.render('show', { movie: movie })
})

// Start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is running on localhost:${port}!!!`)
})