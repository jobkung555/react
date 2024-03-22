import React from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'



const Publiclayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Publiclayout