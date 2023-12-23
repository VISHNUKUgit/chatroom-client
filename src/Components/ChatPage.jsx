import React, { useEffect, useRef, useState } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import { debounce } from 'lodash';

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState('');
  const lastMessageRef = useRef(null);
  useEffect(() => {
    const handleTypingResponse = (data) => setTypingStatus(data);


    socket.on('typingResponse', handleTypingResponse);
    // setTimeout(() => {
    //   setTypingStatus("")
    // }, 1000);


  }, [socket]);

  useEffect(() => {

    socket.on('messageResponse', (data) => setMessages([...messages, data]));

  }, [socket, messages]);
  useEffect(() => {
    // scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // mobile sreen

  const [sS, setScreenSize] = useState(window.innerWidth)
  window.addEventListener('resize', function () {

    const sW = window.innerWidth;

    setScreenSize(sW)
  });
  return (
    <div className={sS > 600 ? "chat" : ""}>
      {sS > 600 && <ChatBar socket={socket} />}
      <div className="chat__main">
        <ChatBody messages={messages} typingStatus={typingStatus} socket={socket} lastMessageRef={lastMessageRef} />
        <ChatFooter socket={socket} />
      </div>
    </div>

  );
};

export default ChatPage;