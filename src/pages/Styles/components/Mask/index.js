import React, { useEffect } from 'react'
import styled from 'styled-components'

import line from '../../../../assets/images/line.png'
import animevideo from '../../../../assets/video/anime.mp4'

const Bg = styled.div`
    width: 100%;
    height: 100vh;
    background: #022222;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 768px){
        background: transparent;
    }
`

const Circle = styled.div`
    width: 500px;
    aspect-ratio: 1;
    border-radius: 50%;
    overflow: hidden;
    z-index: 5;

    @media screen and (max-width: 768px){
        overflow: unset;
        background: transparent;
        width: 100%;
    }
`

const Videomask = styled.video`
    position: absolute;
    left: 50%;
    top: 50vh;
    object-fit: cover;
    transform: translate(-50%,calc(-50vh - 250px));
    z-index: -1;
    
    @media screen and (max-width: 768px){
        transform: translate(-50%,-50vh);
    }
`


const ContactBox = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    transform: translate(calc(-50vw + 250px), calc(-50vh + 250px));
    padding: 20px;
    box-sizing: border-box;
    
    display: flex;
    align-items: flex-end;
    color: red;
    & img{
        cursor: none;
    }

    & > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width: 768px){
        transform: none;
    }
`

const ContactBoxBefore = styled(ContactBox)`
    transform: none;
    color: #FFF;
    z-index: 4;
    & img{
        visibility: hidden;
    }
`
const ContactText = styled.h2`
    font-size: 3em;
    margin: 0;
`

const Lineimage = styled.img.attrs({
    src: `${line}`
})`

`

const Mask = () => {
    useEffect(() => {
        let mask = document.querySelector(".mask")
        let maskPosition = document.querySelector('.maskPosition')
        let maskObject = document.querySelector('.maskObject')

        let maskPositionTop = maskPosition?.offsetTop
        let maskPositionHeight = maskPosition?.offsetHeight
        let maskPositionArea = maskPositionTop + maskPositionHeight
        let maskPositionWidth = maskPosition?.offsetWidth

        window.addEventListener('resize', maskResize, true);
        function maskResize(e) {
            maskPositionTop = maskPosition?.offsetTop
            maskPositionHeight = maskPosition?.offsetHeight
            maskPositionArea = maskPositionTop + maskPositionHeight
            maskPositionWidth = maskPosition?.offsetWidth
            if (window.innerWidth <= 768) {
                mask.removeAttribute("style")
                maskObject.removeAttribute("style")
            }
        }


        window.addEventListener('mousemove', (event) => {
            var eventDoc, doc, body;

            event = event || window.event; // IE-ism

            // If pageX/Y aren't available and clientX/Y are,
            // calculate pageX/Y - logic taken from jQuery.
            // (This is to support old IE)
            if (event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;

                event.pageX = event.clientX +
                    (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                    (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY +
                    (doc && doc.scrollTop || body && body.scrollTop || 0) -
                    (doc && doc.clientTop || body && body.clientTop || 0);
            }

            // Use event.pageX / event.pageY here


            if (event.pageY + 500 > maskPositionTop && event.pageY - 500 < maskPositionArea) {
                let Y = (event.pageY - maskPositionTop) - (maskPositionHeight / 2)
                let X = event.pageX - (maskPositionWidth / 2)
                // console.log(X)
                // console.log(Y)
                // console.dir(mask)
                if (window.innerWidth <= 768) {
                    mask.removeAttribute("style")
                    maskObject.removeAttribute("style")
                } else {
                    mask.setAttribute("style", `transform: translate3d(${X}px, ${Y}px, 0px)`)
                    maskObject.setAttribute("style", `transform: translate3d(${X * -1}px, ${Y * -1}px, 0px)`)
                }
            }

        });



    }, [])
    return (
        <Bg className="maskPosition">
            <Circle className="mask" style={{transform: "translate3d(0px, 0px, 0px)",width: "0"}}>
                <div className="maskObject" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                    <Videomask autoPlay muted loop className="videomask">
                        <source src={animevideo} type="video/mp4" />
                    </Videomask>
                    <ContactBox>
                        <div>
                            <ContactText>Contact Me</ContactText>
                            <Lineimage />
                        </div>
                    </ContactBox>
                </div>
            </Circle>
            <ContactBoxBefore>
                <div>
                    <ContactText>Contact Me</ContactText>
                    <Lineimage />
                </div>
            </ContactBoxBefore>
        </Bg>
    )
}

export default Mask