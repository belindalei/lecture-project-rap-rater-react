import React, { Component } from 'react';
import Button from "./Button"

class Rapper extends Component{

  render(){
    return (<div >
    <p>{this.props.rapper.name}</p>
    <img id="rapper pic" alt="" className="rapperPic" src={this.props.image}></img>
    <Button direction="up" onClick={this.props.onClick} rapper={this.props.rapper.name}/>
    <Button direction="down" onClick={this.props.onClick} rapper={this.props.rapper.name}/>
    </div>
    )
  }
}

export default Rapper;
