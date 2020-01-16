import React, { Component } from "react";
import Branch from "./components/Branch";
import Customer from "./components/Customer";
import NavbarPage from "./components/Navbar";
 
class App extends Component{

  render() {
    return (
      <div>
        <NavbarPage></NavbarPage>
        <Branch></Branch>
        <Customer></Customer>
      </div>
    )
  }
}
export default App;