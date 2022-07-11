import React, { Component } from "react";
import { Wrapper } from "./Components/Wrapper/Wrapper";
import classes from "./UserInterface/Global.module.css"

 class App extends Component {
constructor () {
  super();
  this.state = {
    date: (new Date()).toLocaleTimeString()
  }
}

componentDidMount() {
  this.setState({
    date: (new Date()).toLocaleTimeString()
  });
}

componentDidUpdate() {
  setTimeout(() => {
   this.setState({
    date: (new Date()).toLocaleTimeString()
   })
  }, 1000)
}


  render() {
    return (
      <Wrapper className={classes.Wrapper}>
      <p>{this.state.date}</p>
      </Wrapper>
    )
  }
}

export default App;