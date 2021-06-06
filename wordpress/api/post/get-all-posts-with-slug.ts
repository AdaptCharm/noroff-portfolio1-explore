import fetchAPI from '..'

const getAllPostsWithSlug = async () => {
  const data = await fetchAPI(/* GraphQL */`
    query AllPostsWithSlug {
      posts(first: 100) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  return data?.posts
}

export default getAllPostsWithSlug