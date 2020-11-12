import React, { Component } from 'react'
import DialogDiv from './dialog'
import Counter from './counter'


class App extends Component {
  state = {
    dialogBox : true,
    username : '',
    hideContents : true
  }

  changeName = (nameValue)  => {
    this.setState({
        username : nameValue,
        dialogBox : false
    })
  } 

  changeStatus =() => {
    this.setState({
      dialogBox : true
    })
  }
  render(){
  return (

    <div className="container">
      <DialogDiv status={this.state.dialogBox} onChange={this.changeName}/>
      <Counter onStatus={this.changeStatus} contents={this.state.hideContents} name={this.state.username} status={this.state.dialogBox}/>

    </div>

  );
  }
}

export default App;
