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

  @media(max-width:576px){
    flex-direction:column-reverse;
  }

  @media (min-width: 576px) and (max-width: 767px){
    flex-direction:column-reverse;
  }

  @media (min-width: 768px) and (max-width: 991px){

  }
`;

const FormContainer = styled.div`
  flex: 0.5;
  height:100%;
  display: flex;
  padding-left: 5rem;
  padding-top:5rem;
  position: relative; /* Make this container relative */

  align-items: center;
  background-color: rgb(34, 158, 246);

  @media(max-width:576px){
    width:100vw !important;
    padding-left: 1.4rem;
    padding-top:20px;
  }

  @media (min-width: 576px) and (max-width: 767px){
    width:100vw !important;
   
    padding-top:20px;
  }
  @media (min-width: 768px) and (max-width: 991px){
    padding-left: 1.4rem;
  }
  @media (min-width: 992px) and (max-width: 1199px){
    padding-left: 1.6rem;
  }

`;

const SVGContainer = styled.div`
  position: absolute;

right:80px;
height:200%;

width:100vw ;
transform: rotate(90deg); 

@media(max-width:1283px){
  visibility:hidden;
}


`;

const SVGContainer1 = styled.div`
  position: absolute;
  visibility:hidden;
  bottom:-15px;
  @media(max-width:576px){
    visibility:visible;
  }
  @media (min-width: 576px) and (max-width: 767px){

    visibility:visible;
  }


width:100vw !important ;

`;


const ImageContainer = styled.div`
display:flex;

position:relative;
justify-content:center;
align-items:center;
  flex: 0.5;
  /* Additional styling for your image container */

  @media(max-width:576px){
        height:50vh !important;
  }

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
  @media(max-width:576px){
    font-size:1.8rem;
    padding-top:20px;
  }
  @media (min-width: 768px) and (max-width: 991px){
    font-size:1.8rem;
  }
  @media (min-width: 992px) and (max-width: 1199px){
    font-size:2.5rem;
  }
  
  
`
const SubMessage = styled.h4`
 color:white;
 font-size:20px;
 @media(max-width:576px){
  font-size:15px;
}
@media (min-width: 768px) and (max-width: 991px){
  font-size:18px;
}

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
margin-top:5px;
   @media(max-width:576px){

    height:150px;
    margin-bottom:40px;
    margin-left:0px;
  }
  @media (min-width: 576px) and (max-width: 767px){
    height:0px;
    margin-bottom:40px;
    margin-left:0px;
  
  }
  @media (min-width: 768px) and (max-width: 991px){
    height:250px;
    margin-bottom:40px;
    margin-left:0px;
  }
  @media (min-width: 992px) and (max-width: 1199px){

  }
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
   
 

 
     
     
     </FormContainer>
   <ImageContainer>
   <SVGContainer1>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#229ef6" fill-opacity="1" d="M0,0L34.3,21.3C68.6,43,137,85,206,106.7C274.3,128,343,128,411,128C480,128,549,128,617,154.7C685.7,181,754,235,823,261.3C891.4,288,960,288,1029,256C1097.1,224,1166,160,1234,133.3C1302.9,107,1371,117,1406,122.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
     </SVGContainer1>
     {/* Your image content */}
     <Image1 src={form}/>

     <SVGContainer>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id='svg__waves'><path fill="#229ef6" fill-opacity="1" d="M0,224L26.7,234.7C53.3,245,107,267,160,282.7C213.3,299,267,309,320,293.3C373.3,277,427,235,480,224C533.3,213,587,235,640,245.3C693.3,256,747,256,800,224C853.3,192,907,128,960,117.3C1013.3,107,1067,149,1120,186.7C1173.3,224,1227,256,1280,261.3C1333.3,267,1387,245,1413,234.7L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
     </SVGContainer>  
   </ImageContainer>
 </Wrapper>
  </>
  
  );
}

export default LoginPage;
