import React, { useState } from "react";


const ChatInput = (props) => {
  const [chatInput, setChatInput] = useState("");

  const handleInputChange = (event) =>{
    const value = event.target.value;
    
    setChatInput(value);
  }
  
  const enterPressed = (event) => {
    var code = event.keyCode || event.which;
    if(code === 13) { //13 is the enter keycode
      props.addMessage(event.target.value);
      setChatInput("");
    } 
  }
  return (
    <div>
      <input
          placeholder='Chat'
          onChange={handleInputChange}
          value={chatInput} 
          onKeyPress={enterPressed}
          name="chatInput"
      />
    </div>
  )
}
export default ChatInput;