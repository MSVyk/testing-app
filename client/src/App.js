import React from 'react';
import HomePage from './homePage';
import ProfilePage from './profile';


function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h1>Welcome to MERN App</h1>
  //     </header>
  //     <HomePage/>
  //     <ProfilePage/>
  //   </div>
  // );
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} /> */}
          <Route path="profile/:id" element={<ProfilePage />} />
          
          {/* <Route
            path="create-profile"
            element={<PrivateRoute component={ProfileForm} />}
          /> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
