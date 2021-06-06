import {
  FC,
  useEffect,
  useState
} from 'react'

const ProgressBar: FC = () => {
  const [hasScrolled, setHasScrolled] = useState(0)

  useEffect(() => {
    const scrollHandler = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const windowHeight = scrollHeight - clientHeight

      const scrolled = scrollTop / windowHeight

      setHasScrolled(scrolled)
    }

    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [hasScrolled])

  return (
    <div className="fixed top-0 left-0 w-full opacity-60 z-40">
      <div
        className="h-20 sm:h-30 origin-top-left bg-gradient-to-l from-gray-50 to-white scale-0 opacity-0"
        style={{
          transform: `scale(${hasScrolled}, 1)`,
          opacity: `${hasScrolled}`
        }}
      />
    </div>
  )
}

export default ProgressBar