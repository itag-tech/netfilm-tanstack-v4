import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Layout from '../components/Layout'
import Collection from '../components/Collection'
import SearchBar from '../components/SearchBar'


const Home: NextPage = () => {

  const queryClient = React.useMemo(() => {
    return new QueryClient()
  }, [])

  return (
    <Layout>
      <Head>
        <title>Technical test</title>
        <meta name="description" content="GetHeroes technical test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <SearchBar />
        <Collection />
      </QueryClientProvider>
    </ Layout>
  )
}

export default Home
