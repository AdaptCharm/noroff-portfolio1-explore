import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { getPost, getAllPostsWithSlug } from '@wordpress/api/post'

import { Layout } from '@components/common'
import { Alert } from '@components/ui'
import { PostView } from '@components/post'

export const getStaticProps = async ({
  params
}: GetStaticPropsContext<{ slug: string }>) => {
  const post = await getPost(params!.slug)

  if (!post) {
    throw new Error(`Post with path '${params!.slug}' not found`)
  }

  return {
    props: {
      post,
      title: post.post?.title || null
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPostsWithSlug()

  return {
    paths: posts?.edges?.map(({ node }: any) => ({
      params: {
        slug: node.slug,
      },
    })),
    fallback: true
  }
}

const Slug = ({
  post,
  title
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback } = useRouter()

  if (isFallback || !post) {
    return (
      <>
        <NextSeo
          title="Not found"
          description="Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at."
        />
        <Alert
          type="error"
          message="Blog page not found."
        />
      </>
    )
  }

  return (
    <>
      <NextSeo
        title={title}
        description="Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at."
      />
      <PostView node={post} />
    </>
  )
}

export default Slug

Slug.Layout = Layout