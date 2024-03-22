import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from "../../components/Styles"
import videomovie from '../../assets/video/Fiber - 121805.mp4'

import { useLocation } from 'react-router-dom'

import { datatitle } from "../../data/datatitle"
// import { datamovie } from "../../data/datamovie"

const StyleHeader = styled.div`
    background: #022222;
    /* position: fixed;
    top: 0;
    width: 100%;
    backdrop-filter: blur(50px); */
    z-index: 99;
    position: relative;
`
const HeaderCon = styled.div`
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;

    @media screen and (max-width: 1024px){
        padding: 10px 20px;
    }
`
const Menu = styled.ul`
    display: flex;
    & > li{
        list-style-type: none;
        margin: 0 10px;
        padding: 10px 0;
        & > a{
            color: #FFF;
            text-decoration: none;
            &:hover{
                color: red;
            }
        }
        & > div{
            display: none;
            /* display: flex; */
            position: absolute;
            margin-top: 10px;
            left: 0;
            width: 100%;
        }
        &:hover > a ~ div{
            display: flex;
        }
        & > div > ul{
            list-style-type: none;
            padding-left: 0;
            width: 200px;

            & > li{
                padding: 20px;
                /* background: #FFF; */
                & > a ~ div{
                    display: none;
                }

                &:hover > a ~ div,&:first-child:not(:hover) > a ~ div{
                    display: block;
                    position: absolute;
                    left: 200px;
                    top: 0;
                    color: #FFF;
                    width: calc(100% - 200px);
                    height: 100%;
                    padding: 20px;
                    box-sizing: border-box;
                }
            }
        }
        & > div > div{
            width: 100%;
            background: #000;
            color: #FFF;
            padding: 20px;
        }
    }

    @media screen and (max-width: 1024px){
        display: none;
    }
`
const Mobilemenubar = styled.div`
    display: none;
    @media screen and (max-width: 1024px){
        display: block;
    }
`
const Mobilemenuicon = styled.svg`
    color: #fff;
    width: 40px;
    height: 40px;
`

const LogoHeader = styled.div`
    width: 100%;
    & > a{
        color: #FFF;
        font-size: 2em;
        text-decoration: none;
    }
`

const Hero = styled.div`
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: #fff;
`


const Videohead = styled.video`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    object-fit: cover;
    transform: translate(-50%,-50%);
    z-index: -1;
`

const Mobilemenu = styled.ul`
    font-size: 1.5em;
    gap: 20px;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${props => (props.mobile) ? '0' : '-50%'};
    transition: 0.3s all ease-in-out;
    width: 50%;
    height: 100%;
    background: #022222;
    flex-direction: column;
    & > li{
        list-style-type: none;
        margin: 0 10px;
        & > a{
            color: #FFF;
            text-decoration: none;
        }
    }
    display: none;
    @media screen and (max-width: 1024px){
        display: flex;
    }
    
`


// const Listyles = styled.li`
//     text-align: center;
    
//     &:hover{
//         background: ${props=>props.bg};
//     }
//     &:not(:hover){
//         background: #FFF;
//     }
    
    
//     /* background: #000; */
//     &:hover > a ~ div,&:first-child:not(:hover) > a ~ div{
//         background: ${props=>props.bg};
//     }
    
//     & > a{
//         text-decoration: none;
//         color: #FFF;
//         padding: 5px 10px;
//         border-radius: 5px;
//         background: rgba(0,0,0,0.5);
//     }

//     & > a ~ div > div{
//         padding: 20px;
//         background: rgba(0,0,0,0.5);
//         border-radius: 10px;
//     }
// `


