import React, {Component} from "react";


export  class Wrapper extends Component {
  render() {
    return (
      <div className={this.props.className}>{this.props.children}</div>
    );
  }
}


