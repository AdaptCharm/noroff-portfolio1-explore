import { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'

interface Props {
  className?: string
  keyword: KeywordProps
  content: ContentProps
  image: ImageProps
}

interface KeywordProps {
  name: string,
  color: string
}

interface ContentProps {
  title: string,
  description: string
}

interface ImageProps {
  url: string
  altText?: string
  width?: number
  height?: number
  priority?: boolean
}

const Feature: FC<Props> = ({
  className,
  keyword,
  content,
  image
}) => {
  return (
    <div className={cn(
      'relative py-20 sm:py-23',
      className
    )}>
      <div className="mx-auto text-center px-4 max-w-md sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className={cn(
            'text-base font-semibold tracking-wider uppercase',
            `text-${keyword.color}-600`
          )}>
            {keyword.name}
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            {content.title}
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            {content.description}
          </p>
        </div>
        <div className="mt-16 shadow-large">
          <Image
            className="object-cover object-center rounded-3xl shadow-large"
            src={image.url}
            alt={image.altText || 'Image'}
            width={image.width || 1216}
            height={image.height || 608}
            quality={65}
            priority={image.priority}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  )
}

export default Feature