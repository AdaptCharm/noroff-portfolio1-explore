import type {
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next'

import { getAllPosts } from '@wordpress/api/post'

import { Layout } from '@components/common'
import { Feature } from '@components/ui'
import { PostSlider, PostCard } from '@components/post'

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

const Home = ({
  allPosts: { edges }
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const posts = edges

  return (
    <>
      <Feature
        keyword={{
          name: "Exotic travel destinations",
          color: "pink"
        }}
        content={{
          title: "Get inspiration for your next journey",
          description: "Fugiat consectetur enim lorem eiusmod reprehenderit enim ipsum pariatur ea laborum deserunt ipsum ipsum anim aliquip elit ea consectetur occaecat magna quis."
        }}
        image={{
          url: "/maldives/bungalows-sunset.jpeg",
          altText: "Bungalows in the heart of maldives at sunset",
          priority: true
        }}
      />
      <Feature
        keyword={{
          name: "White sand beaches",
          color: "blue"
        }}
        content={{
          title: "Only the most exotic places are visited",
          description: "Voluptate dolor elit occaecat sint ut eiusmod elit cupidatat esse eu incididunt tempor aute proident dolore irure et occaecat laborum amet commodo qui voluptate fugiat."
        }}
        image={{
          url: "/boracay/white-sand-beach.jpeg",
          altText: "Boracay's famous white sand beach"
        }}
      />
      <PostSlider posts={posts} />
      {posts.length > 0 && <PostCard posts={posts.slice(3, 6)} />}
    </>
  )
}

export default Home

Home.Layout = Layout