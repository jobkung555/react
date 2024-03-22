import React from 'react'
import { Container } from '../../../../components/Styles'
import styled from 'styled-components'
import Storeitem from '../Storeitem'

import { datamovie } from '../../../../data/datamovie'

const Wrapper = styled.div`
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 1fr 1fr;
`



export const Storedefault = () => {
    const quantity = 0

    return (
        <Container>
            <Wrapper>
                {datamovie?.map(item => <Storeitem key={item.id} {...item}/>)}
            </Wrapper>
        </Container>
    )
}
