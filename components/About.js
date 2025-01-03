import Image from "next/image"
import Link from "next/link"
import SocialLinks from "./SocialLinks"


const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">

        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Link href="https://app.daily.dev/nitinreddy3" rel="noreferrer"><Image src="https://api.daily.dev/devcards/e80b5cd7453c4402aa5c5320adaf04c4.png?r=93f" alt="Nitin Reddy's Dev Card" width="400" height="550" /></Link>
          <div className="flex justify-center mt-6">
            <div className="flex md:flex lg:flex space-x-4 font-medium text-emerald-800 sm:block dark:text-white">
              <SocialLinks type="profile" />
            </div>
          </div>
        </div>
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-emerald-900 lg:text-5xl dark:text-white">
            Nitin Reddy...
          </h1>
          <div className="mt-6 text-emerald-800 dark:text-white">
            <p className="mb-6">
              JavaScript <Link href="https://dev.to/nitinreddy3"
                className={"transition-colors hover:text-blue-500"}
                target="_blank"
                rel="noreferrer" aria-label="DEV"><svg style={{ display: 'inline-block' }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title>DEV</title><path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"></path></svg></Link> with a learning attitude for the latest technological trends. I believe coding is an art and it should be meaningful to everyone.
            </p>
            <p className="mb-6">
              {`I love exploring new technologies like Flutter and python. I'm a self-taught developer with a passion for learning and building things. Currently working as a Senior Software Engineer at `}<Link legacyBehaviorclassName={"transition-colors hover:text-blue-500"} href="https://www.iglooinsure.com" target="_blank" rel="noreferrer"><b>Igloo</b></Link>.
            </p>
            <p>
              <b>{`Let's learn, grow and excel together.⚛🚀`}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
