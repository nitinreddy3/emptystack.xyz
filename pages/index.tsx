import Head from 'next/head';
import About from "../components/About";

export default function Home ()
{
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <meta name="description" content="SiteName: emptystack.dev, Author: Nitin Reddy, Emaild: reddynitin3@gmail.com" />
        <title>EmptyStack.dev is here to stay</title>
        <link rel="icon" href="/code.png" />
        <link rel="apple-touch-icon" href="/code.png"/>
        <meta name="theme-color"/>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <link
          rel="canonical"
          href="https://emptystack.dev"
          key="canonical"
        />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About />
      </main>
    </div>
  );
}