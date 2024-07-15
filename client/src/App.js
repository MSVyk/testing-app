import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
// import Navbar from './components/Navbar';
// import Alert from './components/Alert';
// import NotFound from './components/NotFound';
import HomePage from './homePage';
import ProfilePage from './profile';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Navbar />
        <Alert /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} /> */}
          <Route path="profile/" element={<ProfilePage />} />
          {/* <Route
            path="create-profile"
            element={<PrivateRoute component={ProfileForm} />}
          /> */}
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
