import React, { Fragment } from 'react'
import styled from 'styled-components'

const Home = () => {
   return (
      <Fragment>

         <HomeContainer>
            <h3>This is home componets</h3>
            <HomeContent>
               <h3>Hello World</h3>
            </HomeContent>
         </HomeContainer>

      </Fragment>
   )
}
const HomeContent = styled.div`
 
`
const HomeContainer = styled.div`
  
  margin:15px  0 15px 15px;
  min-height:86vh;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
  border-radius: 5px;
  position: relative;
  z-index: 1;
  background: inherit;
  border-radius:10px;
  
  padding:15px;
`
export default Home
