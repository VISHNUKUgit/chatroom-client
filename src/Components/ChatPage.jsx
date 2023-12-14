import React, { useEffect, useState } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  // mobile sreen

const [sS,setScreenSize] = useState(window.innerWidth)
window.addEventListener('resize', function() {
    
    const sW = window.innerWidth;
    
    setScreenSize(sW)
  });
  return (
    <div className={sS > 600 ? "chat" : ""}>
  {sS > 600 && <ChatBar socket={socket} />}
  <div className="chat__main">
    <ChatBody messages={messages} socket={socket} />
    <ChatFooter socket={socket} />
  </div>
</div>

  );
};

export default ChatPage;