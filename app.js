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

// Start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is running on localhost:${port}!!!`)
})