import { API_KEY, API_URL } from "../config"

const moviedbApiUrl = API_URL
const apiKey = API_KEY

// API URLs -------------------------------------------------
export const getSearchMovieUrl:
  (page: string, search: string, lang?: string) => string = (page, search, lang = "en-US") => {
    if (!moviedbApiUrl || !apiKey) throw new Error("Missing env variables for OMDb API")
    const baseUrl = new URL(moviedbApiUrl)
    baseUrl
    baseUrl.searchParams.append("apikey", apiKey)
    baseUrl.searchParams.append("page", page)
    baseUrl.searchParams.append("language", lang)
    baseUrl.searchParams.append("query", search)
    return baseUrl.toString()
  }

export const getPopularMovieUrl: (page: string, lang?: string) => string = (page, lang = "en-US") => {
  if (!moviedbApiUrl || !apiKey) throw new Error("Missing env variables for OMDb API")
  const baseUrl = new URL(moviedbApiUrl)
  baseUrl
  baseUrl.searchParams.append("apikey", apiKey)
  baseUrl.searchParams.append("page", page)
  baseUrl.searchParams.append("language", lang)
  return baseUrl.toString()
}