import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatBody = ({ messages,socket }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader bg-dark">
        <p className='text-light'>Hangout with Colleagues</p>
        <button className="leaveChat__btn " onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>


      <div className="message__container">

        {messages.map((message) =>
          message.name == sessionStorage.getItem(socket.id) ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name text-light">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p className='text-light'>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        
        <div className="message__status">
          <p>Someone is typing...</p>
        </div>
      </div>
    </>
  );
};

export default ChatBody;
