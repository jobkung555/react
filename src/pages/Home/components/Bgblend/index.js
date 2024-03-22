import React from 'react'
import styled from 'styled-components'
import videomovie from '../../../../assets/video/Fiber - 121805.mp4'
import img from '../../../../assets/images/clouds-g3679a5556_1920.jpg'


const Boxlogo = styled.div`
    background-color: white;
    mix-blend-mode: darken;
    position: absolute;
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`
const Logo = styled.svg`
    position: absolute;
    width: 300px;
    height: 300px;

    & path{
        stroke-dasharray: 500;
        stroke-dashoffset: 500;
        transition: 5s all ease-in-out;
    }
    & .st0{
        fill:transparent;
        stroke:#000000;
        stroke-width:10;
        stroke-miterlimit:10;
    }
`
const Bglogo = styled.video`
    position: absolute;
    width: 300px;
    height: 300px;
    object-fit: cover;
    mix-blend-mode: lighten;
`
const Bg = styled.div`
    position: relative;
    height: 500px;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    &.is-nep path{
        stroke-dashoffset: 0;
    }
`

export const Bgblend = () => {
    return (
        <>
            <Bg img={img} className="scollnep">
                <Boxlogo>
                    <Logo version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 100 100">
                        <path className="st0" d="M68.5,27.5v34.79c0,3.49,2.83,6.33,6.33,6.33h9.1c3.46,0,6.28-2.79,6.33-6.25l0.17-14.46
	c0.04-3.52-2.8-6.4-6.33-6.4H69"/>
                        <path className="st0" d="M45.5,68.5h1c4.98,0,9.53-3.87,9.63-8.84l0.18-8.83c0.1-5.12-4.02-9.33-9.14-9.33h-4.8
	c-5.05,0-9.14,4.09-9.14,9.14v8.75c0,5.08,4.19,9.16,9.27,9.11H46"/>
                        <path className="st0" d="M21.5,28v31.95c0,4.79-3.88,8.67-8.67,8.67H7.71" />
                    </Logo>
                    <Bglogo autoPlay muted loop id="myVideo">
                        <source src={videomovie} type="video/mp4" />
                    </Bglogo>
                </Boxlogo>
            </Bg>
        </>
    )
}