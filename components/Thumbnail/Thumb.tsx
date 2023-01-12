import clsx from 'clsx'
import Image from 'next/image'

type ThumbnailProps = {
  imgUrl: string
}

const Thumbnail = ({ imgUrl }: ThumbnailProps) => (
  <Image
    placeholder='blur'
    blurDataURL='/placeholder.jpg'
    className={clsx('absolute top-0 left-0 w-full h-full object-cover rounded-lg')}
    src={imgUrl}
    alt='movie thumbnail'
    width="200"
    height="200"
  />
)

export default Thumbnail
