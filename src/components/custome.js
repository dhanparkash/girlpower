import React, { Component } from "react";

import ReactDOM from "react-dom";

class GreetAlert extends Component {

  greetAlert() {

    alert("Welcome to the world of Programming!");

  }

  render() {

    return <button onClick={this.greetAlert}>Click to view the alert!</button>;

  }

}

export default GreetAlert;