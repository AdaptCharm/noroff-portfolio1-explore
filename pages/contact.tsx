import {
  useEffect,
  useState,
  useCallback
} from 'react'
import { NextSeo } from 'next-seo'

import { validate } from 'email-validator'

import { Layout } from '@components/common'
import { Pattern } from '@components/icons'
import {
  Input,
  Textarea,
  Button,
  Alert
} from '@components/ui'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [alert, setAlert] = useState('')
  const [isPassed, setIsPassed] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const handleContact = async (evt: React.SyntheticEvent<EventTarget>) => {
    evt.preventDefault()

    if (!isPassed && !isDisabled) {
      setIsPassed(true)
      handleValidation()
    }

    try {
      setAlert('')
    } catch ({ errors }) {
      setAlert(errors[0].message)
    }
  }


  const handleValidation = useCallback(() => {
    if (isPassed) {
      setIsDisabled(name.length <= 5 || !validate(email) || subject.length <= 15 || message.length <= 25)
    }
  }, [name, email, subject, message, isPassed])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  return (
    <>
      <NextSeo
        title="Contact"
        description="Sagittis viverra pulvinar laoreet venenatis duis. Arcu in venenatis sem pharetra pretium pharetra at."
      />
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <Pattern
            height={404}
            className="absolute left-full transform translate-x-1/2"
          />
          <Pattern
            height={404}
            className="absolute right-full bottom-0 transform -translate-x-1/2"
          />
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact us</h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Mollit ullamco consequat est ipsum qui veniam. Sit ullamco laboris mollit dolore ullamco est ullamco.
          </p>
          </div>
          <div className="mt-12">
            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" onSubmit={handleContact}>
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <Input
                    type="text"
                    onChange={setName}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <Input
                    type="email"
                    onChange={setEmail}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <div className="mt-1">
                  <Input
                    type="text"
                    onChange={setSubject}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <Textarea
                    onChange={setMessage}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <Button>Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

Contact.Layout = Layout