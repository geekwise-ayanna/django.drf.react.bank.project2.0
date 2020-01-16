import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from "react";
import Branch from "./components/Branch";
import Customer from "./components/Customer";
import NavbarPage from "./components/Navbar";
 
class App extends Component{

  render() {
    return (
      <div>
        <Router>
          <NavbarPage></NavbarPage>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/branch" component={Branch} />
          {/* <Route path="/account" component={Account} /> */}
          <Route path="/customer" component={Customer} />
          {/* <Route path="/product" component={Products} /> */}
        </Router>
        {/* <Branch></Branch>
        <Customer></Customer> */}
      </div>
    )
  }
}
export default App;