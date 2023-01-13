// -------------------------------------------------------------------------
// ↓ URL constants for themoviedb API ↓
// -------------------------------------------------------------------------

// Description: Build API urls for themoviedb API
const API_VERSION: string = "3"

// paths for API
const SEARCH_PATH: string = `/${API_VERSION}/search/movie`
const POPULAR_PATH: string = `/${API_VERSION}/movie/popular`
const MOVIE_DETAIL_PATH: string = `/${API_VERSION}/movie`

// endpoint base urls
const SEARCH_MOVIES_API_URL: string | undefined = process.env.API_URL?.concat(SEARCH_PATH)
const POPULAR_MOVIES_API_URL: string | undefined = process.env.API_URL?.concat(POPULAR_PATH)
const MOVIE_DETAIL_API_URL: string | undefined = process.env.API_URL?.concat(MOVIE_DETAIL_PATH)
const API_KEY: string | undefined = process.env.API_KEY

// -------------------------------------------------------------------------
// ↓ Image constants ↓
// -------------------------------------------------------------------------

const NO_IMG_URL: string = '/no_image.jpg'
const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/'

// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE: string = 'w1280'

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE: string = 'w780'

export {
  SEARCH_MOVIES_API_URL,
  POPULAR_MOVIES_API_URL,
  MOVIE_DETAIL_API_URL,
  API_KEY,
  NO_IMG_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
}