import React, { useState } from "react";
import "./loginstyle.css";

export default function LoginForm({ onLoginSuccess, onBack }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (user === 'admin' && password === '123') {
      onLoginSuccess();
    } else {
      setMessage('Invalid data');
    }
  };

  return (
    <div className="cover">
      <h1 className="log">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="user">
          <input
            className="input"
            type="text"
            name="username"
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <br />
        <div className="pass">
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div className="logbutton">
          <button className="button" type="submit">LOGIN</button>
        </div>
      </form>
      <button className="bk" onClick={onBack}>Back</button> {/* Updated Back Button */}
      {message && <p>{message}</p>}
      <div className="point"><img src="https://cdni.iconscout.com/illustration/premium/thumb/girl-saving-money-in-piggy-bank-illustration-download-svg-png-gif-file-formats--capital-currency-people-illustrations-4319294.png?f=webp"/></div>
    </div>
    
  );
}

