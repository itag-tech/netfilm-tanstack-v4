import { StaticImageData } from "next/image"
import { Movie } from "../models/Movie"
import placeholderImage from "../public/placeholder-film.png"

// API objects & methods -------------------------------------------------

const getBaseAutorizedUrl: () => URL = () => {

  const omdbApiBaseUrl = process.env.NEXT_PUBLIC_OMDB_API_URL
  const apiKey = process.env.NEXT_PUBLIC_API_KEY

  if (!omdbApiBaseUrl || !apiKey) throw new Error("Missing env variables for OMDb API") // TODO : use a better error handling
  const baseUrl = new URL(omdbApiBaseUrl)
  baseUrl.searchParams.append("apikey", apiKey)

  return baseUrl
}

export const getUrlSearchMovieByTitle: (title: string) => string = (title) => {
  const url = getBaseAutorizedUrl()
  url.searchParams.append("s", title)
  return url.toString()
}

export const getUrlSearchMovieById: (id: string) => string = (id) => {
  const url = getBaseAutorizedUrl()
  url.searchParams.append("i", id)
  return url.toString()
}

// Movie type methods ----------------------------------------------------

export const getPoster: (movie: Movie) => StaticImageData | string = (movie) => {
  // Note : Prefering render an image placeholder instead of a broken image
  return (movie.Poster === "N/A" && placeholderImage) || movie.Poster
}