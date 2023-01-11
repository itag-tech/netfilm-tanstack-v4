import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

import { getPoster, getUrlSearchMovieById } from '../../../utils/movieUtils'
import { Movie } from '../../../models/Movie'

import GoingBackBtn from '../../../components/Buttons/GoingBackBtn'

type MoviePageProps = {
  params: {
    id: string
  }
}

async function getMovieData(id: string) {
  const res = await fetch(getUrlSearchMovieById(id))
  return (await res.json()) as Movie
}

export default async function MoviePage({ params: { id } }: MoviePageProps) {

  const movie = await getMovieData(id)

  if (!movie) return <p>Aucun résultat</p>
  return (
    <div className={clsx("flex flex-col justify-center items-center text-center py-12 px-6")}>
      <Image
        src={getPoster(movie)}
        alt={movie.Title}
        width={150}
        height={150}
        className={clsx("object-cover h-64 w-64 shadow-lg")}
      />
      <h1 className={clsx("pt-12")}>{movie?.Title}</h1>
      <h3 className={clsx("p-2")}>{movie?.Gender}</h3>
      <p className={clsx("italic")}>{movie?.Year}</p>
      <p className={clsx("italic")}>{movie?.Actors}</p>
      <p className={clsx("italic")}>{movie?.Director}</p>
      <div className={clsx("text-center w-4/5 md:w-1/2 bg-white rounded bg-opacity-50 my-12")}>
        <p className={clsx("p-2")}>
          {movie?.Plot}
        </p>
      </div>
      {/* // TODO - Next js bug here with react router dom */}
      {/* <GoingBackBtn /> */}
    </div>
  )
}
