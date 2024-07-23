import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import ProfilePage from './components/profilePage'; // Corrected this line

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Welcome to MERN App</h1>
      </header> */}
      <HomePage/>
      {/* <ProfilePage/> */}
    </div>
  );
}

export default App;
