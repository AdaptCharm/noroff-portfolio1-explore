const mailchimp = require('@mailchimp/mailchimp_marketing') //No types, therefore require().

import type { NextApiRequest, NextApiResponse } from 'next'

import {
  MAILCHIMP_API_KEY,
  MAILCHIMP_API_SERVER,
  MAILCHIMP_AUDIENCE_ID
} from '@config/constants'

if (!MAILCHIMP_API_KEY || !MAILCHIMP_API_SERVER || !MAILCHIMP_AUDIENCE_ID) {
  throw new Error('Required Mailchimp API environment variables missing.')
}

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed'
    })

    return res.status(201).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}