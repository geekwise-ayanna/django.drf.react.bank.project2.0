import React, { Component } from "react";
import Branch from "./components/Branch";
import Customer from "./components/Customer";
 
class App extends Component{

  render() {
    return (
      <div>
      <Branch></Branch>
      <Customer></Customer>
      </div>
    )
  }
}
export default App;