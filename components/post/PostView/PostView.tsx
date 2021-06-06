import { FC } from 'react'
import { Pattern } from '@components/icons'
import Image from 'next/image'

import { PostBySlugQuery } from '@wordpress/graphql-operations'

interface Props {
  node: PostBySlugQuery
}

const PostView: FC<Props> = ({ node }) => {

  return (
    <>
      {node.post && (
        <div className="relative py-16 bg-white overflow-hidden">
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
              <Pattern className="absolute top-12 left-full transform translate-x-32" />
              <Pattern className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" />
              <Pattern className="absolute bottom-12 left-full transform translate-x-32" />
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-center text-black font-semibold tracking-wide uppercase">
                  {node.post?.title?.split(' ').splice(-1)}
                </span>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {node.post?.title}
                </span>
              </h1>
              <div className="mt-8">
                <Image
                  className="w-full rounded-lg"
                  src={`${node.post?.featuredImage?.node?.sourceUrl}`}
                  alt={`${node.post?.featuredImage?.node?.altText}`}
                  width={1310}
                  height={873}
                />
              </div>
              <div className="mt-8 text-xl text-gray-500 leading-8" dangerouslySetInnerHTML={{ __html: `${node.post?.excerpt}` }} />
            </div>
            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto" dangerouslySetInnerHTML={{ __html: `${node.post?.content}` }} />
          </div>
        </div>
      )}
    </>
  )
}

export default PostView