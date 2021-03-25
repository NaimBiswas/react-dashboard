import React, { Fragment, useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import styled from 'styled-components'

const Home = () => {




   return (
      < >

         <HomeContainer>
            <div className="container-fluid m-0 p-0">
               <div className="col-lg-12 m-0 p-0">
                  <div id="header w-100" className={`bg-dark d-block pt-2 pb-2 h5 text-light justify-content-between scrolled `}>
                     <span className="ml-2">Categories</span>
                     <Button className="float-right text-light" variant='' title="Add Category">+</Button>
                  </div>
               </div>
            </div>
            <HomeContent >

            </HomeContent>

         </HomeContainer>


      </>
   )
}
const HomeContent = styled.div`
    
`
const HomeContainer = styled.div`
.scrolled{
    position: absolute;
    top: 0;
    width:100%;
  
    padding-left: -21px;
   
    border-radius: 5px 5px 0px 0px;
    z-index:1;
}
 div {
    border-radius:5px;
    padding:5px;
 }
  span{
     line-height: 33px;
  }
  button{
    font-size: 34px;
    padding: 0;
    margin: 0;
    margin-top: -13px;
    margin-right: 5px;
    :focus{
       outline: 0;
       box-shadow: unset;
    };
    :hover{
       opacity: .9;
       transform: scale(1.2);
    }
  }
  
 
`
export default Home
