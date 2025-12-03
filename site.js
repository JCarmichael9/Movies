/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            movies: [],
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            title: "IMDB + James's Top 8 Movies",
            owner: "James",
            github: "http://www.github.com/JCarmichael9/is219lee-p3"
         
      }
    },
      methods: {
            getMonthText(dateArray) {
                  if (!Array.isArray(dateArray) || dateArray.length < 3) return ''
                  const monthNum = parseInt(dateArray[1], 10)
                  let monthText = ''
                  if (monthNum === 1) {
                        monthText = 'January'
                  } else if (monthNum === 2) {
                        monthText = 'February'
                  } else if (monthNum === 3) {
                        monthText = 'March'
                  } else if (monthNum === 4) {
                        monthText = 'April'
                  } else if (monthNum === 5) {
                        monthText = 'May'
                  } else if (monthNum === 6) {
                        monthText = 'June'
                  } else if (monthNum === 7) {
                        monthText = 'July'
                  } else if (monthNum === 8) {
                        monthText = 'August'
                  } else if (monthNum === 9) {
                        monthText = 'September'
                  } else if (monthNum === 10) {
                        monthText = 'October'
                  } else if (monthNum === 11) {
                        monthText = 'November'
                  } else if (monthNum === 12) {
                        monthText = 'December'
                  } else {
                        monthText = ''
                  }
                  const day = dateArray[2]
                  const year = dateArray[0]
                  return monthText ? `${monthText} ${day}, ${year}` : ''
            },

            like(index) {
                  if (!this.movies || !this.movies[index]) return
                  this.movies[index].likes = (this.movies[index].likes || 0) + 1
            },

            dislike(index) {
                  if (!this.movies || !this.movies[index]) return
                  this.movies[index].dislikes = (this.movies[index].dislikes || 0) + 1
            },

            posterClick(index) {
                  if (!this.movies || !this.movies[index]) return
                  const movie = this.movies[index]
                  if (!Array.isArray(movie.posters) || movie.posters.length === 0) return
                  movie.posterindex = (typeof movie.posterindex === 'number' ? movie.posterindex : 0) + 1
                  if (movie.posterindex >= movie.posters.length) {
                        movie.posterindex = 0
                  }
            },

            timeText(minutes) {
                  if (typeof minutes !== 'number') minutes = parseInt(minutes, 10) || 0
                  const hours = Math.trunc(minutes / 60)
                  const mins = minutes % 60
                  return `${hours}h ${mins}m`
            }
      }
})

vue_app.mount("#vue_app")
