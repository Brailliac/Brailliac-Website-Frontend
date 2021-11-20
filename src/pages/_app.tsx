import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"

function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default App
