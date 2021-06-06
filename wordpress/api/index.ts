import {
  WP_API_URL,
  WP_API_ACCESS_NAME,
  WP_API_ACCESS_SECRET
} from '../constants'

if (!WP_API_URL || !WP_API_ACCESS_NAME || !WP_API_ACCESS_SECRET) {
  throw new Error('Required environment variables missing.')
}

const encodedAuthData = Buffer.from(`${WP_API_ACCESS_NAME}:${WP_API_ACCESS_SECRET}`).toString('base64')

const fetchAPI = async (query: string, { variables }: any = {}) => {
  const res = await fetch(WP_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${encodedAuthData}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  const json = await res.json()

  if (json.errors) {
    throw new Error(`Unable to fetch API, ${json.errors}.`)
  }

  return json.data
}

export default fetchAPI