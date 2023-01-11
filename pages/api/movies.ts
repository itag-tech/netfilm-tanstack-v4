// Basic fetch function
import { basicFetch } from '../../api/fetchFunction'
// Types
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Movies } from '../../api/types'
import { getPopularMovieUrl, getSearchMovieUrl } from '../../utils/movieUtils'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Movies>) {
  const { page, search } = req.query // Grab search params

  const endpoint = search ? getSearchMovieUrl(page as string, search as string) : getPopularMovieUrl(page as string)

  const data = await basicFetch<Movies>(endpoint)

  res.status(200).json(data)
}
