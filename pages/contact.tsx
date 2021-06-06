import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { NextSeo } from 'next-seo'

import { Layout } from '@components/common'
import { Pattern } from '@components/icons'
import {
  Button,
  Alert
} from '@components/ui'

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [alert, setAlert] = useState('')

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>()

  const onSubmit = () => {
    reset({ name: '', email: '', subject: '', message: '' }, { keepErrors: false })
    setAlert('You are now subscribed to the newsletter!')
  }

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
            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" onSubmit={handleSubmit(onSubmit)} autoComplete="false">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    className="py-3 px-4 rounded-md block w-full transition ease-default focus:outline-none focus:ring-transparent border-1 focus:border-gray-900 border-gray-200"
                    type="text"
                    id="name"
                    {...register('name', {
                      required: 'The name is required',
                      minLength: { value: 5, message: 'The name must be minimum 5 characters long' }
                    })}
                  />
                  {errors.name && <p className="mt-2">{errors.name.message}.</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    className="py-3 px-4 rounded-md block w-full transition ease-default focus:outline-none focus:ring-transparent border-1 focus:border-gray-900 border-gray-200"
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'The email address is required',
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: 'Please enter a valid email address'
                      }
                    })}
                  />
                  {errors.email && <p className="mt-2">{errors.email.message}.</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <div className="mt-1">
                  <input
                    className="py-3 px-4 rounded-md block w-full transition ease-default focus:outline-none focus:ring-transparent border-1 focus:border-gray-900 border-gray-200"
                    type="text"
                    id="subject"
                    {...register('subject', {
                      required: 'The subject is required',
                      minLength: {
                        value: 15,
                        message: 'The subject must be minimum 15 characters long'
                      }
                    })}
                  />
                  {errors.subject && <p className="mt-2">{errors.subject.message}.</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    className="py-3 px-4 rounded-md block w-full transition ease-default focus:outline-none focus:ring-transparent border-1 focus:border-gray-900 border-gray-200"
                    id="message"
                    {...register('message', {
                      required: 'The message is required',
                      minLength: {
                        value: 25,
                        message: 'The message must be minimum 25 characters long'
                      }
                    })}
                  />
                  {errors.message && <p className="mt-2">{errors.message.message}.</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <Button>Submit</Button>
              </div>
              {alert && (
                <Alert
                  type="info"
                  message={alert}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

Contact.Layout = Layout