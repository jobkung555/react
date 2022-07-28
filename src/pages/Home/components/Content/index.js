import React, { useEffect ,useContext} from 'react'
import styled, { keyframes } from "styled-components";
import { Container } from "../../../../components/Styles";

const Wrapper = styled.div`
    margin: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0 20px;
    overflow: hidden;
    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
`
const Wrapleft = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.swap{
        order: 1;
    }

    @media screen and (max-width: 1024px){
        order: 1;
    }
`

const Wrapright = styled.div`
    width: 100%;
    @media screen and (max-width: 1024px){
        order: 0;
    }
`

const Blockcontent = styled.div`
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    padding: 30px 50px;
    border-radius: 15px;
    background: rgba(51,77,77,0.9);
    color: #FFF;
    margin: 10px 0;
    z-index: 1;
`

const BlockImage = styled.div`
    width: 100%;
    aspect-ratio: 1/0.8;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 20px;
`

const BlockTitle = styled.h2`

`
const BlockText = styled.p`

`

const svgstyle1Animation = keyframes`
    0% { 
        transform: rotate(0deg); 
    }
    100% { 
        transform: rotate(360deg); 
    }
`
const svgstyle2Animation = keyframes`
    0% { 
        transform: rotate(360deg); 
    }
    100% { 
        transform: rotate(0deg); 
    }
`
const Svgstyle1 = styled.svg`
    transform-origin: center center;
    width: 30vw;
    aspect-ratio: 1;

    animation: ${svgstyle1Animation} 12s linear infinite;

    & .st0{opacity:0.8;fill:#153222;}
`
const Aniboxleft = styled.div`
    position: fixed;
    top: 50vh;
    left: -20vw;
    transform: translateY(-30vh);
    opacity: 0;
    
    transition: 0.3s all ease-in-out;
    &.active{
        left: -5vw;
        opacity: 1;
    }
`
const Svgstyle2 = styled.svg`
    transform-origin: center center;
    width: 30vw;
    aspect-ratio: 1;

    animation: ${svgstyle2Animation} 12s linear infinite;

    & .st0{opacity:0.8;fill:#022222;}
`
const Aniboxright = styled.div`
    position: fixed;
    top: 50vh;
    right: -20vw;
    transform: translateY(-30vh);
    opacity: 0;

    transition: 0.3s all ease-in-out;
    &.active{
        right: -5vw;
        opacity: 1;
    }
`


export const Content = ({data}) => {


    return (
        <>
            <Aniboxleft className="anicontent">
                <Svgstyle1 version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 100 100">
                    <path className="st0" d="M82.37,100H17.63C7.89,100,0,92.11,0,82.37V17.63C0,7.89,7.89,0,17.63,0h64.73C92.11,0,100,7.89,100,17.63
	v64.73C100,92.11,92.11,100,82.37,100z"/>
                </Svgstyle1>
            </Aniboxleft>
            <Aniboxright className="anicontent">
                <Svgstyle2 version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 100 100" >
                    <polygon className="st0" points="75.08,7 25.24,7 0.33,50.16 25.24,93.32 75.08,93.32 100,50.16 " />
                </Svgstyle2>
            </Aniboxright>
            {data ?
                data.map((m, k) =>
                    <Container key={k} className={(k === 0 ? `anistart` : (k === data.length - 1 ? `aniend` : ``))}>
                        <Wrapper>
                            <Wrapleft className={'scollnep ' + (k % 2 === 0 ? 'swap animation-lefttoright' : 'animation-righttoleft')}>
                                <Blockcontent>
                                    <BlockTitle>
                                        {m.title}
                                    </BlockTitle>
                                    <BlockText>
                                        {m.text}
                                    </BlockText>
                                </Blockcontent>
                            </Wrapleft>
                            <Wrapright className={'scollnep ' + (k % 2 === 0 ? 'animation-righttoleft' : 'animation-lefttoright')}>
                                <BlockImage img={m.img} />
                            </Wrapright>
                        </Wrapper>
                    </Container>
                )
                : ``}

        </>
    )
}

