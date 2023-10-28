import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import hero from '../../assets/herogif.gif';
import Navbar from '../../Components/Nav/Navbar';
import Login from '../../Components/Forms/Login';
import form from '../../assets/form.gif'
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Wrapper = styled.section`
  height: 100%;
  overflow:hidden;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  background: white;
`;

const FormContainer = styled.div`
  flex: 0.5;
  height: 100%;
  display: flex;
  padding-left: 5rem;
  position: relative; /* Make this container relative */

  align-items: center;
  background-color: rgb(34, 158, 246);
`;

const SVGContainer = styled.div`
  position: absolute;

left:0;
height:100%;

width:100vw ;
transform: rotate(90deg); 
`;


const ImageContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
  flex: 0.5;
  /* Additional styling for your image container */
`;

const UpperContent = styled.div`
  display: flex;
  flex-direction:column;

`;

const Image = styled.img`
  height: 20px; /* Set your desired height value here */
`;

const MessageH = styled.h2`
  color:white;
  font-family: 'Open Sans', sans-serif;
  font-size:3rem;
  
  
`
const SubMessage = styled.h4`
 color:white;
 font-size:20px;
 
`
const InnerContent = styled.div`
 display:flex;
 align-items:center;
  gap:20px;
  margin-bottom:20px;

 `

 const Image1 = styled.img`
   height:400px;
   margin-left:50px;
 `
function LoginPage() {
  return (<>
  <Navbar/>
  <Wrapper>
   
   <FormContainer>
     <UpperContent>
         <InnerContent>
         <FontAwesomeIcon icon={faRightToBracket} style={{ color: '#fafafa' }} size="2xl" />
         <MessageH>Login to AimLab</MessageH>
         </InnerContent>
      
       <SubMessage>
         The  <Image src={hero} alt="Hero" /> Product team you need.What will you build now?
       </SubMessage>
       <Login/>
     </UpperContent>
     <SVGContainer>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id='svg__waves'><path fill="#229ef6" fill-opacity="1" d="M0,224L26.7,234.7C53.3,245,107,267,160,282.7C213.3,299,267,309,320,293.3C373.3,277,427,235,480,224C533.3,213,587,235,640,245.3C693.3,256,747,256,800,224C853.3,192,907,128,960,117.3C1013.3,107,1067,149,1120,186.7C1173.3,224,1227,256,1280,261.3C1333.3,267,1387,245,1413,234.7L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
     </SVGContainer> </FormContainer>
   <ImageContainer>
     {/* Your image content */}
     <Image1 src={form}/>
   </ImageContainer>
 </Wrapper>
  </>
  
  );
}

export default LoginPage;
