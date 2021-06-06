import { NextSeo } from 'next-seo'

import { Layout } from '@components/common'
import { Pattern } from '@components/icons'

const About = () => {
  return (
    <>
      <NextSeo
        title="About"
        description="Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at."
      />
      <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-max lg:max-w-7xl mx-auto">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <h2 className="leading-6 text-black font-semibold tracking-wide uppercase">About</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What makes us different
            </p>
            </div>
          </div>
          <div className="relative">
            <Pattern className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20" />
            <Pattern className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20" />
            <div className="relative md:bg-white md:p-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                  <p>
                    Ultrices ultricies a in odio consequat egestas rutrum. Ut vitae aliquam in ipsum. Duis nullam placerat
                    cursus risus ultrices nisi, vitae tellus in. Qui non fugiat aut minus aut rerum. Perspiciatis iusto
                    mollitia iste minima soluta id.
                </p>
                  <p>
                    Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim
                    eget. Est augue maecenas risus nulla ultrices congue nunc tortor. Eu leo risus porta
                    integer suspendisse sed sit ligula elit.
                </p>
                  <ol>
                    <li>Integer varius imperdiet sed interdum felis cras in nec nunc.</li>
                    <li>Quam malesuada odio ut sit egestas. Elementum at porta vitae.</li>
                  </ol>
                  <p>
                    Amet, eu nulla id molestie quis tortor. Auctor erat justo, sed pellentesque scelerisque interdum
                    blandit lectus. Nec viverra amet ac facilisis vestibulum. Vestibulum purus nibh ac ultricies congue.
                </p>
                </div>
                <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                  <p>
                    Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim
                    eget. Est augue maecenas risus nulla ultrices congue nunc tortor.
                </p>
                  <p>
                    Eu leo risus porta integer suspendisse sed sit ligula elit. Elit egestas lacinia sagittis pellentesque
                    neque dignissim vulputate sodales. Diam sed mauris felis risus, ultricies mauris netus tincidunt.
                    Mauris sit eu ac tellus nibh non eget sed accumsan. Viverra ac sed venenatis pulvinar elit. Cras diam
                    quis tincidunt lectus. Non mi vitae, scelerisque felis nisi, netus amet nisl.
                </p>
                  <p>
                    Eu eu mauris bibendum scelerisque adipiscing et. Justo, elementum consectetur morbi eros, posuere
                    ipsum tortor. Eget cursus massa sed velit feugiat sed ut. Faucibus eros mauris morbi aliquam nullam.
                    Scelerisque elementum sit magna ullamcorper dignissim pretium.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

About.Layout = Layout