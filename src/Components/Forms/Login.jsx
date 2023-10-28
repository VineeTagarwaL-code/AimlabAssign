import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faRightToBracket , faCircleExclamation} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FormWrapper = styled.div`
  display: flex;
  margin-top:30px;
 
`;

const LoginForm = styled.form`

  width: 300px;
`;

const FormGroup = styled.div`
  margin: 10px 0;
 
`;

const Label = styled.label`
  display: block;
  margin-left:4px;
  color:white;
  font-size:20px;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom:10px;
  padding: 10px;
  font-family: 'Open Sans', sans-serif;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const PasswordToggle = styled.button`
 
  border: none;
  text-decoration:underline;
  color: #fff;
 background:transparent;
 
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
`;

const RememberMeLabel = styled.label`
  display: flex;
  color:white;
  font-family: 'Open Sans', sans-serif;
  font-size:16px;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 5px;
  border: none;
  outline: none;
  border-radius: 0; /* Set your desired border-radius, e.g., 0 for square edges */

  /* Unchecked state */
  &:not(:checked) {
   border:none;
   outline:none;
  }

  /* Checked state */
  &:checked {
    background-color: #0073e6;
    border: 1px solid #0073e6;
    color: #fff;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Button = styled.button`
  background: #fff;
  margin-right:40px;
  color: rgb(34, 158, 246);
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  padding: 5px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const PassCont = styled.div`

display: flex;
flex-direction:column;
align-items:flex-end;

`

const MessageContainer = styled.div`

width:fit-content;
display:flex;
justify-content:center;
margin-top:20px;
`

const ExtraMessage = styled.p`
  color:white;
`;
const HighLigth = styled.span`
 color:white;
 font-weight:bold;
 text-decoration:underline;
`

const Error = styled.p`
color:white;

font-weight:bold;
margin-left:5px;
font-size:12px;
font-family: 'Open Sans', sans-serif;
`

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const [loginId , setLoginId] = useState("")
  const [pass , setPass] = useState("")

  const [validLoginId , setValidLoginId] = useState(true)
  const [validPass , setValidPass] = useState(true)

  const handlePasswordChange = (e) => {
    const newPass = e.target.value;
    setPass(newPass);

    const valid = isPasswordValid(newPass);
    setValidPass(valid);

  }

  const handleLoginIdChange = (e) => {
    const newID = e.target.value;
    setLoginId(newID);

    const valid = isLoginID(newID);
    setValidLoginId(valid);

  }
  function notifyLoginSuccessR(){
    toast.success("login Successfull , credentials stored !")
  }
  function notifyLoginSuccess(){
    toast.success("login Successfull !")
  }

  function notifyValidationFailed(){
    toast.error("Validation Failed")
  }
  function notifyMessage(msg){
    toast(msg)
  }

  function notifyError(msg){
    toast.error(msg)
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log("clicked")
       if(!agreeToTerms){
        notifyMessage("Please agree to terms/conditon to continue...")
        return;
       }
       if( loginId === "" && pass ==="" ){
        notifyError("Empty values")
        return;
       }

      if(validPass && validLoginId && agreeToTerms){
        if(rememberMe){
          localStorage.setItem("loginId" , loginId);
          notifyLoginSuccessR()
          return;
        }else{
          notifyLoginSuccess()
          reutrn;
        }
        

      }else{
        notifyValidationFailed()
      }
  }
  function isPasswordValid(password) {
    if (password.length === 0) {
      return false;
    } else if (password.length > 20) {
      return false;
    } else {
      return true;
    }
  }

  function isLoginID(password) {
    if (password.length === 0) {
      return false;
    } else if (password.length < 7) {
      return false;
    } else {
      return true;
    }
  }



  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleAgreeToTermsChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  return (
    <FormWrapper>
      <LoginForm>

        <FormGroup>
          <Label>Login ID</Label>
          <Input type="text"
           placeholder="Enter Login ID"
           value={loginId}
           onChange ={(e)=>{handleLoginIdChange(e)}}
            />
            {
              !validLoginId  && <Error><FontAwesomeIcon icon={faCircleExclamation} style={{color: "#ffffff", paddingRight:"5px"}} />Enter a valid LoginID ( 7 char ) </Error>
            }
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Password"
            value={pass}
            onChange ={(e)=>{handlePasswordChange(e)}}
          />
              {
              !validPass  && <Error><FontAwesomeIcon icon={faCircleExclamation} style={{color: "#ffffff", paddingRight:"5px"}} />Max 20 char allowed </Error>
            }
          <PassCont>
          <PasswordToggle onClick={(e)=>{togglePasswordVisibility(e)}}>
            {showPassword ? 'Hide' : 'Show'}
          </PasswordToggle>
          <PasswordToggle onClick={(e)=>{ e.preventDefault() 
            notifyMessage("coming soon !")}}>
            Change Password
          </PasswordToggle>
          </PassCont>
        
        </FormGroup>
        <FormGroup>
          <RememberMeLabel>
            <Checkbox
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            Remember Me
          </RememberMeLabel>
        </FormGroup>
        <FormGroup>
          <RememberMeLabel>
            <Checkbox
              type="checkbox"
              checked={agreeToTerms}
              onChange={handleAgreeToTermsChange}
            />
            Agree to Terms and Conditions
          </RememberMeLabel>
        </FormGroup>
        <ButtonContainer>
          <Button onClick={(e)=>{handleSubmit(e)}}>Login</Button>
        </ButtonContainer>

        <MessageContainer>
          <ExtraMessage>Dont have an account ? <HighLigth>Register Here</HighLigth></ExtraMessage>
        </MessageContainer>
      </LoginForm>


    </FormWrapper>
  );
}

export default Login;
