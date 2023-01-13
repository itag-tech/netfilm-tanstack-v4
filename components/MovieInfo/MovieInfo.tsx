import Image from 'next/image'
import clsx from 'clsx'

import { calcTime, convertMoney } from '../../helpers'
import { Crew } from '../../models/Crew'

import Thumbnail from '../Thumbnail/Thumb'
import Pill from '../Pill/Pill'

type Props = {
  thumbUrl: string
  backgroundImgUrl: string
  title: string
  year: string
  summary: string
  rating: number
  directors: Crew[]
  time: number
  budget: number
  revenue: number
}

const MovieInfo = ({
  thumbUrl,
  backgroundImgUrl,
  title,
  year,
  summary,
  rating,
  directors,
  time,
  budget,
  revenue
}: Props) => (
  <div className={clsx('relative w-full h-auto p-4')}>
    <div className={clsx('relative h-full min-h-128 flex flex-col md:flex-row max-w-7xl p-4 m-auto z-10 rounded-xl bg-zinc-800 bg-opacity-90')}>
      <div className={clsx('relative w-full h-96 md:h-auto md:w-1/3')}>
        <Thumbnail imgUrl={thumbUrl} />
        <div className={clsx('absolute top-4 left-4 rounded-full bg-white w-10 h-10 flex justify-center items-center text-black text-sm font-bold')}>
          {rating}
        </div>
      </div>
      <div className={clsx('text-white px-0 py-4 md:py-0 text-center md:text-left md:px-8 w-full md:w-2/3')}>
        <h2 className={clsx('text-2xl md:text-4xl font-bold pb-4')}>
          {title} ({year})
        </h2>
        <h3 className={clsx('text-lg font-bold')}>Summary</h3>
        <p className={clsx('mb-8 text-sm md:text-lg')}>{summary}</p>
        <div>
          <div>
            <h3 className={clsx('text-lg font-bold')}>Director{directors.length > 1 ? 's' : ''}</h3>
            <div>
              {directors.map(director => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
          <div className={clsx('mt-8')}>
            <h3 className={clsx('text-lg font-bold')}>Movie data</h3>
            <Pill className={clsx('ml-0')} text={`Running time: ${calcTime(time)}`} />
            <Pill text={`Budget: ${convertMoney(budget)}`} />
            <Pill text={`Revenue: ${convertMoney(revenue)}`} />
          </div>
        </div>
      </div>
    </div>
    <Image
      priority
      placeholder='blur'
      blurDataURL='/placeholder.jpg'
      className={clsx('absolute top-0 left-0 w-full h-full object-cover opacity-50')}
      src={backgroundImgUrl}
      alt='thumbnail'
      width={500}
      height={500}
    />
  </div>
)

export default MovieInfo
