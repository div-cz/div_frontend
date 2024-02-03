import Image from 'next/image'
import { imageSizeEnum } from '@/app/lib/types'

export type CardProps = {
  imageSize: imageSizeEnum;
  imageSrc: string;
  imageAlt: string;
  title: string;
  titleEng: string;
  description: string;
};

export const Card = ({
  imageSize,
  imageAlt,
  imageSrc,
  title,
  titleEng,
  description,
}: CardProps) => {
  const imageWidth = imageSize === 'small' ? 100 : 348
  const imageHeight = imageSize === 'small' ? 100 : 196

  return (
    <div
      className="border border-l-stone-400 hover:border-gray-300 shadow rounded-lg"
      style={{ width: '348px', backgroundColor: '#444' }}
    >
      <Image
        className={'rounded-lg'}
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
      <div className="p-5">
        <h3 className="text-xl mb-3 font-semibold" style={{ color: '#4caf50' }}>
          {title}
        </h3>
        <p className="mb-4" style={{ color: '#ddd' }}>
          {description}
        </p>
        <a href={''} className="py-1.5 px-3 bg-blue-500 text-white rounded">
          {titleEng}
        </a>
      </div>
    </div>
  )
}
