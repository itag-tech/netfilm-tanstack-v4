import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'

import Layout from '../components/Layout'
import Collection from '../components/Collection'
import Header from '../components/Header/Header'
import clsx from 'clsx'


const Home: NextPage = () => {
  const [query, setQuery] = React.useState('')

  return (
    <main className={clsx("relative h-screen overflow-y-scroll")}>
      <Header setQuery={setQuery} />
      {/* <Collection /> */}
    </main>
  )
}

export default Home
