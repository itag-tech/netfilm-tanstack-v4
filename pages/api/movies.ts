import type { NextApiRequest, NextApiResponse } from 'next'

import { basicFetch } from '../../api/fetchFunctions'
import { getPopularMovieUrl, getSearchMovieUrl } from '../../utils/apiUrlsBuilder'

import { Movies } from '../../models/Movie'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Movies>) {
  const { page, search } = req.query // Grab search params

  const endpoint = search ? getSearchMovieUrl(page as string, search as string) : getPopularMovieUrl(page as string)

  const data = await basicFetch<Movies>(endpoint)

  res.status(200).json(data)

}