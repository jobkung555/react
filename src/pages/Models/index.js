import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Towerhome from './subpages/Towerhome'

import Publiclayout from '../../layout/Public'


const Models = (prop) => {

    useEffect(() => {
        document.title = '3D'

    }, [])

    return (
        <>
            <Publiclayout>

            </Publiclayout>
        </>
    )
}
export default Models