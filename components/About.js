import React from "react"
import Image from "next/image"
import Link from "next/link"

import profile from "../public/profile.png"

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Hey, I'm Nitin Reddy.
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              JavaScript <a href="https://dev.to/nitinreddy3" target="_blank" ><img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Nitin Reddy's DEV Profile" height="30" width="30" style={{ display: 'inline-block' }} /></a> with a learning attitude for the latest technological trends. I believe coding is an art and it should be meaningful to everyone.
            </p>
            <p className="mb-4">
              I love exploring new technologies like Flutter and python. Currently working as a Senior Software Engineer at AppDirect.
            </p>
            <p className="mb-4">
              I'm a software engineer based in India. I'm a self-taught developer with a passion for learning and building things.
            </p>
            <p>
              <b>Let's learn, grow and excel together.⚛🚀</b>
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  )
}

export default About;