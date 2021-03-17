import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import LeftSideBar from './components/leftSideBar/LeftSideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home/Home';

function App() {
   return (
      <>

         <div className="">
            <Header></Header>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-lg-2">
                     <div className="clildOne">
                        <LeftSideBar />
                     </div>
                  </div>
                  <div className="col-lg-10">
                     <Home />
                  </div>
               </div>
            </div>



         </div>
      </>

   );
}

export default App;
