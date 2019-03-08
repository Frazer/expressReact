import React from 'react'

const Messages = (props) => {
  return (
    <div className="messages">
      {props.messages.map((message,index) =>{
        return <div key={index} className={index%2?'blue':''}> {message[0]} - {message[1]}</div>
      })}
    </div>
  )
}

export default Messages