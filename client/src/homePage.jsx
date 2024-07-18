import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './index.css';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';

import Register from './Register';
import Login from './Login';

const HomePage = () => {
  return (
    <Router>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Portfolio</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <div>
            <div className="jumbotron">
              <div className="container text-center">
                <h1>My Portfolio</h1>
                <p>Some text that represents "You"...</p>
              </div>
            </div>
            <div className="container-fluid bg-3 text-center">
              <h3>Some of my Work</h3>
              <br/>
              <div className="row">
                <div className="col-sm-3">
                  <p>Some text..</p>
                  <img src={img1} className="img-responsive" style={{ width: '100%' }} alt="Image"/>
                </div>
                <div className="col-sm-3">
                  <p>Some text..</p>
                  <img src={img2} className="img-responsive" style={{ width: '100%' }} alt="Image"/>
                </div>
                <div className="col-sm-3">
                  <p>Some text..</p>
                  <img src={img3} className="img-responsive" style={{ width: '100%' }} alt="Image"/>
                </div>
                <div className="col-sm-3">
                  <p>Some text..</p>
                  <img src={img4} className="img-responsive" style={{ width: '100%' }} alt="Image"/>
                </div>
              </div>
            </div>
            <br/>
            <div className="container-fluid bg-3 text-center">
              <div className="row">
                <div className="col-sm-3">
                  <p>Some text..</p>
                  <img src={img5} className="img-responsive" style={{ width: '100%' }} alt="Image"/>
                </div>
                <div className="col-sm-3">
                  <p>Some text..</p>
                  <img src={img6} className="img-responsive" style={{ width: '100%' }} alt="Image"/>
                </div>
                <div className="col-sm-3">
                  <p>Some text..</p>
                  <img src={img7} className="img-responsive" style={{ width: '100%' }} alt="Image"/>
                </div>
                <div className="col-sm-3">
                  <p>Some text..</p>
                  <img src={img1} className="img-responsive" style={{ width: '100%' }} alt="Image"/>
                </div>
              </div>
            </div>
            <br/>
            <footer className="container-fluid text-center">
              <p>Footer Text</p>
            </footer>
          </div>
        </Route>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default HomePage;
