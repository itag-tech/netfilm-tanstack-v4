import axios from 'axios'
import { Movies } from "./types"

export const basicFetch = async <returnType>(url: string): Promise<returnType> => {
  try {
    const response = await axios.get(url)
    // TODO - custom errors handling switch status code
    if (response.status !== 200) {
      console.error("Error calling API - collection route", response.status, url)
      throw new Error("Error calling API - collection route")
    }

    const { data } = response
    return data

  } catch (error) {
    console.error("API call failed - collection route", error)
    throw error
  }
}

// Fetch functions
export const fetchMovies = async (search = '', page = 1): Promise<Movies> => {
  return await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`)
}
