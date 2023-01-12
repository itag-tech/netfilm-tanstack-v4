// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const searchPath = "/3/search/movie"
const popularPath = "/3/movie/popular"
const SEARCH_MOVIES_API_URL: string | undefined = process.env.API_URL?.concat(searchPath)
const POPULAR_MOVIES_API_URL: string | undefined = process.env.API_URL?.concat(popularPath)
const API_KEY: string | undefined = process.env.API_KEY

const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/'
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE: string = 'w1280'
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE: string = 'w780'

export {
  SEARCH_MOVIES_API_URL,
  POPULAR_MOVIES_API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
}
