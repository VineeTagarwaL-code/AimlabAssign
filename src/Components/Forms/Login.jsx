import React, { useState } from 'react';
import styled from 'styled-components';

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

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

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
          <Input type="email" placeholder="Enter Login ID" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Password"
          />
          <PassCont>
          <PasswordToggle onClick={(e)=>{togglePasswordVisibility(e)}}>
            {showPassword ? 'Hide' : 'Show'}
          </PasswordToggle>
          <PasswordToggle onClick={(e)=>{togglePasswordVisibility(e)}}>
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
          <Button>Login</Button>
        </ButtonContainer>

        <MessageContainer>
          <ExtraMessage>Dont have an account ? <HighLigth>Register Here</HighLigth></ExtraMessage>
        </MessageContainer>
      </LoginForm>

     
    </FormWrapper>
  );
}

export default Login;
