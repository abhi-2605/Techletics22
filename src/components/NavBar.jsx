import React,{useState} from 'react'
import{motion} from 'framer-motion'
import styled from 'styled-components'

const NavContainer=styled.div`
width:100vw;
z-index:3;
position:absolute;
font-family:serif;
display:flex;
justify-content:center;
align-items:center;



`
const MenuItems = styled(motion.li)`
position:relative;
height:${props=>props.theme.navHeight};
background-color: white;
color: black;
list-style:none;
z-index:3;
display:flex;
justify-content:center;
align-items:center;

width:100%;
height:100%;
padding:1rem;
`

// const MenuBtn=styled.li`
// background-color:#a3d5e0;
// list-style-type:style none;
// color:${props=>props.theme.body};
// width:15rem;
// height:2.5rem;
// clip-path:polygon(0 0,100% 0,80% 100%,20% 100%);

// position:absolute;
// top:100%;
// left:50%;
// transform:translateX(-50%);


// display:flex;
// justify-content:center;
// align-items:center;

// font-size:${props=>props.theme.fontmd};
// font-weight:600;
// text-transform:uppercase;
// cursor:pointer;

// `

// const MenuItem = styled.li`
// text-transform:uppercase;
// color:${props=>props.theme.text};
// `


const NavBar = () => {
    // const [click, setClick]=useState(false);
  return (
    <NavContainer>
       
        <MenuItems   whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }}>Register</MenuItems>
        <MenuItems   whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }} >About Us</MenuItems>
        <MenuItems   whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }}>Events</MenuItems>
        <MenuItems   whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }}>Sponsors</MenuItems>
        
  </NavContainer>
  )
}

export default NavBar