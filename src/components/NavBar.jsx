import React,{useState} from 'react'
import{motion} from 'framer-motion'
import styled from 'styled-components'

const NavContainer=styled(motion.div)`
width:100vw;
z-index:6;
position:absolute;
top:1;
display:flex;
justify-content:center;
align-items:center;

transistion:all 0.3s ease;

`
const MenuItems = styled.li`
position:relative;
height:${props=>props.theme.navHeight};
background-color: white;
color: black;
list-style:none;

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

const MenuItem = styled.li`
text-transform:uppercase;
color:${props=>props.theme.text};
`


const NavBar = () => {
    // const [click, setClick]=useState(false);
  return (
    <NavContainer>
       
        <MenuItems>Register</MenuItems>
        <MenuItems >About Us</MenuItems>
        <MenuItems >Events</MenuItems>
        <MenuItems >Sponsors</MenuItems>
        
  </NavContainer>
  )
}

export default NavBar