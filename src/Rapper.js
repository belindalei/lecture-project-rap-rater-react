import React, { Component } from 'react';
import Button from "./Button"

class Rapper extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div >
        <p>{this.props.rapper.name}</p>
        <p>{this.props.rapper.rating}</p>
        <img id="rapper pic" alt="" className="rapperPic" src={this.props.image}></img>
        <Button direction="up" onClick={this.props.upClickHandler} rapperName={this.props.rapper.name} />
        <Button direction="down" onClick={this.props.downClickHandler} rapperName={this.props.rapper.name} />
      </div>
    )
  }
}

export default Rapper;
