import React from 'react'
import styled from 'styled-components'
// imporimport { Link } from 'react-router-dom'
import logo from "./logo1.png"
const Container = styled.div`
position:absolute;
top:0rem;
left:0rem;
width:100%
color:${props => props.theme.text};
z-index:1;


 `
const Logo = () => {
    return (
        <Container>

          
           <img src={logo} alt="logo" style={{width:"15%" , height:"15%"}} />
           


        </Container>
    )
}

export default Logo