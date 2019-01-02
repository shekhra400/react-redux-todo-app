import React, { Component } from 'react';
// import logo from './logo.svg';
// import { Button } from 'react-bootstrap';
import { BrowserRouter, Switch, Route , Link } from 'react-router-dom';
import './App.css';
import HomeComponent from './HomeComponent/HomeComponent';
import PostComponent from './PostComponent/PostComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
        <header>
          <h1 className="my-4">React Todo Application</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to={'/'}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/posts'}>Posts</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/contact'}>ContactUs</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
          <Switch>
            <Route exact path='/' component={HomeComponent}/>
            <Route path='/posts' component={HomeComponent}/>
            <Route path='/post' component={PostComponent}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
