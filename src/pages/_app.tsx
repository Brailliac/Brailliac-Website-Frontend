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

function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <ChakraProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
