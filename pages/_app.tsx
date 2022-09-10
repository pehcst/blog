import type { AppProps } from 'next/app'
import { ChakraProvider, Link } from '@chakra-ui/react'
import { PrismicProvider } from '@prismicio/react'
import { theme } from '../styles/theme'
import '../styles/style.css'
import { linkResolver } from '../services/prismic'
import * as gtag from '../lib/gtag'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
        `,
            }}
          />
        </>
      )}
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
