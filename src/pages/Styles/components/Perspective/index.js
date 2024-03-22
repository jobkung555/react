import React, { useState, useEffect, useRef } from 'react'
import { Container } from '../../../../components/Styles';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled, { keyframes } from 'styled-components';
import { datamovie } from '../../../../data/datamovie';

import 'swiper/css';
import bg from '../../../../assets/images/hd-wallpaper-1867616_1920.jpg'

// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';



const Bg = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 50px 0;
    overflow: hidden;
`

const Imgslide = styled.div`
    background-image: url(${props => props.img});
    aspect-ratio: 1;
    background-repeat: no-repeat;
    background-size: cover;
    /* transform: perspective(2000px); */
`
const Titleslide = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    /* transform: translateX(-50%); */
    color: #fff;
    font-size: 5em;
    position: absolute;
    width: 100%;
    text-align: center;
`

const Perspectivebox = styled.div`
    transform-style: preserve-3d;
    position: relative;
    & .swiper-slide-prev > .imgslide{
        transform-origin: left center;
        transform: translateZ(-1rem) scale(.5);
    }
    & .swiper-slide-next > .imgslide{
        transform-origin: right center;
        transform: translateZ(-1rem) scale(.5);
    }
    & .swiper-slide{
        transform: perspective(2000px);
        transform-style: preserve-3d;
        & > .imgslide{
            transform-origin: center center;
            transform: translateZ(-1rem) scale(.5);
        }
    }
    & .swiper-slide-active{
        & > .imgslide{
            transform-origin: center;
            transform: translateZ(-1rem) scale(1);
        }
    }

`

const Bullet = styled.div`
    display: flex;
    gap: 10px;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #FFF;
    padding: 10px 20px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    & > span{
        clip-path: polygon(50% 0%, 80% 50%, 50% 100%, 20% 50%);
        width: 20px;
        aspect-ratio: 1;
        background: #000;
        cursor: pointer;
        &.swiper-pagination-bullet-active{
            background: #29B7F4;
        }
    }
`

const Wrapper = styled.div`
    position: relative;
    
`
const Textleft = styled.div`
    position: absolute;
    left: 50%;
    color: #FFF;
    font-size: 3em;
    z-index: 2;
    /* transform-origin: center; */
    transform-origin: bottom center;
    transition: 0.5s all;
    opacity: 1;
    transform: translateZ(5rem) scale(.9);
    text-shadow: rgba(41,183,244,0.8) 1.95px 1.95px 2.6px;
`
const TextBottom = styled.div`
    position: absolute;
    left: 50%;
    bottom: 0;
    color: #FFF;
    font-size: 3em;
    z-index: 2;
    /* transform-origin: center; */
    transform-origin: bottom center;
    transition: 0.5s all;
    text-align: center;
    opacity: 1;
    transform: translate3d(-50%,-3rem,5rem) scale(1);
    text-shadow: rgba(41,183,244,0.8) 1.95px 1.95px 2.6px;
`

const Perspective = () => {
    const [id, setId] = useState(0)
    const [swiper, setSwiper] = useState(null);
    const [text, setText] = useState('')

    function geSlideDataIndex(swipe) {
        var activeIndex = swipe.activeIndex;
        var slidesLen = swipe.slides.length;
        if (swipe.params.loop) {
            switch (swipe.activeIndex) {
                case 0:
                    activeIndex = slidesLen - 3;
                    break;
                case slidesLen - 1:
                    activeIndex = 0;
                    break;
                default:
                    --activeIndex;
            }
        }
        return activeIndex;
    }
    useEffect(() => {
        let boxRotate = document.querySelector('.boxRotate')
        let boxPosition = document.querySelector('.boxPosition')
        let swiperwidth = document.querySelector('.boxPosition .swiper-slide')
        let textleft = document.querySelector('.textleft')
        let textbottom = document.querySelector('.textbottom')

        let boxPositionTop = boxPosition?.offsetTop
        let boxPositionHeight = boxPosition?.offsetHeight
        let boxPositionArea = boxPositionTop + boxPositionHeight
        let boxPositionWidth = boxPosition?.offsetWidth

        window.addEventListener('resize', perspectiveBoxresize, true);
        function perspectiveBoxresize(e) {
            swiperwidth = document.querySelector('.boxPosition .swiper-slide')
            boxPositionTop = boxPosition?.offsetTop
            boxPositionHeight = boxPosition?.offsetHeight
            boxPositionArea = boxPositionTop + boxPositionHeight
            boxPositionWidth = boxPosition?.offsetWidth

            textleft.style.cssText = `width: ${swiperwidth?.offsetWidth}px;left: calc(50% - ${swiperwidth?.offsetWidth / 2}px);`
            textbottom.style.cssText = `width: ${swiperwidth?.offsetWidth}px;`
            if(window.innerWidth <= 1024){
                boxRotate.removeAttribute("style")
            }
        }

        document.onmousemove = handleMouseMove;

        textleft.style.cssText = `width: ${swiperwidth?.offsetWidth}px;left: calc(50% - ${swiperwidth?.offsetWidth / 2}px);`
        textbottom.style.cssText = `width: ${swiperwidth?.offsetWidth}px;`
        function handleMouseMove(event) {
            if (event.pageY + 500 > boxPositionTop && event.pageY - 500 < boxPositionArea) {
                let Y = ((event.pageY - boxPositionTop) - (boxPositionHeight / 2)) * -1
                let X = event.pageX - (boxPositionWidth / 2)
                let rotateY = Y * 0.03
                let rotateX = X * 0.01
                let posX = X * 0.2

                if(window.innerWidth <= 1024){
                    boxRotate.removeAttribute("style")
                }else{
                    boxRotate.style.cssText = `transform: perspective(2000px) translate(${posX}px, ${rotateY}px) rotateY(${rotateX}deg) rotateX(${rotateY}deg)`
                }
            }
            // console.dir(boxPosition)
            // console.log(event.pageY)
        }
    }, [])
    useEffect(() => {
        setText(datamovie[id]?.title || '')
        // console.log(id)
    }, [id])

    const params = {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
                return '<span class="' + className + '"></span>';
            }
        }
    }
    return (
        <>
            <Bg className='boxPosition' img={bg}>
                <Wrapper>
                    <Bullet className='swiper-pagination' />
                    <Perspectivebox className={'boxRotate'}>
                        <Textleft className='textleft'>0{id}</Textleft>
                        <TextBottom className='textbottom'>{text}</TextBottom>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller]}
                            spaceBetween={20}
                            slidesPerView={1}
                            centeredSlides={true}
                            loop={true}
                            // navigation
                            // pagination={{ clickable: true }}
                            onSlideChange={(swiper) => {
                                // setId(geSlideDataIndex(swiper))
                                setId(swiper.realIndex)
                            }}
                            onSwiper={setSwiper}
                            {...params}
                            // autoplay={{
                            //     delay: 5000,
                            //     disableOnInteraction: false,
                            // }}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 3
                                }
                            }}
                        >
                            {datamovie.map((m, k) =>
                                <SwiperSlide key={m.id}>
                                    <Imgslide img={m.img} className='imgslide' />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </Perspectivebox>
                </Wrapper>
            </Bg>
        </>
    )
}

export default Perspective