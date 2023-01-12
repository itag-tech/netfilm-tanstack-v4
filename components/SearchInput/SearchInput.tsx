import React from 'react'
import clsx from 'clsx'

type SearchInputProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

const TIME = 300; // ms

const SearchInput = ({ setQuery }: SearchInputProps) => {
  const [text, setText] = React.useState('')
  const timer = React.useRef<NodeJS.Timeout>()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    clearTimeout(timer.current)

    setText(value)

    timer.current = setTimeout(() => {
      setQuery(value)
    }, TIME)
  }

  return (
    <input
      className={clsx('h-10 pr-14 md:w-96 rounded-full p-4 text-md bg-gray-700 text-white focus:outline-none focus:border focus:border-solid focus:border-pink-400')}
      type='text'
      placeholder='Search Movie'
      value={text}
      onChange={handleInput}
    />
  )
}

export default SearchInput
