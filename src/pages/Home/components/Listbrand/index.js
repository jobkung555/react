import React,{useContext} from 'react'
import styled from 'styled-components'
import { Container } from '../../../../components/Styles'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    gap: 30px;
    margin: 50px 20px;
`

const Boxcontent = styled.div`
    width: calc(33% - 60px);
    @media screen and (max-width: 1024px){
        width: 100%;
    }
`
const Box3 = styled.div`
    width: calc(33% - 60px);
    aspect-ratio: 1/0.9;
    position: relative;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &.borderradiusleft{
        border-radius: 10px 10px 10px 100px;
    }
    &.borderradiusright{
        border-radius: 10px 100px 10px 10px;
    }
    &.borderradius{
        border-radius: 10px 10px 10px 10px;
    }
    
    &:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(${props => props.img});
        background-repeat: no-repeat;
        background-size: cover;
        transition: 0.3s all ease-in-out;
    }
    &:hover:before{
        transform-origin: center center;
        transform: translateX(0px) translateY(0px) scaleX(1.2) scaleY(1.2) translateZ(0px);
    }
    &:after{
        transition: 0.3s all ease-in-out;
    }
    &:hover:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 9;
    }
    &:hover > h2{
        opacity: 0;
    }
    &:hover > p{
        opacity: 1;
        transform: translateY(0);
        z-index: 10;
    }

    @media screen and (max-width: 1024px){
        width: 100%;
    }
`
Boxcontent.defaultProps = {
    theme: {
        background: "#000"
    }
}

const Boxtitle = styled.h2`
    position: absolute;
    transition: 0.3s all ease-in-out;
    opacity: 1;
`

const Boxcontenttitle = styled.h2`
    color: #153222;
`

const Boxtext = styled.p`
    position: absolute;
    padding: 20px;
    text-align: center;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.3s all ease-in-out;
`

export const Listbrand = ({data}) => {

    const classlistbr = {
        0: `borderradiusleft`,
        1: `borderradiusright`,
        2: `borderradiusleft`,
        3: `borderradius`,
        4: `borderradiusright`,
        5: `borderradiusleft`,
        6: `borderradiusright`,
    }

    return (
        <Container>
            <Wrapper>
                <Boxcontent>
                    <Boxcontenttitle>Lorem Ipsum</Boxcontenttitle>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Boxcontent>
                {data ? data.map((m, k) =>
                    <Box3 key={k} img={m.img} className={classlistbr[k]}>
                        <Boxtitle>{m.title}</Boxtitle>
                        <Boxtext>{m.text}</Boxtext>
                    </Box3>
                ) : ``}
            </Wrapper>
        </Container>
    )
}