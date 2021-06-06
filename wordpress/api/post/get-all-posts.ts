import fetchAPI from '..'

const getAllPosts = async (preview: boolean) => {
  const data = await fetchAPI(/* GraphQL */`
    query getAllPosts {
      posts(where: { orderby: { field: DATE, order: DESC}}) {
        edges {
          node {
            id
            title
            slug
            excerpt
            tags {
              edges {
                node {
                  name
                }
              }
            }
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            author {
              node {
                avatar {
                  url
                }
                name
              }
            }
          }
        }
      }
    }
  `)

  return data?.posts
}

export default getAllPosts