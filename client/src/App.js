import React from 'react';
import HomePage from './homePage';
import ProfilePage from './profile';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to MERN App</h1>
      </header>
      <HomePage/>
      <ProfilePage/>
    </div>
  );
}

export default App;
