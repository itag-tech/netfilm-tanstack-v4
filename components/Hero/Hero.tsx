import clsx from 'clsx'
import Image from 'next/image'

type Props = {
  imgUrl: string
  title: string
  text: string
}

const Hero = ({ imgUrl, title, text }: Props) => (
  <div className={clsx('relative w-full overflow-hidden h-128 bg-gradient-to-t from-gray-900')}>
    <div className={clsx('relative flex flex-col-reverse h-full max-w-7xl m-auto z-10 pb-12 text-center md:text-left')}>
      <div className={clsx('text-white max-w-2xl px-4')}>
        <h2 className={clsx('text-2xl md:text-5xl font-bold pb-8')}>{title}</h2>
        <p className={clsx('text-lg md:text-xl')}>{text}</p>
      </div>
    </div>
    <Image
      priority
      src={imgUrl}
      alt='hero-image'
      width="1000"
      height="1000"
      className={clsx('absolute top-0 left-0 w-full h-full object-cover opacity-50')}
    />
  </div>
)

export default Hero
