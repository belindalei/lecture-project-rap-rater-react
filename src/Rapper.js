import React, { Component } from 'react';
import Button from "./Button"

class Rapper extends Component{

  onClick(e) {
    log
  }

  render(){
    return (<div >
    <p>{this.props.rapper.name}</p>
    <img id="rapper pic" alt="" className="rapperPic" src={this.props.image}></img>
    <Button direction="up" onClick={this.onClick} rapper={this.props.rapper.name}/>
    <Button direction="down" onClick={this.onClick}/>
    </div>
    )
  }
}

export default Rapper;
