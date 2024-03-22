import React,{useEffect} from 'react'
import Publiclayout from '../../layout/Public'
import { Storedefault } from './components/Storedefault'

const Store = () => {

  useEffect(()=>{
    document.title = 'Store'
  },[])
  return (
    <Publiclayout>
        <Storedefault/>
    </Publiclayout>
  )
}
export default Store