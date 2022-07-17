import React, { Component } from "react";
import { Wrapper } from "./Components/Wrapper/Wrapper";
import classes from "./UserInterface/Global.module.css";
import "./App.css";

 class App extends Component {
constructor () {
  super();
  this.state = {
    time: (new Date()).toLocaleTimeString(),
    date: (new Date()).toLocaleDateString()
  }
}

componentDidMount() {
  this.setState({
    time: (new Date()).toLocaleTimeString(),
    date: (new Date()).toLocaleDateString()
  });
}

componentDidUpdate() {
  setTimeout(() => {
   this.setState({
    time: (new Date()).toLocaleTimeString(),
    date: (new Date()).toLocaleDateString()
   })
  }, 1000);
}


  render() {
    return (
      <Wrapper className={classes.Wrapper}>
      <p>{this.state.date}</p>  
      <p>{this.state.time}</p>
      </Wrapper>
    );
  }
}

export default App;