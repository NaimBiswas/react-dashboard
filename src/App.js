import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import LeftSideBar from './components/leftSideBar/LeftSideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
   return (
      <>

         <div className="">
            <Header></Header>
            <div className="clildOne">
               <LeftSideBar />
            </div>



         </div>
      </>

   );
}

export default App;
