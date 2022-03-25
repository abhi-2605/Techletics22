import React from "react";
import styled from "styled-components";

import pic from "./c.png"
import {motion} from 'framer-motion';
const VideoContainer = styled.section`
width:100%;
height:100%;
position:relative;

video{
    width:100%;
    height:100vh;
    object-fit:cover;
}
`
const DarkOverlay= styled.div`
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
z-index:1;
background-color:${props=>`rgba(${props.theme.bodyRgba},0.6)`};
`

const Title =styled(motion.div)`
position:absolute;
top:0;
bottom:0;
left:0;
right:0;


display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:${props=>props.theme.text};
div{
    display:flex;
    flex-direction:row;
};

h1{
    font-family: 'Kaushan Script';
    font-size:${props=>props.theme.fontxxl};
    text-shadow:1px 1px 1px ${props=>props.theme.body};
    
};
h2{
    font-family: 'Sirin Stencil';
    font-size:${props=>props.theme.fontlg};
    text-shadow:1px 1px 1px ${props=>props.theme.body};
    font-weight:300;
    text-transform:capitalize;

}

`
const container={
    hidden:{
        opacity:0,
    },show:{
        opacity:1,
        transition:{
            delayChildren:2,
            staggerChildren:0.3,
        }
    },
}
const item={
    hidden:{
        opacity:0,
    },show:{
        opacity:1,
    }
}

const CoverVideo = () => {
  

    return(
        <VideoContainer style={{marginTop:"3%"}}>
            {/* <DarkOverlay/> */}
                {/* <Title variants ={container} intial="hidden" animate="show">
                    <div style={{color:"#01afb6"}} >
                        <motion.h1  variants={item} data-scroll data-scroll-delay='0.13' data-scroll-speed="4">Te</motion.h1>
                        <motion.h1  variants={item} data-scroll data-scroll-delay='0.09' data-scroll-speed="4">CH</motion.h1>
                        <motion.h1  variants={item} data-scroll data-scroll-delay='0.06' data-scroll-speed="4">LE</motion.h1>
                        <motion.h1  variants={item} data-scroll data-scroll-delay='0.04' data-scroll-speed="4">TICS'22</motion.h1>
                        
                    </div>
                        <h2 data-scroll data-scroll-delay='.04' data-scroll-speed="2" style={{color:"#a3d5e0"}}>
                            Powered by Abdul Ahad
                        </h2>
                    
                </Title> */}
               <img src={pic} alt="techfest" style={{width:"100%" , height:"100%"}}/>

            
        </VideoContainer>
    )

}
export default CoverVideo;