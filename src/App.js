import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import LeftSideBar from './components/leftSideBar/LeftSideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home/Home';


import {
   BrowserRouter as Router
} from "react-router-dom";
function App() {
   return (
      <>
         <Router>

         </Router>
         <div className="App">


            <Header></Header>
            <div className="container-fluid">
               <div className="row">
                  <div className=" col-sm-12 col-xs-12 col-md-3 col-lg-2 ">
                     <div className="clildOne">
                        <LeftSideBar />
                     </div>
                  </div>
                  <div className="col-sm-12 col-xs-12 col-md-9 col-lg-10  ">
                     <div className="HomeArea">
                        <Home />
                     </div>
                  </div>
               </div>
            </div>



         </div>
      </>

   );
}

export default App;
