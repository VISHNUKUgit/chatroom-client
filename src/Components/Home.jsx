import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem(socket.id, userName);
    //sends the username and socket ID to the Node.js server
    socket.emit('newUser', { userName, socketID: socket.id });
    navigate('/chat');
    console.log(socket.id);
  };
  // mobile sreen

const [sS,setScreenSize] = useState(window.innerWidth)
window.addEventListener('resize', function() {
    
    const sW = window.innerWidth;
    
    setScreenSize(sW)
  });
  return (
    <form className="bg-dark d-flex flex-column w-100 vh-100 align-items-center justify-content-center" onSubmit={handleSubmit}>
      <h2 className="text-light border-bottom mb-4">Sign in to Open Chat</h2>
      <label className='text-light' htmlFor="username">Username</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className={`form-control ${sS>600?'w-25':'w-75'}`}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className={`btn ${sS>600?'w-25':'w-75'} btn-success my-4`} >SIGN IN</button>
    </form>
  );
};

export default Home;
