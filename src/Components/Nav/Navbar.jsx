import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
const Navbar1 = styled.div`
  position: absolute;
  z-index: 1999;
  top: 0;
  background: transparent;
  display: flex;

  padding-top:20px;
  padding-inline:20px;
 width:100vw;
   justify-content: flex-end;
`;


const ButtonCont= styled.div`
 width:500px;

`

const Button = styled.button`
user-select: none;
width:100px;
font-family: 'Open Sans', sans-serif;
margin-right:20px;
font-size:18px;
cursor: pointer;
padding:5px 10px 5px 10px;
border: 1px solid red;
display: flex;
justify-content: center;
align-items: center;

padding:5px 10px;
gap: 10px;
color: white !important;
border: none;
border-radius: 4px;
background-color:rgb(34, 158, 246);
`
function Navbar() {
  return (
   <Navbar1>
    <Button>Login</Button>
    <Button>Signup</Button>
   </Navbar1>
  )
}

export default Navbar