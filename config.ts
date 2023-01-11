// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_SEARCH_URL: string | undefined = process.env.API_SEARCH_URL
const API_POPULAR_URL: string | undefined = process.env.API_POPULAR_URL
const API_KEY: string | undefined = process.env.API_KEY

// For single movie
const movieUrl = (id?: string) => `${API_URL}movie/${id}?api_key=${API_KEY}`
const creditsUrl = (id?: string) => `${API_URL}movie/${id}/credits?api_key=${API_KEY}`

const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/'
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE: string = 'w1280'
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE: string = 'w780'

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  movieUrl,
  creditsUrl
}
