import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);
  // mobile sreen

  const [sS, setScreenSize] = useState(window.innerWidth)
  window.addEventListener('resize', function () {

    const sW = window.innerWidth;

    setScreenSize(sW)
  });
  const id = sessionStorage.getItem("id")
  console.log(id);
  return (
    <>{sS > 600 ?
      <div className="chat__sidebar bg-dark">
        <h2 className='text-light'>Open Chat</h2>

        <div>
          <h4 className="chat__header text-light">ACTIVE USERS</h4>
          <div className="chat__users ">
            {
              users
                ? users.map((user) => (
                  user.socketID !== id ? (
                    <p key={user.socketID}>
                      <i className="fa-solid fa-circle fa-sm" style={{ color: "#37ff00",marginRight: "8px" }}></i>{user.userName}
                    </p>
                  ) : null
                ))
                : "no Active user"
            }
          </div>
        </div>
      </div> : <DropdownButton className='bg-dark' id="dropdown-basic-button" title="ACTIVE USERS">
        <Dropdown.Item >User 1</Dropdown.Item>
        <Dropdown.Item >User 2</Dropdown.Item>
        <Dropdown.Item >User 3</Dropdown.Item>
      </DropdownButton>}
    </>
  );
};

export default ChatBar;