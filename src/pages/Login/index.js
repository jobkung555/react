import React, { useState, useEffect } from 'react'
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
    border-radius: 5px;
    margin-bottom: 15px;
`

const Buttonlogin = styled.button`
    height: 30px;
    width: 100%;
    background: #022222;
    color: #FFC745;
    border-radius: 5px;
    cursor: pointer;
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
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        document.title = 'Login'
        setUsername('karn.yong@mecallapi.com')
        setPassword('mecallapi')
    }, [])

    const handleSubmit = async e => {
        e.preventDefault()
        const response = await loginUser({
            username,
            password
        })
        if('accessToken' in response && response?.status == "ok"){
            localStorage.setItem('accessToken',response.accessToken)
            localStorage.setItem('user',JSON.stringify(response.user))
            window.location.href = '/'
        }else{
            alert('Error')
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('user')
        window.location.href = '/'
    }

    async function loginUser(credentials) {
        return fetch('https://www.mecallapi.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then(data => data.json())
    }


    return (
        <>
            <Hidden>
                <Bg img={img}>
                </Bg>
                <form onSubmit={handleSubmit}>
                    <Box>
                        <Logo logo={logo} />
                        <Input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Username' />
                        <Input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' />
                        <Buttonlogin>Login</Buttonlogin>
                    </Box>
                </form>
            </Hidden>
        </>
    )
}

export default Login