import Link from 'next/link'
import Image from 'next/image'

import clsx from 'clsx'

import SearchInput from '../SearchInput/SearchInput'

type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>
}

const Header = ({ setQuery }: Props) => (
  <div className={clsx('sticky flex top-0 z-40 w-full h-24 bg-black')}>
    <div className={clsx('flex justify-between w-full h-full max-w-7xl m-auto px-4')}>
      <Link href='/' className={clsx('flex items-center cursor-pointer')}>
        <div className={clsx('invisible md:visible')}>
          <Image width='150' height='50' src='/rmdb-logo.svg' alt='rmdb-logo' />
        </div>
        <div className={clsx('absolute md:invisible pt-2')}>
          <Image height='42' width='42' src='/rmdb-logo-small.svg' alt='rmdb-logo-small' />
        </div>
      </Link>
      {setQuery && (
        <div className={clsx("relative flex items-center")}>
          <SearchInput setQuery={setQuery} />
        </div>
      )}
    </div>
  </div>
)

export default Header