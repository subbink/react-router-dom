// https://www.techiediaries.com/react-router-dom-v4/
import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import { BrowserRouter, Router, Link, Route } from 'react-router-dom';
//import { BrowserRouter, Link, Route } from 'react-router-dom';
import { HashRouter, Link, Route } from 'react-router-dom';
import AboutPage from './AboutPage.js';
import HomePage from './HomePage.js';
import LoginPage from './LoginPage.js';
import RegisterPage from './RegisterPage.js';
import ProfilePage from './ProfilePage.js';
import ContactPage from './ContactPage.js';

const BaseLayout = () => (
  <div className="base">
    <header>
      <p>React Router v4 Browser Example</p>
        <nav id="nav_links">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/me'>Profile</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
    </header>
    <div className="container">
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/me" component={ProfilePage} />
    </div>
    <footer>
        React Router v4 Browser Example (SIDN)
    </footer>
  </div>
)

//const HomePage = () => <div>This is a Home Page</div>
//const LoginPage = () => <div>This is a Login Page</div>
//const RegisterPage = () => <div>This is a Register Page</div>
//const ProfilePage = () => <div>This is the Profile Page</div>
//const AboutPage = () => <div>This is an About Page</div>
//const ContactPage = () => <div>This is a Contact Page</div>

function App() {
  return (
    <div className="App">
      <HashRouter>
        <BaseLayout />
      </HashRouter>
    </div>
  );
}

//      <Route exect path="/" component={HomePage} />

export default App;

// vim: et ts=2 sw=2
