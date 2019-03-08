import React, { Component } from 'react'

export default class ChatInput extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      chatInput: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.enterPressed = this.enterPressed.bind(this);
  }

  handleInputChange = (event) =>{
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }
  
  enterPressed(event) {
    var code = event.keyCode || event.which;
    if(code === 13) { //13 is the enter keycode
      this.props.addMessage(event.target.value);
      this.setState({
        chatInput: ''
      });
    } 
  }
  render() {
    return (
      <div>
        <input
            placeholder='Chat'
            onChange={this.handleInputChange}
            value={this.state.chatInput} 
            onKeyPress={this.enterPressed}
            name="chatInput"
        />
      </div>
    )
  }
}
