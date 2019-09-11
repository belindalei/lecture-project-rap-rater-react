import React from 'react';

const Button = (props) => {
  let button = props.direction === "up" ? <button id={props.rapperName} onClick={props.onClick} className="upButton">upvote</button> : <button id={props.rapperName} onClick={props.onClick} className="downButton">downvote</button>
  return (
    <div>
      {button}
    </div>
  )
}

export default Button;
