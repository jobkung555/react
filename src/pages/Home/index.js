import React, { createContext, useEffect, useContext } from 'react'

import Publiclayout from '../../layout/Public'

import { datamovie } from "../../data/datamovie";

import { Content } from './components/Content'
import { Listbox } from './components/Listbox'
import { Listbrand } from './components/Listbrand'
import { ListComments } from './components/Listcomments'
import { Listtravel } from './components/Listtravel'
import { Boxwhat } from './components/Boxwhat'
import { Profile } from './components/Profile'



export const MovieDataContext = createContext()

const Home = () => {

  useEffect(() => {

    const scrollside = () => {
      //Content
      let scroll = window.scrollY
      let scrollarea = scroll + (window.outerHeight - 200)
      document.querySelectorAll('.scollnep').forEach(f => {
        f.classList.toggle("is-nep", !!(scrollarea >= f.offsetTop))
      })

      let anistart = document.querySelector('.anistart')
      let aniarea = document.querySelector('.aniend').offsetTop - window.outerHeight + anistart.offsetHeight
      document.querySelectorAll(".anicontent").forEach(f => {
        f.classList.toggle("active", !!(scroll >= anistart.offsetTop && scroll <= aniarea))
      })
      // End Content
    }

    window.onscroll = function (e) {
      scrollside()
    }
    scrollside()
  }, [])


  return (
    <>
      <Publiclayout>
        <Content data={datamovie} />
        <Listbox data={datamovie} />
        <Listbrand data={datamovie}/>
        <Profile />
        <ListComments />
        <Listtravel data={datamovie}/>
        <Boxwhat />
      </Publiclayout>



    </>
  )
}
export default Home
