import type { AppProps } from 'next/app'
import { ChakraProvider, Link } from '@chakra-ui/react'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { theme } from '../styles/theme'
import '../styles/style.css'
import { linkResolver, repositoryName } from '../services/prismic'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }: any) => (
          <Link href={href}>
            <a {...props}>{children}</a>
          </Link>
        )}
      >
        <Component {...pageProps} />
      </PrismicProvider>
    </ChakraProvider>
  )
}

export default MyApp
