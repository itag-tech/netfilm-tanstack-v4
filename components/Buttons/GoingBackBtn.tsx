"use client"

import React from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'

const GoingBackBtn = () => {
  const router = useRouter()
  return (
    <button
      className={clsx("font-bold")}
      onClick={() => router.back()}
      aria-label="Revenir à la page précédente de recherche de films"
    >
      Précédent
    </button>
  )
}

export default GoingBackBtn