import React from 'react'
import styled from 'styled-components'

import img from '../../../../assets/images/10353375_10203925424720969_2981178867383107526_o2.jpg'
import logo from '../../../../assets/images/game-1926906_640.png'

const Wrapper = styled.div`
    background-color: #F5F5F5;

    border-bottom-left-radius: 20%;
    display: flex;
    flex-direction: row;
    position: relative;
    &:before{
        content: '';
        position: absolute;
        background-color: #153222;
        border-bottom-left-radius: 20%;
        width: 100%;
        height: 100%;
        bottom: 0;
        left: -40px;
        z-index: -1;
    }

    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
`



const Wraplefttitle = styled.h2`
    color: #153222;
    font-size: 4em;
    margin: 0;
`
const Wraplefttext = styled.p`
    color: #555555;
`
const Wrapleft = styled.div`
    width: 50%;
    @media screen and (max-width: 1024px){
        width: 100%;
    }
`
const Wrapleftin = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;
    height: 100%;
    justify-content: center;
    margin-bottom: 30px;
    padding: 0 20px;
`
const Wrapright = styled.div`
    width: 50%;
    overflow: hidden;
    @media screen and (max-width: 1024px){
        width: 100%;
    }
`
const Boxarea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin: -100px -300px -100px 30px;
    @media screen and (max-width: 1024px){
        flex-direction: column;
        margin: 0;
    }
`
const Boxsplit = styled.div`
    width: calc(33vw - 60px);
    gap: 30px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1024px){
        padding: 0 20px;
        width: calc(100% - 40px);
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 20%);

    &.active{
        background: #153222;
        color: #fff;
    }
    &.active h3{
        color: #fff;
    }
`
const Boxfake = styled(Box)`
    height: 150px;
    background: #D1D1D1;
    @media screen and (max-width: 1024px){
        display: none;
    }
`
const Boxfake2 = styled(Box)`
    height: 100px;
    background: #D1D1D1;
    @media screen and (max-width: 1024px){
        display: none;
    }
`

const Boxprofile = styled.div`
    display: flex;
    margin-bottom: 15px;
`
const Boximgarea = styled.div`
    width: 80px;
`
const Boximg = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    width: 60px;
    height: 60px;
    border-radius: 60px;
`

const Boxprofilearea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Boxcontent = styled.p`
    margin-top: 0;
    margin-bottom: 15px;
`
const Boxname = styled.h3`
    margin: 0;
    color: #153222;
`
const Boxposition = styled.h3`
    margin: 0;
    color: #7a7a7a;
    font-size: 1em;
`




export const ListComments = () => {
    return (
        <>
            <Wrapper>
                <Wrapleft>
                    <Wrapleftin>
                        <Wraplefttitle>Lorem Ipsum</Wraplefttitle>
                        <Wraplefttext>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Wraplefttext>
                    </Wrapleftin>
                </Wrapleft>
                <Wrapright>
                    <Boxarea>
                        <Boxsplit>
                            <Boxfake />
                            {[...Array(3)].map((m, k) =>
                                <Box key={k} className={(k === 1 ? `active` : ``)}>
                                    <Boxcontent>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Boxcontent>
                                    <Boxprofile>
                                        <Boximgarea>
                                            <Boximg img={img} />
                                        </Boximgarea>
                                        <Boxprofilearea>
                                            <Boxname>Lorem Ipsum</Boxname>
                                            <Boxposition>Lorem Ipsum</Boxposition>
                                        </Boxprofilearea>
                                    </Boxprofile>
                                    <Boxlogo logo={logo} />
                                </Box>
                            )}
                            <Boxfake />
                        </Boxsplit>
                        <Boxsplit>
                            <Boxfake2 />
                            {[...Array(3)].map((m, k) =>
                                <Box key={k}>
                                    <Boxcontent>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Boxcontent>
                                    <Boxprofile>
                                        <Boximgarea>
                                            <Boximg img={img} />
                                        </Boximgarea>
                                        <Boxprofilearea>
                                            <Boxname>Lorem Ipsum</Boxname>
                                            <Boxposition>Lorem Ipsum</Boxposition>
                                        </Boxprofilearea>
                                    </Boxprofile>
                                    <Boxlogo logo={logo} />
                                </Box>
                            )}
                            <Boxfake />
                        </Boxsplit>
                        <Boxsplit>
                            <Boxfake />
                            <Boxfake />
                            <Boxfake />
                            <Boxfake />
                            <Boxfake />
                            <Boxfake />
                        </Boxsplit>
                    </Boxarea>
                </Wrapright>
            </Wrapper>
        </>
    )
}

const Boxlogo = styled.img.attrs(props => ({
    src: props.logo
}))`
    width: 40px;
    height: 40px;
    object-fit: contain;
`