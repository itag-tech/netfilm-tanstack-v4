import ky from 'ky'
import { Movies } from "../models/Movie"

export const basicFetch = async <ReturnType>(url: string): Promise<ReturnType> => {

  const response = await ky.get(url)

  if (!response.ok) throw new Error('Error!')

  return await response.json()
}

// Fetch functions ------------------------------------
export const fetchMovies = async (search = '', page = "1"): Promise<Movies> => {

  // here is the route of the "api" folder in "pages" folder
  return await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`)
}
