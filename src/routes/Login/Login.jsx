import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Alert } from 'antd';
import { Link } from 'react-router-dom';

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
            navigate('/products');
        } else {
            setError('Invalid username or password');
        }
    } catch (err) {
        console.error(err);
        setError('An error occurred');
    }
};
  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className="w-96 p-6 border rounded shadow-lg text-center">
        <i className="text-2xl font-bold mb-4">Hello</i>
        <p className='text-[14px] font-[400]'>Sign in to eBay or <a className='text-[blue]' href="">create an account</a></p>
        {error && <Alert message={error} type="error" className="mb-2 mt-2" />}
        <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 mt-4"
        />
        <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
        />
       <Link to="/Collection">
       <Button type="primary" onClick={handleSubmit} block>
            Continue
        </Button>
       </Link>
    </div>
</div>
  )
}

export default Login