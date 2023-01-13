import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import clsx from 'clsx'

import { useFetchMovies } from '../api/fetchHook'
import { BACKDROP_SIZE, IMAGE_BASE_URL, NO_IMG_URL, POSTER_SIZE } from '../utils/constants'

import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Grid from '../components/Grid/Grid'
import Card from '../components/Card/Card'
import Spinner from '../components/Spinner/Spinner'

const Home: NextPage = () => {
  const [query, setQuery] = React.useState('')

  const { data, fetchNextPage, isLoading, isFetching, error } = useFetchMovies(query)

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) fetchNextPage();
  }

  // local util variables  --------------------------------------

  const movies = data?.pages?.[0].results
  const hasMovies = movies && movies.length > 0
  const mostPopularMovie = movies && movies[0]

  return (
    <main className={clsx("relative h-screen overflow-y-scroll")} onScroll={handleScroll}>
      <Header setQuery={setQuery} />
      <>
        {/* conditional rendering -------------------------------------- */}

        {/* ERROR */}
        {error && <div>Oh noooooooo something went wrong !</div>}

        {/* MOVIES FETCHED */}
        {hasMovies && mostPopularMovie && (
          <>
            <Hero
              imgUrl={
                mostPopularMovie.backdrop_path
                  ? IMAGE_BASE_URL.concat(BACKDROP_SIZE, mostPopularMovie.backdrop_path)
                  : NO_IMG_URL
              }
              title={mostPopularMovie.title}
              text={mostPopularMovie.overview}
            />

            <Grid
              className='p-4 max-w-7xl m-auto'
              title={query ? `Search Results : ${data?.pages[0].total_results}` : 'Popular Movies'}
            >
              {data && data.pages
                && data.pages.map(page =>
                  page.results.map(movie => (
                    <Link key={movie.id} href={`/movie/${movie.id}`}>
                      <div className='cursor-pointer hover:opacity-80 duration-300'>
                        <Card
                          imgUrl={movie.poster_path ? IMAGE_BASE_URL.concat(POSTER_SIZE, movie.poster_path) : NO_IMG_URL}
                          title={movie.original_title}
                        />
                      </div>
                    </Link>
                  ))
                )
              }
            </Grid>
          </>
        )}
      </>
      {/* LOADING / FETCHING */}
      {(isLoading || isFetching) && <Spinner />}
    </main>
  )
}

export default Home
