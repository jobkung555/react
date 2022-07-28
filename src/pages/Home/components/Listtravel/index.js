import React,{useContext} from 'react'
import styled from 'styled-components'
import { Container } from '../../../../components/Styles'


const Title = styled.h2`
    text-align: center;
    margin: 0 0 30px 0;
    color: #153222;
    font-size: 3em;
`
const Titlesub = styled.h3`
    text-align: center;
    margin: 0;
`

const Wrapper = styled.div`
    margin: 50px 0;
    padding: 0 20px;
`

const Wrapperarea = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr;
    }
`

const Boximg = styled.div`
    width: 100%;
    aspect-ratio: 1;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;

    &:hover > p{
        transform: translateY(0);
    }
    &:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
    }
    @media screen and (max-width: 1024px){
        & > p{
            transform: translateY(0);
        }
    }
`
const Boxtext = styled.p`
    position: absolute;
    width: calc(100% - 20px);
    bottom: 0;
    margin: 0;
    padding: 10px;
    background: rgba(0,0,0,0.7);
    transform: translateY(100%);
    transition: 0.5s all ease-in-out;
    color: #fff;
    font-size:1em;
`

export const Listtravel = ({data}) => {

    return (
        <Wrapper>
            <Container>
                <Titlesub>Lorem Ipsum</Titlesub>
                <Title>Lorem Ipsum</Title>
                <Wrapperarea>
                    {data ? data.map((m, k) =>
                        <Boximg key={k} img={m.img}>
                            <Boxtext>{m.text}</Boxtext>
                        </Boximg>
                    ) : ``}
                </Wrapperarea>
            </Container>
        </Wrapper>
    )
}