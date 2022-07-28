import React from 'react'
import styled from 'styled-components'
import img from '../../assets/images/landscape-1328858_1920.jpg'
import logo from '../../assets/images/game-1926906_640.png'

const Bg = styled.div`
    background: url(${prop => prop.img});
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(10px);
    background-position: center;
    transform: scale(1.1);
    background-position: center;


    position: absolute;
`
const Hidden = styled.div`
    overflow: hidden;
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Box = styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 20px 30px 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    align-items: center;
`

const Input = styled.input`
    height: 30px;
    padding: 0 10px;
    border-color: #e1e1e1;
    border-radius: 5px;
    margin-bottom: 15px;
`

const Buttonlogin = styled.button`
    height: 30px;
    width: 100%;
    background: #022222;
    color: #FFC745;
    border-radius: 5px;
`

const Logo = styled.div`
    background: url(${prop => prop.logo});
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 15px;
`

const Login = () => {
    return (
        <>
            <Hidden>
                <Bg img={img}>
                </Bg>
                <Box>
                    <Logo logo={logo}/>
                    <Input type="text" placeholder='Username' />
                    <Input type="password" placeholder='Password' />
                    <Buttonlogin>Login</Buttonlogin>
                </Box>
            </Hidden>
        </>
    )
}

export default Login