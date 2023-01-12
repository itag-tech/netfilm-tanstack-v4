import clsx from 'clsx'
import Thumb from '../Thumbnail/Thumb'

type Props = {
  imgUrl: string
  title: string
  subtitle?: string
}

const Card = ({ imgUrl, title, subtitle }: Props) => (
  <div className={clsx('h-80')}>
    <div className={clsx('relative h-full')}>
      <Thumb imgUrl={imgUrl} />
      {/* TODO - add a gradien on hover display and shown movie informations with animation from bottom to top */}
      {/* <div className={clsx('absolute w-full bottom-0 px-4 py-2 rounded-b-xl bg-zinc-800')}>
        <h2 className={clsx('text-gray-900 text-center text-sm truncate')}>{title}</h2>
        {subtitle && <p className={clsx('text-cyan-400 text-center text-xs truncate')}>{subtitle}</p>}
      </div> */}
    </div>
  </div>
)

export default Card
