import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import {theme} from "../presentation/theme/Theme";
import {GlobalStyle} from "../presentation/theme/GlobalStyle";
// Import fonts so they apply app-wide
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/300.css"
// Import a focus hack so it applies app-wide
import 'focus-visible/dist/focus-visible'
// Import Swiper styles
import 'swiper/css';
import Head from "next/head";

function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
      <>
          <Head>
              <title>Brailliac</title>
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
              <link rel="manifest" href="/site.webmanifest" />
              <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7c3461" />
              <meta name="msapplication-TileColor" content="#7c3461" />
              <meta name="theme-color" content="#ffffff" />
          </Head>
          <ChakraProvider theme={theme}>
              <GlobalStyle />
              <Component {...pageProps} />
          </ChakraProvider>
      </>
  )
}

export default App
