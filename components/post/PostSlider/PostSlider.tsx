import React, {
  FC,
  useState,
  useRef,
  useEffect
} from 'react'

import { useKeenSlider } from 'keen-slider/react'

import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid'

import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import { GetAllPostsQuery } from '@wordpress/graphql-operations'

interface Props {
  posts: GetAllPostsQuery[]
}

const PostSlider: FC<Props> = ({ posts }) => {
  const [isCurrent, setIsCurrent] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const postSliderRef = useRef<HTMLDivElement>(null)

  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 1,
    loop: true,
    mounted: () => setIsActive(true),
    slideChanged(x) {
      setIsCurrent(x.details().relativeSlide)
    }
  })

  useEffect(() => {
    const prevNavigation = (evt: TouchEvent) => {

      const touchXPos = evt.touches[0].pageX
      const touchXRadius = evt.touches[0].radiusX || 0

      if (touchXPos - touchXRadius < 10 || touchXPos + touchXRadius > window.innerWidth - 10) {
        evt.preventDefault()
      }
    }

    postSliderRef.current!.addEventListener('touchstart', prevNavigation)

    return () => {
      if (postSliderRef.current) {
        postSliderRef.current!.removeEventListener('touchstart', prevNavigation)
      }
    }
  }, [])

  return (
    <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-md sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Latest posts</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Sunt minim sit nostrud adipisicing ullamco mollit irure adipisicing incididunt eiusmod mollit dolore mollit eiusmod.
          </p>
        </div>
        <div className="relative overflow-y-hidden" ref={postSliderRef}>
          <div className="absolute w-full flex items-center justify-between top-1/3 lg:top-1/2 -translate-x-1/2 ">
            <ArrowCircleLeftIcon
              className="relative text-white z-20 cursor-pointer transition transform scale-75 hover:scale-100 w-8 h-8 sm:w-16 sm:h-16 left-10 md:left-6 shadow-large"
              onClick={slider?.prev}
            />
            <ArrowCircleRightIcon
              className="relative text-white z-20 cursor-pointer transition transform scale-75 hover:scale-100 w-8 h-8 sm:w-16 sm:h-16 right-10 md:right-6"
              onClick={slider?.next}
            />
          </div>
          <div
            ref={ref}
            className="keen-slider h-full transition-opacity duration-150"
            style={{ opacity: isActive ? 1 : 0 }}
          >
            {posts.map(({ node, i }: any) => (
              <div className="keen-slider__slide" key={node.id}>
                <Link href={`/blog/${node.slug}`}>
                  <a className="flex flex-col rounded-2xl transition ease-default duration-400 overflow-hidden">
                    <div className="relative mt-16 flex-shrink-0">
                      <Image
                        className="object-cover object-center"
                        src={`${node.featuredImage?.node.sourceUrl}`}
                        alt={`${node.featuredImage?.node.altText}`}
                        width={413.33}
                        height={192}
                        quality={65}
                        priority={i === 0}
                        layout="responsive"
                      />
                      <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-black">
                          {node.tags.edges[0]?.node.name}
                        </p>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">{node.title}</p>
                          <div className="mt-3 text-base text-gray-500" dangerouslySetInnerHTML={{ __html: `${node.excerpt}` }} />
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {slider && (
        <div className="hidden relative sm:flex sm:items-center sm:justify-center sm:mt-12">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                aria-label="Position indicator"
                key={idx}
                className={cn(
                  'p-2 rounded-full focus:outline-none',
                  {
                    'bg-black': isCurrent === idx,
                  }
                )}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
              >
                <div className={cn(
                  'bg-black w-3 h-3 transition rounded-full',
                  {
                    'bg-white': isCurrent === idx
                  }
                )} />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default PostSlider