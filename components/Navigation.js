import Link from "next/link"
import React, { useState } from "react"
import ThemeSwitch from "../components/ThemeSwitch"

function MobileNav({ open, setOpen }) {
  return (
    <div className={`absolute top-0 left-0 h-screen w-48 bg-white dark:bg-black transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
      <div className="flex flex-col items-center">
        <Link href="/">
          <a
            className={"font-medium tracking-wider transition-colors text-emerald-900 hover:text-sky-500 dark:text-white"}
            onClick={() => setTimeout(() => { setOpen(!open) }, 100)}
          >
            About
          </a>
        </Link>
        <Link href="/blog">
          <a
            className={" font-medium tracking-wider transition-colors text-emerald-900 hover:text-sky-500 dark:text-white"}
            onClick={() => setTimeout(() => { setOpen(!open) }, 100)}
          >
            Blog
          </a>
        </Link>
        <Link href="/projects">
          <a
            className={" font-medium tracking-wider transition-colors text-emerald-900 hover:text-sky-500 dark:text-white"}
            onClick={() => setTimeout(() => { setOpen(!open) }, 100)}
          >
            Projects
          </a>
        </Link>
      </div>
    </div>
  )
}

const Navigation = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between ">
        <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
          setOpen(!open)
        }}>
          {/* hamburger button */}
          <span className={`h-1 w-full bg-emerald-900 dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
          <span className={`h-1 w-full bg-emerald-900 dark:bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
          <span className={`h-1 w-full bg-emerald-900 dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
        </div>
        <Link href="/">
          <a
            className={"font-medium tracking-wider transition-colors text-emerald-900 hover:text-sky-500 uppercase dark:text-white"}
          >
            Nitin Reddy
          </a>
        </Link>
        <div className="flex items-center">
          <div className="navbar md:flex lg:flex space-x-4 font-medium text-gray-800  sm:block dark:text-white">
            <Link href="/">
              <a
                className={"font-medium tracking-wider transition-colors text-emerald-900 hover:text-sky-500 dark:text-white"}
              >
                About
              </a>
            </Link>
            <Link href="/blog">
              <a
                className={" font-medium tracking-wider transition-colors text-emerald-900 hover:text-sky-500 dark:text-white"}
              >
                Blog
              </a>
            </Link>
            <Link href="/projects">
              <a
                className={" font-medium tracking-wider transition-colors text-emerald-900 hover:text-sky-500 dark:text-white"}
              >
                Projects
              </a>
            </Link>
          </div>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  )
}

export default Navigation;