import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { SketchPicker } from 'react-color';
import { Logo } from './Logo';
import WithSubnavigation from './components/NavBar';
import { extendTheme } from '@chakra-ui/react';
import MediaKitTool from './components/MediaKitTool';
import Header from './components/Header';
import '@fontsource/raleway/600.css';
import '@fontsource/open-sans/400.css';

const redtheme = extendTheme({
  colors: {
    redyel: {
      100: "#ED9B40", // mellow yellow
      200: "#F6C58E", // pale yellow
      300: "#FFEEDB", // beige white
      400: "#F6D6C2", // pale pink (red 1)
      500: "#ECBEA8", // red 2
      600: "#D88E74", // red 3
      700: "#C45E40", // red 4
      800: "#B02E0C", // bright red (red 5)
      900: "#230C06" // essentially black w/ red
    },
    beige: {
      50: "#E9E1D8", // lightest
      100: "#DACEBE", // bone
      150: "#D2C2B1", // light khaki
      200: "#C7B1A0", // khaki
      300: "#B09582", // beige
      400: "#765E56", // light brown
      500: "#382D2A", // dark brown
      600: "#231C1A" // black brown
    }
  },
  fonts: {
    body: `'Open Sans', sans-serif`,
    heading: `'Raleway', sans-serif`,
  },
});

function App() {

  return (
    <ChakraProvider theme={redtheme}>
      <WithSubnavigation theme={redtheme}/>
      <Box 
        textAlign="center" 
        fontSize="xl"
        bgGradient="linear(to-t, redyel.600, redyel.500)"
        p='10'>
        <Grid minH="100vh" p={1}>
        <VStack spacing={1}>
          <Header />
          <MediaKitTool theme={redtheme}/>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
