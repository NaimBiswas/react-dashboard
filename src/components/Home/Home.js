import React, { Fragment } from 'react'
import styled from 'styled-components'

const Home = () => {
   return (
      <Fragment>
         <HomeContainer>
            <h3>This is home componets</h3>
         </HomeContainer>
      </Fragment>
   )
}
const HomeContainer = styled.div`
margin:15px;
`
export default Home
