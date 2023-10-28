import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginPage from './views/LoginView/LoginPage'
import styled, { css , createGlobalStyle  } from 'styled-components'

function App() {
  const [count, setCount] = useState(0)


  const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {

    font-family: Arial, sans-serif;
  }`;




// Create a Wrapper component that'll render a <section> tag with some styles
const WrapperMain = styled.section`
 height: 100vh;
 width:100vw;

  `;

  return (
    <>
        <GlobalStyles />
        <WrapperMain>
        <LoginPage/>
        </WrapperMain>
   
    </>


  )
}

export default App
