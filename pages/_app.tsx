import { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function MyApp ( { Component, pageProps }: AppProps )
{
  useEffect( () =>
  {
    if ( "serviceWorker" in navigator )
    {
      window.addEventListener( "load", function ()
      {
        navigator.serviceWorker.register( "/sw.js" ).then(
          function ( registration )
          {
            console.log( "Service Worker registration successful with scope: ", registration.scope );
          },
          function ( err )
          {
            console.log( "Service Worker registration failed: ", err );
          }
        );
      } );
    }
  }, [] );
  return (
    <ThemeProvider attribute="class" enableSystem={ false }>
      <Navigation />
      <Component { ...pageProps } />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
