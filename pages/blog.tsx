import type {
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next'
import { NextSeo } from 'next-seo'

import { getAllPosts } from '@wordpress/api/post'

import { Layout } from '@components/common'
import { PostCard } from '@components/post'

export const getStaticProps = async ({
  preview = false
}: GetStaticPropsContext) => {
  const allPosts = await getAllPosts(preview)

  return {
    props: {
      allPosts
    }
  }
}

const Blog = ({
  allPosts: { edges }
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const posts = edges

  return (
    <>
      <NextSeo
        title="Blog"
        description="Laoreet sagittis viverra pulvinar duis. Pharetra in venenatis sem arcu pretium pharetra at."
      />
      {posts.length > 0 && <PostCard posts={posts} />}
    </>
  )
}

export default Blog

Blog.Layout = Layout