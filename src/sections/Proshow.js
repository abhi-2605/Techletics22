import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { useRef } from "react";

import { motion } from "framer-motion";
import img1 from "../assets/images/p1.jpeg";
import img2 from "../assets/images/p2.jpeg"
import img3 from "../assets/images/p3.jpeg"



const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    color:white;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    color:white;
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
      color:white;
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
      color:white;
    }
  }

  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
      color:white;
    }
  }
`;
const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
    image-rendering: auto;
    image-rendering: crisp-edges;
    image-rendering: pixelated;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Proshow = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          pin: true,
          // markers:true,
        },
      
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none,",
      });

      // Horizontal Scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", 
          scrub: true,

          // markers:true,
        },
        
        x: -pinWrapWidth,
        ease: "none,",
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
     
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="event">
      <Title data-scroll data-scroll-speed="-1">
        Events
      </Title>
      <Left>
        <p>
        Techletics ‘22 is the Tech Fest of Christ College of Engineering that is intended 
      to be conducted in the first week of May, 2022. Techletics ‘22 is the second 
      chapter to the rendezvous of innovation and zest, which began first in 2019 with Techletics‘19.
          <br />
          <br />
          Techletics ‘22 is the Tech Fest of Christ College of Engineering that is intended 
      to be conducted in the first week of May, 2022. Techletics ‘22 is the second 
      chapter to the rendezvous of innovation and zest, which began first in 2019 with Techletics‘19.
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Product img={img1} title="ProShow" />
        <Product img={img2} title="ProShow" />
        <Product img={img3} title="ProShow" />
        <Product img={img1} title="ProShow" />
        <Product img={img2} title="ProShow" />
        <Product img={img3} title="ProShow" />
        <Product img={img1} title="ProShow" />
        <Product img={img2} title="ProShow" />
        <Product img={img3} title="ProShow" />
        <Product img={img1} title="ProShow" />
        <Product img={img2} title="ProShow" />
        <Product img={img3} title="ProShow" />
      </Right>
    </Section>
  );
};

export default Proshow;
