import React, { Component } from 'react';
import Messages from './Messages.js'
import ChatInput from './ChatInputFunctional.js';  //done with hooks
// import ChatInput from './ChatInput.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      messages: []
    }
    this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount(){
    this.getMessage();
    setInterval(() => {
      this.getMessage();
    }, 30000);
  }

  getMessage = () =>{
    fetch('/ep1').then(response=>{
      response.json().then(
        data =>{
          data = Object.entries(data)
          data = this.state.messages.concat(data)
          this.setState({messages:data});
  
        }
      )
    },
    reject=>{
      console.error("end point failed")
    });
  };

  addMessage = (message) =>{
    let data = ['User',message]
    data = [...this.state.messages,data]
    this.setState({messages:data});
  }
  resetMessages = () =>{
    this.setState({messages:[]});
  }
  
  render() {
    return (
      <div className="App">
        <Messages messages={this.state.messages}/>
        <ChatInput addMessage={this.addMessage}/>
        <button onClick={this.resetMessages}>reset</button>
      </div>
    );
  }
}

export default App;
