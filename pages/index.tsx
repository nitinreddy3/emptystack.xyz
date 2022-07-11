import Head from 'next/head';
import About from "../components/About";

export default function Home ()
{
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>EmptyStack</title>
        <link rel="icon" href="/code.png" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About />
      </main>
    </div>
  );
}