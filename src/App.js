import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from "react";
import Branch from "./components/Branch";
import Customer from "./components/Customer";
import Account from "./components/Account";
import NavbarPage from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import ForgotPassword from './components/ForgotPassword';

class App extends Component{

  render() {
    return (
      <div className="App">
        <Router>
          <NavbarPage></NavbarPage>
          {/* <Route exact path="/home" component={Home} /> */}
          <Route path="/branch" component={Branch} />
          <Route path="/account" component={Account} />
          <Route path="/customer" component={Customer} />
          <Route path="/forgotpassword" component={ForgotPassword}/>
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </Router>
      </div>
    )
  }
}
export default App;