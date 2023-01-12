import { API_KEY, POPULAR_MOVIES_API_URL, SEARCH_MOVIES_API_URL } from "../config"

const searchMoviesUrl = SEARCH_MOVIES_API_URL
const popularMoviesUrl = POPULAR_MOVIES_API_URL
const apiKey = API_KEY

// API URLs -------------------------------------------------
export const getSearchMovieUrl:
  (page: string, search: string, lang?: string) => string = (page = "1", search, lang = "en-US") => {
    if (!searchMoviesUrl || !apiKey) throw new Error("Missing env variables for themoviedb API")
    const baseUrl = new URL(searchMoviesUrl)
    baseUrl.searchParams.append("api_key", apiKey)
    baseUrl.searchParams.append("page", page)
    baseUrl.searchParams.append("language", lang)
    baseUrl.searchParams.append("query", search)
    return baseUrl.toString()
  }

export const getPopularMovieUrl: (page: string, lang?: string) => string = (page = "1", lang = "en-US") => {
  if (!popularMoviesUrl || !apiKey) throw new Error("Missing env variables for themoviedb API")
  const baseUrl = new URL(popularMoviesUrl)
  baseUrl.searchParams.append("api_key", apiKey)
  baseUrl.searchParams.append("page", page)
  baseUrl.searchParams.append("language", lang)
  return baseUrl.toString()
}