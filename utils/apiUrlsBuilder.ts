import { SEARCH_MOVIES_API_URL, API_KEY, POPULAR_MOVIES_API_URL, MOVIE_DETAIL_API_URL } from "./constants"

// API urls for collection ---------------------------
export const getSearchMovieUrl:
  (page: string, search: string, lang?: string) => string = (page = "1", search, lang = "en-US") => {
    if (!SEARCH_MOVIES_API_URL || !API_KEY) throw new Error("Missing env variables for themoviedb API")
    const baseUrl = new URL(SEARCH_MOVIES_API_URL)
    baseUrl.searchParams.append("api_key", API_KEY)
    baseUrl.searchParams.append("page", page)
    baseUrl.searchParams.append("language", lang)
    baseUrl.searchParams.append("query", search)
    return baseUrl.toString()
  }

export const getPopularMovieUrl: (page: string, lang?: string) => string = (page = "1", lang = "en-US") => {
  if (!POPULAR_MOVIES_API_URL || !API_KEY) throw new Error("Missing env variables for themoviedb API")
  const baseUrl = new URL(POPULAR_MOVIES_API_URL)
  baseUrl.searchParams.append("api_key", API_KEY)
  baseUrl.searchParams.append("page", page)
  baseUrl.searchParams.append("language", lang)
  return baseUrl.toString()
}

// API urls for single movie ------------------------------------
export const getMovieUrl: (id?: string) => string = id => {
  if (!id) throw new Error("Missing id")
  if (!MOVIE_DETAIL_API_URL || !API_KEY) throw new Error("Missing env variables for themoviedb API")
  const baseUrl = new URL(`${MOVIE_DETAIL_API_URL}/${id}`)
  baseUrl.searchParams.append("api_key", API_KEY)
  return baseUrl.toString()
}

export const getCreditUrl: (id?: string) => string = id => {
  if (!id) throw new Error("Missing id")
  if (!MOVIE_DETAIL_API_URL || !API_KEY) throw new Error("Missing env variables for themoviedb API")
  const baseUrl = new URL(`${MOVIE_DETAIL_API_URL}/${id}/credits`)
  baseUrl.searchParams.append("api_key", API_KEY)
  return baseUrl.toString()
}