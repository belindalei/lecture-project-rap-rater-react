import React, { Component } from 'react';
import './App.css';
import Rapper from './components/Rapper';
import rapperList from './rapperList';

class App extends Component {
  constructor(props) {
    super(props)
    let sortedList = rapperList.sort((rapper1, rapper2) => {
      return rapper2.rating - rapper1.rating
    })
    this.state = {
      rapperList: rapperList,
    }
  }

  onUpClick = (e) => {
    let rapperList = [...this.state.rapperList]
    let rapper = rapperList.find(rapper => rapper.name === e.target.id)
    rapper.rating += 1
    this.setState({
      rapperList: rapperList
    })
  }

  onDownClick = (e) => {
    let rapperList = [...this.state.rapperList]
    let rapper = rapperList.find(rapper => rapper.name === e.target.id)
    rapper.rating -= 1
    this.setState({
      rapperList: rapperList
    })
  }

  sortedRappers = () => {
    return this.state.rapperList.sort((rapper1, rapper2) => {
      return rapper2.rating - rapper1.rating
    })
  }

  render() {
    console.log(this.state.rapperList);
    let rappers = this.sortedRappers().map(rapper => {
      let image = this.state.rapperList[0].name === rapper.name ? rapper.happyImage : rapper.sadImage
      return <Rapper key={rapper.name} image={image} rapper={rapper} upClickHandler={this.onUpClick} downClickHandler={this.onDownClick} />
    })
    return (
      <div className="App">
        {rappers}
      </div>
    );
  }
}

export default App;
