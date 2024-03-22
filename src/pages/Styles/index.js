import React,{useEffect} from 'react'
import Publiclayout from '../../layout/Public'

import Moviestyle from './components/Moviestyle'
import Stylememe from './components/Stylememe'
import Perspective from './components/Perspective'
import Mask from './components/Mask'

const Styles = () => {
  useEffect(()=>{
    document.title = 'Styles'
  },[])
  return (
    <>
      <Publiclayout>
        <Moviestyle />
        <Stylememe />
        <Perspective />
        <Mask />
      </Publiclayout>
    </>
  )
}

export default Styles