import React from "react";
import styled from "styled-components";

import img1 from "../assets/images/prevtech2.jpg";
import img2 from "../assets/images/prevtech3.jpg";  
import img3 from "../assets/images/prevtech1.jpg";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;

  margin: 0 auto;

  @media (max-width: 48em) {
    width: 90vw;
  }
  @media (max-width: 30em) {
    width: 100vw;
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0;
    color:white;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
    color:white;
  }
`;
const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    width: 70%;
  }
`;
const Right = styled.div`
  width: 50%;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100vh;
      object-fit: cover;
      image-rendering: auto;
      image-rendering: crisp-edges;
      image-rendering: pixelated;
    }
    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
      image-rendering: auto;
      image-rendering: crisp-edges;
      image-rendering: pixelated;
    }
    .small-img-2 {
      width: 30%;
      height: auto;
      left: 60%;
      bottom: 20%;
      image-rendering: auto;
      image-rendering: crisp-edges;
      image-rendering: pixelated;
    }
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
      Techletics ???22 is the Tech Fest of Christ College of Engineering that is intended 
      to be conducted in the first week of May, 2022. Techletics ???22 is the second 
      chapter to the rendezvous of innovation and zest, which began first in 2019 with Techletics???19.
        <br />
        <br />
        Techletics ???22 is the Tech Fest of Christ College of Engineering that is intended 
      to be conducted in the first week of May, 2022. Techletics ???22 is the second 
      chapter to the rendezvous of innovation and zest, which began first in 2019 with Techletics???19.
        <br />
        <br />
        Techletics ???22 is the Tech Fest of Christ College of Engineering that is intended 
      to be conducted in the first week of May, 2022. Techletics ???22 is the second 
      chapter to the rendezvous of innovation and zest, which began first in 2019 with Techletics???19..
      </Left>
      <Right>
        <img src={img1} alt="About Us" />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img2}
          className="small-img-1"
          alt="About Us"
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          src={img3}
          alt="About Us"
          className="small-img-2"
        />
      </Right>
    </Section>
  );
};

export default About;
