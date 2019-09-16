import React from 'react';
import './App.css';
import Navbar from './container/Navbar';
import UpperContainer from './container/UpperContainer';
import Cards from './container/Cards';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <UpperContainer />
      <Cards />
    </div>
  );
}

export default App;
