import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ChatBar = () => {
  // mobile sreen

const [sS,setScreenSize] = useState(window.innerWidth)
window.addEventListener('resize', function() {
    
    const sW = window.innerWidth;
    
    setScreenSize(sW)
  });
  return (
    <>{ sS > 600?
      <div className="chat__sidebar bg-dark">
    <h2 className='text-light'>Open Chat</h2>

    <div>
      <h4 className="chat__header text-light">ACTIVE USERS</h4>
      <div className="chat__users ">
        <p>User 1</p>
        <p>User 2</p>
        <p>User 3</p>
        <p>User 4</p>
      </div>
    </div>
  </div>:<DropdownButton className='bg-dark' id="dropdown-basic-button" title="ACTIVE USERS">
      <Dropdown.Item >User 1</Dropdown.Item>
      <Dropdown.Item >User 2</Dropdown.Item>
      <Dropdown.Item >User 3</Dropdown.Item>
    </DropdownButton>}
    </>
  );
};

export default ChatBar;