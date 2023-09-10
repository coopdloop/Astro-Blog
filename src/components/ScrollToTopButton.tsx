import { useEffect, useState } from 'react'
// import { BiArrowFromBottom } from 'react-icons/bi'

import { ArrowUpIcon } from '@radix-ui/react-icons'
import { classNames } from '@/lib/utils'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-24 right-2 z-40">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2',
        )}
      >
        <ArrowUpIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}