import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { GetAllPostsQuery } from '@wordpress/graphql-operations'

interface Props {
  posts: GetAllPostsQuery[]
}

const PostCard: FC<Props> = ({ posts }) => {
  return (
    <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Blog</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Nisi laboris proident reprehenderit ea voluptate exercitation ut labore excepteur est cupidatat exercitation reprehenderit.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map(({ node }: any) => (
            <Link href={`/blog/${node.slug}`} key={node.id}>
              <a className="flex flex-col rounded-2xl transition ease-default duration-400 hover:shadow-medium overflow-hidden">
                <div className="flex-shrink-0">
                  <Image
                    className="object-cover object-center"
                    src={`${node.featuredImage?.node.sourceUrl}`}
                    alt={`${node.featuredImage?.node.altText}`}
                    width={413.33}
                    height={192}
                    quality={65}
                    layout="responsive"
                  />
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
                  <div className="flex justify-end">
                    <div className="mt-6 flex items-center">
                      <div className="flex items-center flex-shrink-0">
                        <Image
                          className="object-cover object-center rounded-full"
                          src={`${node.author.node.avatar.url}`}
                          alt={node.author.node.name}
                          width={40}
                          height={40}
                          quality={65}
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium capitalize text-gray-900">
                          {node.author.node.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostCard