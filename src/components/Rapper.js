import React, { Component } from 'react';
import Button from "./Button"

const Rapper = (props) => {
  return (
    <div >
      <p>{props.rapper.name}</p>
      <p>{props.rapper.rating}</p>
      <img id="rapper pic" alt="" className="rapperPic" src={props.image}></img>
      <Button direction="up" onClick={props.upClickHandler} rapperName={props.rapper.name} />
      <Button direction="down" onClick={props.downClickHandler} rapperName={props.rapper.name} />
    </div>
  )
}

export default Rapper;
