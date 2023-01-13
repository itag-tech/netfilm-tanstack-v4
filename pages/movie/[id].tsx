import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import clsx from 'clsx'

import { basicFetch } from '../../api/fetchFunctions'
import { getCreditUrl, getMovieUrl } from '../../utils/apiUrlsBuilder'
import { BACKDROP_SIZE, IMAGE_BASE_URL, NO_IMG_URL, POSTER_SIZE } from '../../utils/constants'

import { Cast } from '../../models/Cast'
import { Credits } from '../../models/Credits'
import { Crew } from '../../models/Crew'
import { Movie } from '../../models/Movie'

import Header from '../../components/Header/Header'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import MovieInfo from '../../components/MovieInfo/MovieInfo'
import Grid from '../../components/Grid/Grid'
import Card from '../../components/Card/Card'

type MovieProps = {
  movie: Movie
  directors: Crew[]
  cast: Cast[]
}

const Movie: NextPage<MovieProps> = ({ movie, cast, directors }) => (
  <main>
    <Header />
    <Breadcrumb title={movie.original_title} />
    <MovieInfo
      thumbUrl={movie.poster_path ? IMAGE_BASE_URL.concat(POSTER_SIZE, movie.poster_path) : NO_IMG_URL}
      rating={movie.vote_average}
      year={movie.release_date.split('-')[0]}
      backgroundImgUrl={movie.backdrop_path ? IMAGE_BASE_URL.concat(BACKDROP_SIZE, movie.backdrop_path) : NO_IMG_URL}
      title={movie.original_title}
      summary={movie.overview}
      directors={directors}
      time={movie.runtime}
      budget={movie.budget}
      revenue={movie.revenue}
    />
    <Grid className={clsx('p-4 max-w-7xl m-auto')} title='Actors'>
      {cast.map(actor => (
        <Card
          key={actor.credit_id}
          imgUrl={actor.profile_path ? IMAGE_BASE_URL.concat(POSTER_SIZE, actor.profile_path) : NO_IMG_URL}
          title={actor.name}
          subtitle={actor.character}
        />
      ))}
    </Grid>
  </main>
)

export default Movie

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id as string

  const movieEndpoint: string = getMovieUrl(id)
  const creditsEndpoint: string = getCreditUrl(id)

  const movie = await basicFetch<Movie>(movieEndpoint)
  const credits = await basicFetch<Credits>(creditsEndpoint)

  // Get the directors only
  const directors = credits.crew.filter(member => member.job === 'Director')

  return {
    props: {
      movie,
      directors,
      cast: credits.cast
    },
    revalidate: 60 * 60 * 24 // Re-build page every 24 hours
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
