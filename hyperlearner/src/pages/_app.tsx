import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react"
import React from "react"
import Navbar from "../components/Navbar"
import { createClient, Provider } from 'urql';
import cors from "cors"

const client = createClient({
  url: 'https://potato-hyperlearner.herokuapp.com/graphql',
  fetchOptions: {
    credentials: "include",
    mode:"cors",
  },
  
});

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1D2D50",
    800: "#133B5C",
    700: "#1E5F74",
    600: "#FCDAB7",
    // 500: "#FFB344",
    // 400: "#FBDCC4",
  },
}

const theme = extendTheme({ colors })

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component,pageProps }) {
  return (
    <Provider value={client}>
    <ChakraProvider theme={theme}>
      <Box bgGradient="url('bg-2.jpg')" backgroundRepeat="no-repeat" height="100%" backgroundAttachment="fixed" minHeight="1080px">
      <Navbar/>
      <Component {...pageProps} />
      </Box>
    </ChakraProvider>
    </Provider>
  )
}
export default MyApp