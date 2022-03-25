import React from 'react';

import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import{dark} from './styles/themes'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Home from './sections/Home';
import '../node_modules/locomotive-scroll/dist/locomotive-scroll.css' 
import { AnimatePresence } from 'framer-motion';
// const { scroll } = useLocomotiveScroll()
import { useRef } from 'react';

const App=()=> {
  const containerRef=useRef(null)
  return (
    <>
    <GlobalStyle/>
    <ThemeProvider theme={dark}>
    

    <LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
  containerRef={containerRef}
>

  <AnimatePresence>
  
  <main data-scroll-container ref={containerRef}>
    <Home/>
  </main>
  </AnimatePresence>
</LocomotiveScrollProvider>

    
    </ThemeProvider>
    </>
  
  )
}

export default App;
