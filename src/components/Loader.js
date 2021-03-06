import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  touch-action: none;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  svg {
    width: 20vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
   

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }

  @media (max-width: 48em) {
    svg {
      width: 20vw;
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.text};
  font-family:Kaushan Script;
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Loader = () => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "-100%",
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
    >
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="2550.000000pt" height="2550.000000pt" viewBox="0 0 2550.000000 2550.000000"
 preserveAspectRatio="xMidYMid meet">                            //   namude logode svg file

<g transform="translate(0.000000,2550.000000) scale(0.100000,-0.100000)"
fill="#000000" variants={pathVariants}>
<path d="M10420 18585 l0 -235 610 0 610 0 0 235 0 235 -610 0 -610 0 0 -235z"/>
<path d="M10967 18240 l-2507 -5 411 -417 411 -418 2594 0 2594 0 0 -169 0
-169 505 -381 c354 -268 511 -380 523 -376 26 8 69 76 98 151 66 177 78 341
69 1019 -7 568 -9 593 -60 667 -17 25 -47 47 -92 70 l-68 33 -985 0 c-542 0
-2113 -2 -3493 -5z"/>
<path d="M10326 17228 c-13 -77 -28 -1766 -18 -1928 17 -263 71 -430 179 -550
30 -34 251 -190 706 -501 364 -249 703 -481 754 -516 l92 -64 -65 138 c-134
281 -226 524 -263 695 -61 280 -71 529 -71 1751 l0 1007 -655 0 -654 0 -5 -32z"/>
<path d="M14518 16783 c42 -104 223 -547 402 -986 179 -438 327 -797 330 -797
6 0 391 1051 390 1065 -1 9 -1169 895 -1190 903 -5 2 26 -81 68 -185z"/>
<path d="M14461 16588 c-21 -68 -204 -419 -372 -713 -86 -148 -312 -535 -504
-860 -192 -324 -406 -691 -477 -815 -303 -528 -366 -722 -219 -680 98 28 121
50 1081 1068 l937 993 -214 522 c-118 287 -216 523 -217 525 -2 1 -8 -17 -15
-40z"/>
<path d="M10817 13893 c173 -395 319 -722 324 -727 7 -8 947 262 985 283 9 5
-1585 1148 -1615 1159 -5 2 133 -320 306 -715z"/>
<path d="M11782 13235 c-216 -67 -395 -125 -398 -128 -7 -7 112 -213 379 -656
558 -925 1071 -1697 1383 -2077 90 -111 161 -178 212 -202 30 -15 34 -15 50 1
54 55 -20 356 -185 752 -168 404 -1012 2367 -1036 2410 -12 21 -15 21 -405
-100z"/>
<path d="M12470 10522 c-118 -179 -216 -329 -218 -334 -2 -4 183 -8 412 -8
229 0 416 2 416 5 0 9 -371 639 -384 652 -8 8 -65 -71 -226 -315z"/>
</g>
</svg>

        
      <Text variants={textVariants} initial="hidden" animate="visible">
        Techletics'22
      </Text>
    </Container>
  );
};

export default Loader;
