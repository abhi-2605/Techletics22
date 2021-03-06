import React from 'react';

import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import{dark} from './styles/themes'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Home from './sections/Home';
import '../node_modules/locomotive-scroll/dist/locomotive-scroll.css' 
import { AnimatePresence } from 'framer-motion';
// const { scroll } = useLocomotiveScroll()
import { useRef ,useState,useEffect } from 'react';
import About from './sections/About';
import Proshow from './sections/Proshow';
import ScrollTriggerProxy from './components/ScrollTriggerProxy';
import Banner from './sections/Banner';
import NewEvents from './sections/NewEvents';
import Loader from './components/Loader';

const App=()=> {
  const containerRef=useRef(null)
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, [])
  
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
        {loaded ? null : <Loader/>}
</AnimatePresence>
<ScrollTriggerProxy/>
  <AnimatePresence>
  
  <main className='App' data-scroll-container ref={containerRef}>
    <Home/>
    <About/>
    <Proshow/>
    <Banner/>
    <NewEvents/>
  </main>
  </AnimatePresence>
</LocomotiveScrollProvider>

    
    </ThemeProvider>
    </>
  
  )
}

export default App;
