import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

   @media(max-width:576px){
    padding-top:5px;
    padding-inline:5px;
}
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


@media(max-width:576px){
  width:60px;
  font-size:12px;
  margin-right:10px;
}


`
function Navbar() {
  const notifySignup = () => toast.success("Signup Coming soon !");
  function handleSignup(){
    notifySignup()
  }
  return (
   <Navbar1>
    <Button>Login</Button>
    <Button onClick={handleSignup}>Signup</Button>
    <ToastContainer />
   </Navbar1>
  )
}

export default Navbar