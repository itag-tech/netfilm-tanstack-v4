"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SearchProvider } from '../providers/SearchProvider'

const queryClient = new QueryClient()

type ReactQueryWrapperProps = {
  children: React.ReactNode
}

const ProvidersWrapper = ({ children }: ReactQueryWrapperProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        {children}
      </SearchProvider>
    </QueryClientProvider>
  )
}

export default ProvidersWrapper