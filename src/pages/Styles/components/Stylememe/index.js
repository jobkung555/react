import React, { useState, useEffect, useRef } from 'react'
import { Container } from '../../../../components/Styles';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/react';
import styled, { keyframes } from 'styled-components';
import { datamovie } from '../../../../data/datamovie';

import 'swiper/css';

// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


const CarouselCustom = styled.div`

`
const Wrapper = styled.div`
    
    background: #FAFAFA;
    border-radius: 50px;
    padding: 50px;
    
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const Wrapperin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
const Wrapperleft = styled.div`
    width: 50%;
    @media screen and (max-width: 1024px){
        width: 100%;
    }
`
const Wrapperright = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1024px){
        width: 100%;
        margin-top: 500px;
    }
`


const Product = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`
const Producttitle = styled.div`
    width: 100%;
    padding-left: 20px;
`
const Productcontent = styled.div`
    width: 100%;
`
const Productimage = styled.div`
    width: 200px;
    background-image: url(${props => props.img});
    aspect-ratio: 1;
    background-repeat: no-repeat;
    /* background-size: cover; */
    background-size: contain,cover;
`
const Bg = styled.div`
    background: #eee;
    padding: 50px 0;
`
const Boxbg = styled.div`
    border-radius: 30% 70% 30% 70% / 70% 30% 70% 30%;
    background: ${props => props.bgold};
    width: 500px;
    height: 500px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: rotate(0deg);
    overflow: hidden;
    transition: opacity 1s linear;
    &.active{
        transition: 2s ease;
        transform: rotate(90deg);
    }
    &.active:before{
        opacity: 1;
        transition: opacity 2s linear;
    }
    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: ${props => props.bg};
        z-index: -1;
        opacity: 0;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -150px;
    left: -100px;

`
const Titleleft = styled.div`
    font-size: 2em;
    color: #fff;
    text-shadow: rgba(0, 0, 0, 0.5) 1.95px 1.95px 2.6px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 500px;
    height: 500px;
    top: -150px;
    left: -100px;
`

const Boxrotateafterani = keyframes`
    0% { 
        transform: rotate(0deg);
        opacity: 1;
    }
    80%{
        opacity: 0;
    }
    100% { 
        transform: rotate(180deg); 
        opacity: 0;
    }
`
const Boxrotateani = keyframes`
    0% { 
        transform: rotate(-180deg); 
        opacity: 0;
    }
    80%{
        opacity: 1;
    }
    100% { 
        transform: rotate(0deg); 
        opacity: 1;
    }
`

const Boxrotateimganiafter = keyframes`
    0% { 
        transform: rotate(0deg); 
    }
    100% { 
        transform: rotate(-180deg); 
    }
`
const Boxrotateimgani = keyframes`
    0% { 
        transform: rotate(180deg); 
    }
    100% { 
        transform: rotate(0deg); 
    }
`

const Box = styled.div`
    position: relative;
    z-index: 2;
`
const Boxrotate = styled.div`
    position: absolute;
    transform: rotate(0deg);
    
    animation-duration: 2s;
    transform-origin: top left;
    margin: 200px;
    width: 300px;
    height: 300px;
    animation-name: ${Boxrotateafterani};
    opacity: 0;
    &.fixspeed{
        animation-duration: 0s;
    }
    &.fixspeed.active{
        animation-duration: 2s;
    }
    &.fixspeed > div{
        animation-duration: 0s;
    }
    &.fixspeed.active > div{
        animation-duration: 2s;
    }

    & > div{
        animation-name: ${Boxrotateimganiafter};
    }

    &.active{
        opacity: 1;
        animation-name: ${Boxrotateani};
    }
    &.active > div{
        animation-name: ${Boxrotateimgani};
    }
    animation-timing-function: ease;
    /* animation-timing-function: cubic-bezier(0.8,0,0.8,1); */
`
const Boximg = styled.div`
    position: absolute;
    width: 200px;
    transform: rotate(0deg);
    background-image: url(${props => props.img});
    aspect-ratio: 1;
    background-repeat: no-repeat;
    background-size: contain, cover;
    bottom: 150px;
    right: 50px;
    transform-origin: center center;
    animation-timing-function: ease;
    filter: drop-shadow(12px 12px 25px ${props => props.sd});
    /* animation-timing-function: cubic-bezier(0.8,0,0.8,1); */
    animation-duration: 2s;
`

const Titleright = styled.h2`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2em;
`
const Titlerightstore = styled.h2`
    margin-top: 5px;
    margin-bottom: 0;
    font-size: 2em;
