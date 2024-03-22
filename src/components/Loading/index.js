import React from 'react'
import styled, { keyframes } from 'styled-components'


const animation = keyframes`
    0% { 
        transform: translateY(0);
    }
    50% { 
        transform: translateY(-0.2em);
    }
    100% { 
        transform: translateY(0);
    }
`

const Bg = styled.div`
    z-index: 99;
    background: #022222;
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    & > div{
        font-size: 5em;
        color: #FFC745;
        animation-name: ${animation};
        animation-duration: 1.5s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
    }
    & > div:nth-child(2){
        animation-delay: 0.5s;
    }
    & > div:nth-child(3){
        animation-delay: 1s;
    }
`

const Loading = () => {
  return (
    <Bg>
        <div>•</div>
        <div>•</div>
        <div>•</div>
    </Bg>
  )
}

export default Loading