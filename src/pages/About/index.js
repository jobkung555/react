import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Publiclayout from '../../layout/Public'

import myimage from '../../assets/images/10353375_10203925424720969_2981178867383107526_o.jpg'
import imagestyle from '../../assets/images/2.jpg'

const Mainbg = styled.div`
  background: #D0D7DF;
`

const MainBlock = styled.div`
  background: #2B3849;
  max-width: 950px;
  margin: 0 auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: flex;
  flex-direction: column;
`

const Block = styled.section`
  &:first-child{
    margin-top: 200px;
  }
  @media only screen and (max-width: 1199px) {
    &:first-child{
      margin-top: 100px;
    }
    padding: 15px;
  }
`
const Blockbg = styled.div`
  height: 400px;
  width: calc(100% + 100px);
  background: ${props => props.theme.bg};
  margin-bottom: 100px;
  flex: none;
  margin-left: ${props => props.theme.marginLeft};
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  @media only screen and (max-width: 1199px) {
    display: none;
  }
`
Blockbg.defaultProps = {
  theme: {
    bg: "rgba(14,30,30,0.9)",
    marginLeft: "-50px"
  }
}
const sectionBg2 = {
  bg: "#E3689E",
  marginLeft: "-100px"
};

const Blockcontent = styled.div`
  min-height: 380px;
  width: 380px;
  padding: 20px;
  background: #FFF;
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${props => props.theme.margin};
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  @media only screen and (max-width: 1199px) {
    position: static;
    width: calc(100% - 40px);
    margin: 0;
  }
`
Blockcontent.defaultProps = {
  theme: {
    margin: "-50px 0 0 -100px"
  }
}
const sectionC2 = {
  margin: "50px 0 0 -50px"
};

const Blockimage = styled.div`
  background-image: ${props => props.theme.image};
  background-repeat: no-repeat;
  background-size: cover;
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  position: absolute;
  z-index: 3;
  margin: ${props => props.theme.margin};
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  filter: grayscale(100%);
  @media only screen and (max-width: 1199px) {
    position: static;
    width: 100%;
    margin: 0;
    height: 400px;
  }
`

Blockimage.defaultProps = {
  theme: {
    width: "600px",
    height: "500px",
    image: `url(${myimage})`,
    margin: "-100px 0 0 300px"
  }
}

const Hiddenimage = styled.div`
  background-image: ${imagestyle};
`

const sectionI2 = {
  width: "600px",
  height: "450px",
  image: "url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg)",
  margin: "-50px 0 0 250px"
};

const BlockTitle = styled.h2`
  margin: 0;
`
const BlockContent = styled.p`
  text-align: center;
`


const About = (prop) => {
  
  useEffect(() => {
    document.title = 'About'
    function scrollside() {
      let scroll = window.scrollY
      let scrollarea = scroll + (window.outerHeight - 200)
      document.querySelectorAll('.scollnep').forEach(f => {
        f.classList.toggle("is-nep", !!(scrollarea >= f.offsetTop))
      })
    }
    window.onscroll = function (e) {
      scrollside()
    }
    scrollside()


  }, [])

  return (
    <>
      <Publiclayout>
        <Mainbg>
          <MainBlock>
            <Block>
              <Blockcontent className='animation-lefttoright scollnep'>
                <BlockTitle>Thamasak Sanongdet</BlockTitle>
                <BlockContent>
                  I have been working in Programer for over 6 years. Experienced front end developer with a demonstrated history of working in the information technology. Skilled in SQL, PHP, jQuery, Cascading Style Sheets (CSS), and HTML. So I'm looking for front end in hopes of developing my skills.
                </BlockContent>
              </Blockcontent>
              <Blockimage className='animation-righttoleft scollnep' />
              <Blockbg />
            </Block>
          </MainBlock>
        </Mainbg>
        <Hiddenimage/>
      </Publiclayout>
    </>
  )
}
export default About