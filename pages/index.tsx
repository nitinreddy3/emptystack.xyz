import { NextSeo } from 'next-seo';
import Head from 'next/head';
import About from "../components/About";

export default function Home() {
  return (<>
    <NextSeo
      title="Coderman dev - Nitin Reddy"
      description="This is Nitin Reddy - a coderman developer"
    />
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <meta name="description" content="SiteName: emptystack.dev, Author: Nitin Reddy, Emaild: reddynitin3@gmail.com" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=6" />
        <meta name="theme-color" content="#000" />
        <title>Coderman dev is here to stay</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/code.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
  </>
  );
}