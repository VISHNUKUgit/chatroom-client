import React, { useState } from 'react';

const ChatFooter = ({socket}) => {
  const [message, setMessage] = useState('');

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
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;