import React from 'react'
import Route from 'react-router-dom'
import Home from '../Home/Home'
const MyRoute = () => {
   return (
      <div>
         <Route patch='/'>
            <Home />
         </Route>

      </div>
   )
}

export default MyRoute
