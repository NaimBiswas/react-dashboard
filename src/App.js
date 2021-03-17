import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import LeftSideBar from './components/leftSideBar/LeftSideBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   return (
      <div className="App">
         {/* header gose where  */}
         <Header />
         {/* left Side Bar gose Header  */}
         <LeftSideBar />
      </div>
   );
}

export default App;