const HeaderView = () => {
    const location = useLocation();
    let titlenamefilter = datatitle.filter(f => f.path === location.pathname)[0]?.title || ''
    return titlenamefilter
}
const Header = () => {

    const [clickMobile, setClickMobile] = useState(false)
    // const [user, setUser] = useState([])
    // const [titlename, setTitleName] = useState('Home')
    // const token = localStorage.getItem('accessToken')
    // const handleLogout = () => {
    //     setClickMobile(false)
    //     localStorage.removeItem('accessToken')
    //     localStorage.removeItem('user')
    //     window.location.href = '/'
    // }

    useEffect(() => {
        // HeaderView()
        // getuser()
    }, [])

    // async function getuser() {
    //     try {
    //         const data = await (await fetch("http://localhost:5000/api/users")).json()
    //         setUser(data)
    //         console.log(data)
    //     } catch (err) {
    //         setUser(null)
    //         console.log(err)
    //     }
    // }

    return (
        <StyleHeader>
            {(HeaderView() === 'Movie') ? <Videohead autoPlay muted loop id="myVideo">
                <source src={videomovie} type="video/mp4" />
            </Videohead> : ``}
            <HeaderCon>
                <LogoHeader>
                    <a href="/">Job Nep</a>
                </LogoHeader>
                <Menu>
                    <li>
                        <Link to="/" onClick={() => setClickMobile(false)}>Home</Link>
                        {/* <div>
                            <ul>
                                {datamovie && datamovie.map((m,k)=>
                                <Listyles bg={m.colorbg} key={k}><a href="#">{m.title}</a><div bg={m.colorbg}>
                                    <div>{m.text}</div>
                                </div></Listyles>)}
                            </ul>
                        </div> */}
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setClickMobile(false)}>About</Link>
                    </li>
                    {/* <li>
                        <Link to="/towerhome" onClick={() => setClickMobile(false)}>Towerhome</Link>
                    </li> */}
                    {/* <li>
                        <Link to="/three" onClick={() => setClickMobile(false)}>Three</Link>
                    </li> */}
                    <li>
                        <Link to="/styles" onClick={() => setClickMobile(false)}>Styles</Link>
                    </li>
                    <li>
                        <Link to="/phone" onClick={() => setClickMobile(false)}>Phone</Link>
                    </li>
                    {/* <li>
                        <Link to="/store" onClick={() => setClickMobile(false)}>Store</Link>
                    </li> */}
                    {/* {token ?
                        <>
                            <li>
                                <Link to="/table" onClick={() => setClickMobile(false)}>Table</Link>
                            </li>
                            <li>
                                <a onClick={() => handleLogout()} style={{ cursor: 'pointer' }}>Logout</a>
                            </li>
                        </>
                        : <li>
                            <Link to="/login" onClick={() => setClickMobile(false)}>Login</Link>
                        </li>} */}
                </Menu>
                <Mobilemenubar onClick={() => setClickMobile(!clickMobile)}>
                    {!clickMobile ? <Mobilemenuicon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </Mobilemenuicon> : <Mobilemenuicon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </Mobilemenuicon>}
                </Mobilemenubar>
            </HeaderCon>
            <Mobilemenu mobile={clickMobile}>
                <li>
                    <Link to="/" onClick={() => setClickMobile(false)}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={() => setClickMobile(false)}>About</Link>
                </li>
                {/* <li>
                    <Link to="/three" onClick={() => setClickMobile(false)}>Three</Link>
                </li> */}
                <li>
                    <Link to="/styles" onClick={() => setClickMobile(false)}>Styles</Link>
                </li>
                <li>
                    <Link to="/phone" onClick={() => setClickMobile(false)}>Phone</Link>
                </li>
                {/* <li>
                    <Link to="/store" onClick={() => setClickMobile(false)}>Store</Link>
                </li> */}
                {/* {token ?
                    <>
                        <li>
                            <Link to="/table" onClick={() => setClickMobile(false)}>Table</Link>
                        </li>
                        <li>
                            <a onClick={() => handleLogout()} style={{ cursor: 'pointer' }}>Logout</a>
                        </li>
                    </>
                    : <li>
                        <Link to="/login" onClick={() => setClickMobile(false)}>Login</Link>
                    </li>} */}
            </Mobilemenu>
            {HeaderView() === '' ? '' : <Container>
                <Hero>
                    <Title>
                        {HeaderView()}
                    </Title>
                </Hero>
            </Container>}
        </StyleHeader>
    )
}
export default Header