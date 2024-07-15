import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import HomePage from './homePage';
import ProfilePage from './profile';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="profile/" element={<ProfilePage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
