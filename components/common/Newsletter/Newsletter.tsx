import { FC } from 'react'
import { Input, Button } from '@components/ui'

const Newsletter: FC = () => {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Sign up for our newsletter</h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Nisi exercitation amet et nulla pariatur excepteur nisi proident amet eiusmod ut voluptate ipsum laborum
            cupidatat sunt sunt et esse cillum sit qui.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <label htmlFor="emailAddress" className="sr-only">
              Email address
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              required
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <Button variant="primary">Notify me</Button>
            </div>
          </form>
          <p className="mt-3 text-sm text-gray-500">
            We care about the protection of your data. Read our{' '}
            <a href="#" target="_blank" className="font-medium underline">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter