'use client'
import Image from 'next/image'
import { imageSizeEnum } from '@/app/lib/types'
import { Button } from '@/components/Button/Button'

export type CardProps = {
  imageSize: imageSizeEnum;
  imageSrc: string;
  imageAlt: string;
  title: string;
  titleEng: string;
  description: string;
};

export function Card({
  imageSize,
  imageAlt,
  imageSrc,
  title,
  titleEng,
  description,
}: CardProps) {
  const imageWidth = imageSize === 'small' ? 100 : 348
  const imageHeight = imageSize === 'small' ? 100 : 196

  return (
    <div className="shadow hover:shadow-2xl rounded-lg w-[348px] bg-gray-800">
      <Image
        className={'rounded-lg'}
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        priority={false}
      />
      <div className="p-5">
        <h3 className="text-xl mb-3 font-semibold text-green-500">{title}</h3>
        <p className="mb-4 text-gray-200">{description}</p>
        <Button title={titleEng} onClick={() => console.log('clicked')} />
      </div>
    </div>
  )
}
