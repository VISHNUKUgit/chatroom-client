import React, { useState } from 'react';

const ChatFooter = ({socket}) => {
  const [message, setMessage] = useState('');
  const handleTyping = () =>
  
  socket.emit('typing', `${sessionStorage.getItem(socket.id)} is typing...`)
  setTimeout(()=>socket.emit('typing',""),2000);

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(socket.id);
    if (message.trim() && sessionStorage.getItem(socket.id)) {
        // Emit a 'message' event to the server using the socket
        socket.emit('message', {
          text: message,
          name: sessionStorage.getItem(socket.id),
          id: `${socket.id}${Math.random()}`,  // Unique message ID
          socketID: socket.id,  // Socket ID of the sender
        });
      }
      // Clear the input field after sending a message
      setMessage('');
    // console.log({ userName: localStorage.getItem('userName'), message });
    
  };
  return (
    <div className="chat__footer bg-dark">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="form px-2"
          style={{outline:'none'}}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <button className="btn btn-success py-2" style={{borderRadius:"0"}}>SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;