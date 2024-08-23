import { AiFillCheckSquare } from "react-icons/ai";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Alert } from 'antd';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const mockUsers = [
    { username: 'emilys', password: 'emilyspass' },
  ];

  const handleSubmit = async () => {
    setError(null);
    try {
      const user = mockUsers.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        navigate('/collection');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="mb-6">
        <img src={logo} alt="Logo" className="w-[200px]" />
      </div>
      <div className="w-[400px] p-6 bg-white shadow-md rounded text-center">
        <h1 className="text-2xl font-bold mb-4">Hello</h1>
        <p className="text-[14px] font-[400] mb-4">
          Sign in to eBay or <Link to="/register" className="text-blue-500">create an account</Link>
        </p>
        {error && <Alert message={error} type="error" className="mb-4" />}
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4"
        />
        <Input.Password
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4"
        />
        <Button type="primary" onClick={handleSubmit} block>
          Continue
        </Button>
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <AiFillCheckSquare />
        <p>Stay signed in</p>
      </div>
    </div>
  );
};

export default Login;
