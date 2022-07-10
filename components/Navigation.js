import Link from "next/link"
import React from "react"
import ThemeSwitch from "../components/ThemeSwitch"

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href="/">
          <a
            className={"font-medium tracking-wider transition-colors text-orange-900 hover:text-sky-500 uppercase dark:text-white"}
          >
            Nitin Reddy
          </a>
        </Link>
        <div className="flex items-center">
          {/* <Link href="/">
            <a
              className={"font-medium tracking-wider transition-colors text-orange-900 hover:text-sky-500 dark:text-white"}
            >
              About
            </a>
          </Link> */}
          {/* <Link href="/Blog">
            <a
              className={"font-medium tracking-wider transition-colors text-orange-900 hover:text-sky-500 dark:text-white"}
            >
              Blog
            </a>
          </Link> */}
        </div>

        <ThemeSwitch />
      </div>
    </div>
  )
}

export default Navigation;