import { FC, Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { Explore } from '@components/icons'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Tooltip } from 'react-tippy'

const pages = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

const Navbar: FC = () => {
  return (
    <Popover
      className="fixed inset-x-0 z-50"
      style={{
        backgroundColor: 'hsla(0, 0%, 100%, 0.9)',
        backdropFilter: 'saturate(180%) blur(5px)'
      }}
    >
      {({ open }) => (
        <>
          <div className="h-20 sm:h-30">
            <div className="grid grid-cols-navbar grid-flow-row grid-rows-none gap-5 h-full">
              <div className="col-start-2 col-end-auto flex items-center justify-between h-full">
                <div className="flex items-center justify-start">
                  <Tooltip
                    title="Home"
                    position="bottom"
                    size="small"
                    animation="scale"
                    duration={10}
                    style={{ display: 'inline-flex' }}
                  >
                    <Link href="/">
                      <a className="flex items-center gap-x-2">
                        <Explore className="w-auto h-8 sm:h-10" />
                        <span>Explore</span>
                      </a>
                    </Link>
                  </Tooltip>
                </div>
                <div className="flex items-center justify-start">
                  <div className="flex items-center">
                    <div className="relative">
                      <Tooltip
                        title="Show menu"
                        position="bottom"
                        size="small"
                        animation="scale"
                        duration={10}
                        style={{ display: 'inline-flex' }}
                      >
                        <Popover.Button className="flex items-center justify-center bg-transparent rounded-md w-10 h-10 border-none transition ease-default duration-400 text-gray-700 hover:p-2 hover:bg-link hover:shadow-small focus:outline-none focus:ring-transparent">
                          <span className="sr-only">Open menu</span>
                          <MenuIcon className="w-6 h-6" />
                        </Popover.Button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Transition.Root show={open} as={Fragment}>
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 transform transition origin-center"
            >
              <div className="relative sm:flex sm:items-center sm:justify-center sm:content-center min-h-full p-2">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-400 lg:duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-400 lg:duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Overlay className="fixed min-h-screen inset-0 bg-white bg-opacity-90 transition-opacity" />
                </Transition.Child>

                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-200 lg:duration-250"
                  enterFrom="opacity-0 -translate-1/2 scale-0"
                  enterTo="opacity-100 translate-0 scale-100"
                  leave="ease-in duration-200 lg:duration-250"
                  leaveFrom="opacity-100 translate-0 scale-100"
                  leaveTo="opacity-0 -translate-1/2 scale-0"
                >
                  <div className="relative sm:w-150 transform transition-all rounded-2xl shadow-smallest ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                          <Explore className="w-auto h-8" />
                          <span>Explore</span>
                        </div>
                        <div className="flex items-center">
                          <div className="relative">
                            <Popover.Button className="flex items-center justify-center bg-transparent rounded-md w-10 h-10 border-none transition ease-default duration-400 text-gray-900 hover:opacity-60 hover:p-2 hover:shadow-small focus:outline-none">
                              <span className="sr-only">Close menu</span>
                              <XIcon className="w-6 h-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="py-6 px-5 space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-8">
                        {pages.map((page) => (
                          <Link href={page.href} key={page.name}>
                            <a className="text-base font-normal text-gray-900 hover:opacity-60 focus:outline-none focus:ring-transparent">
                              {page.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Popover.Panel>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

export default Navbar