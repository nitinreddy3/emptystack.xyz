import React from "react"
import Image from "next/image"

const Blog = () => {
  const data = [
    {
      name: 'URL Builder',
      url: 'https://github.com/nitinreddy3/nkr_urlbuilder',
      imageUrl: 'https://media-exp1.licdn.com/dms/image/sync/C5627AQGwwCazTsIesw/articleshare-shrink_800/0/1656724472620?e=1658332800&v=beta&t=4Fl18HLWYz6DkknZTUQtTVVZmU4JRMxL5_inixxZ7aA'
    },
    {
      name: 'React-NG SPA',
      url: 'https://github.com/nitinreddy3/react-ng-spa-app',
      imageUrl: 'https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/React-vs.-Angular-Which-One-You-Should-Opt-For--1024x576.png'
    },
    {
      name: 'Drag N Drop',
      url: 'https://github.com/nitinreddy3/dnd-magic-box',
      imageUrl: 'https://marvelapp.com/wp-content/uploads/2018/03/Group-2.png'
    }
  ]

  return (
    <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
      <div className="lg:space-x-12 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:mt-12">
          <h1 className="text-center text-2xl font-bold text-emerald-900 lg:text-5xl dark:text-white">
            Projects
          </h1>
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
              {
                data.map(({ name, url, imageUrl }) => (<a className="card w-96 m-8 border-2 dark:text-white" href={url} target="_blank" key={url}>
                  <Image src={imageUrl} alt={name} width="300" height="150" />
                  <p className=" dark:text-emerald-900 text-black">{name}</p>
                </a>))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;