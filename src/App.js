import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import LeftSideBar from './components/leftSideBar/LeftSideBar';

function App() {
   return (
      <div className="App">
         <Header />
         <LeftSideBar />
      </div>
   );
}

export default App;
