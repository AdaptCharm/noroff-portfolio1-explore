import {
  FC,
  Fragment,
  useState
} from 'react'
import cn from 'classnames'

import { Transition } from '@headlessui/react'

import {
  CheckCircleIcon,
  ExclamationIcon,
  XCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'

interface Props {
  className?: string
  message: string
  type?: Type
}

type Type = 'success' | 'warning' | 'error' | 'info'

const Alert: FC<Props> = ({
  className,
  message,
  type = 'success',
}) => {
  const [isDisplayed, setIsDisplayed] = useState(true)

  return (
    <div aria-live="assertive" className={cn(
      'fixed z-50 inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start',
      className
    )}>
      {isDisplayed ? (
        <div className="fixed min-h-screen inset-0 bg-white bg-opacity-90 transition-opacity" />
      ) : ''}

      <div className="relative w-full flex flex-col items-center space-y-4 sm:items-end">
        <Transition
          show={isDisplayed}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="max-w-sm w-full bg-white shadow-medium rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {type === 'success' ? (
                    <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                  ) : type === 'warning' ? (
                    <ExclamationIcon className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                  ) : type === 'error' ? (
                    <XCircleIcon className="h-6 w-6 text-red-400" aria-hidden="true" />
                  ) : type === 'info' ? (
                    <ExclamationCircleIcon className="h-6 w-6 text-blue-400" aria-hidden="true" />
                  ) : ''}
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  {type === 'success' ? (
                    <p className="text-sm font-medium text-gray-900">Success</p>
                  ) : type === 'warning' ? (
                    <p className="text-sm font-medium text-gray-900">Warning</p>
                  ) : type === 'error' ? (
                    <p className="text-sm font-medium text-gray-900">Error</p>
                  ) : type === 'info' ? (
                    <p className="text-sm font-medium text-gray-900">Info</p>
                  ) : ''}
                  <p className="mt-1 text-sm text-gray-500">{message}</p>
                </div>
                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-transparent"
                    onClick={() => {
                      setIsDisplayed(false)
                    }}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}

export default Alert