import React, { Component } from 'react';
import rapperList from './rapperList';
import Rapper from './Rapper';

class Main extends Component {
  constructor(props){
    super(props)
    let sortedList = rapperList.sort((rapper1, rapper2) => {
      return rapper2.rating - rapper1.rating
    })
    this.state = {
      rapperList: sortedList,
    }
  }

  onClick = (e) => {
    let rapperList = [...this.state.rapperList]
    if (e.target.className === "upButton") {
      let rapper = rapperList.find(rapper => rapper.name === e.target.id)
      rapper.rating += 1
    } else {
      let rapper = rapperList.find(rapper => rapper.name === e.target.id)
      rapper.rating -= 1
    }
    let sortedList = rapperList.sort((rapper1, rapper2) => {
      return rapper2.rating - rapper1.rating
    })
    this.setState({
      rapperList: sortedList
    })
  }

  render() {
    console.log(this.state.rapperList);
    let rappers = this.state.rapperList.map(rapper => {
      let image = this.state.rapperList[0].name === rapper.name ? rapper.happyImage:rapper.sadImage
        return <Rapper key={rapper.name} image={image} rapper={rapper} onClick={this.onClick}/>
    })
    return (
      <div className="App">
        {rappers}
      </div>
    );
  }
}

export default Main
