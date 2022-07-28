import React, { useState, useEffect } from 'react'
import Publiclayout from '../../layout/Public'

import styled from 'styled-components';
import { datamovie } from '../../data/datamovie';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../../assets/css/movie.css'

const MainCarousel = styled.div`
    position: relative;
`

const CarouselCustom = styled.div`
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 50vw;

    @media screen and (max-width: 1024px){
        width: calc(100vw - 60px);
        right: 0;
        padding: 0 30px;
    }
`

const BoxMovie = styled.div`
    /* &:hover .moviecontent{
        display: block;
    }  */
    /* position: relative; */

    &.active .moviecontent{
        background: #141414;
    }
`
const BoxMovieVi = styled.div`
    /* &:hover .moviecontent{
        display: block;
    }  */
`
const BoxMovieIn = styled.div`
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
`
const Imgmovie = styled.div`
    background-image: url(${props => props.img});
    width: 100%;
    aspect-ratio: 1/0.8;
    background-repeat: no-repeat;
    background-size: cover;
`

const BoxContentmovie = styled.div`
    padding: 10px;
    background: #000;
`
const Titlemovie = styled.h2`
    color: #fff;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size:2em;
    line-height:1.5em;
    height:1.5em;
`
const Textmovie = styled.p`
    color: #fff;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size:1em;
    line-height:1em;
    height:1em;
    margin: 5px 0;
`

const IconPlay = styled.svg`
    width: 30px;
    height: 30px;
    margin-top: 5px;
    color: #fff;
`

const Visibility = styled.div`
    /* position: absolute;
    transform-origin: center center;
    transition: 0.3s all ease-in-out;
    transform: translateX(0px) translateY(0px) scaleX(1.2) scaleY(1.2) translateZ(0px);
    z-index: 3; */
    /* & > div{
        position: absolute;
        transform-origin: center center;
        transition: 0.3s all ease-in-out;
        transform: translateX(0px) translateY(0px) scaleX(1.2) scaleY(1.2) translateZ(0px);
        z-index: 3;
    } */
`

const Hero = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.data.img});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`
const HeroWrapper = styled.div`
    position: relative;
    background-image: linear-gradient(transparent,#000);
    width: 100%;
    height: 100vh;
`

const MainTitleMovie = styled.h2`
    position: absolute;
    left: 5%;
    top: 100px;
    font-size: 2em;
    line-height: 2em;
    color: #fff;
    margin: 0;
`
const MainTextMovie = styled.p`
    position: absolute;
    left: 5%;
    top: 170px;
    width: 40vw;
    font-size: 1em;
    line-height: 1.5em;
    color: #fff;
    margin: 0;
    @media screen and (max-width: 1024px){
        width: 90%;
        right: 5%;
    }
`


const Movie = () => {
    const [Id, setId] = useState(0)

    useEffect(() => {
        // console.log(Id)
        // console.log(datamovie[Id])

        let boxactive = document.querySelector(`.slider-item-${Id}`)
        document.querySelectorAll(`.slider-item`).forEach(m => {
            m.classList.remove("active")
        })
        boxactive.classList.add("active")
    }, [Id])


    const movieClick = (id) => {
        setId(id)
        // let visibilitybox = document.querySelector("#visibilitybox")
        // let box = document.querySelector("#visibilitybox > div")
        // visibilitybox.setAttribute('style', 'display: block;')


        // let boxactive = document.querySelector(`.slider-item-${id}`)
        // let boxwidth = boxactive.offsetWidth
        // let boxheight = boxactive.offsetHeight
        // let boxtop = boxactive.offsetTop
        // let boxleft = boxactive.offsetLeft
        // console.log(boxtop)
        // console.log(boxleft)
        // console.log(box)
        // box.setAttribute('style', `width:${boxwidth}px; height:${boxheight}px`);
    }

    return (
        <>
            <Publiclayout>
                <MainCarousel>
                    <Hero data={datamovie && datamovie[Id]}>
                        {datamovie && datamovie[Id] ?
                            <HeroWrapper>
                                <MainTitleMovie>{datamovie[Id].title}</MainTitleMovie>
                                <MainTextMovie>{datamovie[Id].text}</MainTextMovie>
                            </HeroWrapper>
                            : ``}
                    </Hero>
                    <CarouselCustom>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={3}
                            navigation
                            //pagination={{ clickable: true }}
                            onSlideChange={(swiper) => setId(swiper.activeIndex)}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: true,
                            }}
                        >
                            {datamovie.map((m, k) =>
                                <SwiperSlide key={m.id}>
                                    <BoxMovie className={`slider-item slider-item-${k}`} onClick={() => movieClick(m.id - 1)}>
                                        <BoxMovieIn>
                                            <Imgmovie img={m.img} />
                                            <BoxContentmovie className="moviecontent">
                                                <Titlemovie>{m.title}</Titlemovie>
                                                <Textmovie>{m.text}</Textmovie>
                                                <IconPlay xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                                </IconPlay>
                                            </BoxContentmovie>
                                        </BoxMovieIn>
                                    </BoxMovie>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </CarouselCustom>
                    {/* <Visibility id="visibilitybox" style={{ 'display': 'none' }}>
                {datamovie && datamovie[Id] ?
                <BoxMovieVi>
                    <BoxMovieIn>
                        <Imgmovie img={datamovie[Id].img}/>
                        <BoxContentmovie className="moviecontent">
                            <Titlemovie>{datamovie[Id].title}</Titlemovie>
                            <Textmovie>{datamovie[Id].text}</Textmovie>
                            <IconPlay xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                            </IconPlay>
                        </BoxContentmovie>
                    </BoxMovieIn>
                </BoxMovieVi> : ``}
            </Visibility> */}
                </MainCarousel>
            </Publiclayout>
        </>
    )
}
export default Movie