`


const Navbarcenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Navbar = styled.button`
    border-radius: 20px;
    background: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    cursor: pointer;
    color: #FFF;
    height: 50px;
    width: 50px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.5s ease-in-out;
    &:hover{
        transform: translateY(-10px);
    }
`

const Stylememe = () => {
    const [id, setId] = useState(0)
    const [indexold, setIndexold] = useState(0)
    const [swiper, setSwiper] = useState(null);
    const [swiperTitle, setSwiperTitle] = useState(null);
    const [bgcolor, setBgcolor] = useState('radial-gradient(#DB6200,#BA5400)')
    const [bgcolorold, setBgcolorold] = useState('radial-gradient(#DB6200,#BA5401)')

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
    const slidenep = document.querySelectorAll('.slidenep')
    const slidetitlenep = document.querySelectorAll('.slidetitlenep')
    let firstslide = true
    useEffect(() => {
        // if (bgcolor != bgcolorold) {
        setBgcolorold(bgcolor)
        // }
        setBgcolor(datamovie[id]?.colorbggradient)

        // console.log(Id)
        // const slidenep = document.querySelectorAll('.slidenep')
        if (firstslide) {
            slidenep.forEach(f => {
                f.classList.remove('fixspeed')
            })
            firstslide = false
        }
        slidenep.forEach(f => {
            f.classList.remove('active')
        })
        slidetitlenep.forEach(f => {
            f.classList.remove('active')
        })
        document.querySelector(`.slidenep-${id}`)?.classList.add('active')
        setTimeout(() => {
            document.querySelector(`.slidetitlenep`)?.classList.add('active')
        },100)

        
        if(swiperTitle!==null){
            // let len = datamovie.length
            let index = id+1
            // if(index === 1 && indexold != 2){
            //     swiperTitle.slideNext()
            // }else{
            //     swiperTitle.slideTo(index)
            // }
            swiperTitle.slideTo(index)
            setIndexold(index)
        }
    }, [id])
    return (
        <>
            <Bg>
                <Container>
                    <Wrapper>
                        <Box>
                            {datamovie.map((m, k) => <Boxrotate key={k} className={`slidenep fixspeed slidenep-${k}`}>
                                <Boximg img={m.imgslide} sd={m.colorbg} />
                            </Boxrotate>)}
                        </Box>
                        <Wrapperin>
                            <Wrapperleft>
                                <Boxbg bg={bgcolor} bgold={bgcolorold} className={`slidetitlenep`}>
                                    {/* <Titleleft>{datamovie[id]?.title}</Titleleft> */}
                                </Boxbg>
                                <Titleleft>
                                    <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller]}
                                        slidesPerView={1}
                                        loop={true}
                                        // controller={{ control: swiper }}
                                        onSwiper={setSwiperTitle}
                                    // navigation
                                    // pagination={{ clickable: true }}
                                    >
                                        {datamovie.map((m, k) =>
                                            <SwiperSlide key={m.id} style={{textAlign: 'center'}}>
                                                {m.title}
                                            </SwiperSlide>
                                        )}
                                    </Swiper>
                                </Titleleft>
                            </Wrapperleft>
                            <Wrapperright>
                                <CarouselCustom>
                                    <Titleright>My</Titleright>
                                    <Titlerightstore>store</Titlerightstore>
                                    <h4>product</h4>
                                    <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller]}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        loop={true}
                                        // navigation
                                        // pagination={{ clickable: true }}
                                        onSlideChange={(swiper) => { setId(geSlideDataIndex(swiper)); }}
                                        onSwiper={setSwiper}
                                        autoplay={{
                                            delay: 5000,
                                            disableOnInteraction: false,
                                        }}
                                    >
                                        {datamovie.map((m, k) =>
                                            <SwiperSlide key={m.id}>
                                                {[...Array(3)].map((l, kk) => (
                                                    <Product key={kk} style={{ background: (kk % 2 == 0 ? '#f6f6f6' : '') }}>
                                                        <Producttitle>
                                                            {m.title}
                                                        </Producttitle>
                                                        <Productcontent>
                                                            {m.title}
                                                        </Productcontent>
                                                        <Productimage img={m.imgslide} />
                                                    </Product>
                                                ))}
                                            </SwiperSlide>
                                        )}
                                    </Swiper>
                                </CarouselCustom>
                            </Wrapperright>
                        </Wrapperin>
                        <Navbarcenter>
                            <Navbar onClick={() => swiper.slideNext()}>
                                ♥
                            </Navbar>
                        </Navbarcenter>
                    </Wrapper>
                </Container>
            </Bg>
        </>
    )
}

export default Stylememe