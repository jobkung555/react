import React, { useContext } from 'react'
import styled from 'styled-components'
import { Container } from '../../../../components/Styles'

const Listboxul = styled.ul`
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    color: #fff;
    margin: 0 auto;
    padding: 0 20px;

    @media screen and (max-width: 1024px){
        grid-template-columns: auto;
    }
`
const Listboxli = styled.li`
    display: block;
    transition-delay: .07s;
    transition: opacity 1s,transform 1s;
    transition-timing-function: cubic-bezier(0,1.01,.55,.99);
    &:hover > div{
        transform: rotateY(180deg);
    }
    &:hover > div > div:nth-child(2){
        transform: rotateY(180deg);
    }
`

const Box = styled.div`
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform .5s;
`
const Boxbefore = styled.div`
    align-items: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #153222;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 50px 30px;
    text-align: center;
    box-sizing: border-box;
`
const Boxafter = styled(Boxbefore)`
    transform: rotateY(180deg);
    
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    box-sizing: border-box;

    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;

    &:before{
        content: '';
        position: absolute;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`

const IconPlay = styled.svg`
    width: 50px;
    height: 50px;
    margin: 15px;

    color: #fff;
`

const Bg = styled.div`
    padding: 50px 0;
    background: #022222;
`

const Title = styled.h2`
    color: #FFF;
    text-align: center;
    font-size: 3em;
    line-height: 2em;
    margin: 0;
    padding: 0 20px;
`

const Contentarea = styled.p`
    color: #FFF;
    text-align: center;
    max-width: 600px;
    margin: 0 auto 50px;
    padding: 0 20px;
`

const Boxstyle = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
`
const Boxhover = styled.div`
    position: relative;
    width: 60%;
    right: 0;
    display: flex;
    padding: 0 20px;
    /* gap: 40px; */
    margin-top: -150px;

    &:hover div:nth-child(2) > div{
        position: relative;
        transform: rotate(0deg);
        margin-left: 0;
    }

    @media screen and (max-width: 1024px){
        position: relative;
        margin-top: 20px;
        /* gap: 20px; */
        width: calc(100% - 40px);
    }
`
const Boximage = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
    aspect-ratio: 1;
`

const Boxchangeafter = styled.div`
    position: relative;
    width: 50%;
    margin-left: 20px;
`
const Boximageafter = styled(Boximage)`
    position: absolute;
    transform: rotate(20deg);
    width: 100%;
    margin-left: -150px;
    transition: 0.5s all ease-in-out;
`

export const Listbox = ({ data }) => {
    return (
        <Bg>
            <Container>
                <Title>Lorem Ipsum</Title>
                <Contentarea>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Contentarea>
                <Listboxul>
                    {data ? data.map((m, k) =>
                        <Listboxli key={k}>
                            <Box>
                                <Boxbefore>
                                    <IconPlay xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                    </IconPlay>
                                    {m.title}</Boxbefore>
                                <Boxafter img={m.img}>{m.text}</Boxafter>
                            </Box>
                        </Listboxli>
                    ) : ``}
                </Listboxul>
                <Boxstyle>
                    <Boxhover>
                        {data ? data.map((m, k) =>
                            k < 2 && (k==0?<Boximage key={k} img={m.img} />:<Boxchangeafter key={k}><Boximageafter  img={m.img}/></Boxchangeafter>)
                        ) : ``}
                    </Boxhover>
                </Boxstyle>
            </Container>
        </Bg>
    )
}