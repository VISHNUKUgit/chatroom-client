import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatBody = ({ messages,socket,lastMessageRef,typingStatus }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader bg-dark">
        <p className='text-light'>Hangout with Friends</p>
        <button className="leaveChat__btn " onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>


      <div className="message__container">

        {messages.map((message) =>
          message.name == sessionStorage.getItem(socket.id) ? (
            <div className="message__chats" key={message.id}>
<<<<<<< HEAD
              <p className="sender__name text-light ">You</p>
=======
              <p className="sender__name text-light">You</p>
>>>>>>> 814ad9f66a543157c2a0acb1c66ab5f891819dbf
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
          <p className='text-light'>{`${typingStatus}`}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
