import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

export const theme = extendTheme({
  config,
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#D1D2DC',
      '50': '#EEEEF2',
    },
    blue: {
      '0': '#3294F8',
    },
    white: {
      '900': '#DFDFDF',
      '800': '#E0E0E0',
      '700': '#E4E4E4',
      '600': '#E7E7E7',
      '500': '#EAEAEA',
      '400': '#EEEEEE',
      '300': '#F0F0F0',
      '200': '#F3F3F3',
      '100': '#F1F1F1',
    },
    text: {
      '0': '#6E6E6E',
    },
    bg: {
      '0': '#252525',
    },
  },
  fonts: {
    body: 'Source-Sans-Pro, system-ui, sans-serif',
    heading: 'Poppins, sans-serif',
    mono: 'Poppins, Menlo, monospace',
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.800' : '#fff',
        color: props.colorMode === 'dark' ? 'white.100' : 'gray.900',
      },
    }),
  },
})
