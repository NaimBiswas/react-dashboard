import React from 'react'
import styled from 'styled-components'
import "./LeftSideBar.css"
const LeftSideBar = () => {
   return (
      <div className="app">

         <LeftSiderBar>

            <ul onClick={() => alert('Categories')} className="nav SidebarNav">
               <li className='nav-items'>
                  <a href="#" className='nav-link'>
                     Categoroies
                  </a>
               </li>
            </ul>
            <ul className="nav SidebarNav">
               <li className='nav-items'>
                  <a href="#" className='nav-link'>
                     Tags
                  </a>
               </li>
            </ul>

            <ul className="nav SidebarNav">
               <li className='nav-items'>
                  <a href="#" className='nav-link'>
                     Post
                  </a>
               </li>
            </ul>




         </LeftSiderBar>
      </div>
   )
}
const LeftSiderBar = styled.div`
    max-height: 86vh;
    overflow-x: overlay;
    margin-top:15px;
    margin-bottom:15px;
    ul {
       :hover{
          cursor: pointer;
       };
    }
    
  
`

export default LeftSideBar
