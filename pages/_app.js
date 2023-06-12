import '@/styles/globals.css'
import { NextUIProvider,createTheme } from '@nextui-org/react';


const lightTheme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

const myDarkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // brand colors
      background: '#1d1d1d',
      text: '#fff',
      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',

      // you can also create your own color
      myDarkColor: '#ff4ecd'
      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider theme={myDarkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
