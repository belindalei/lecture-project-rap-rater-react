import React, { Component } from 'react';

class Button extends Component {

  render(){
    let button = this.props.direction === "up" ? <button id={this.props.rapper} onClick={this.props.onClick} className="upButton">upvote</button>:<button onClick={this.props.onClick} className="downButton">downvote</button>
    return (<div>{button}</div>)
  }
}

export default Button;
