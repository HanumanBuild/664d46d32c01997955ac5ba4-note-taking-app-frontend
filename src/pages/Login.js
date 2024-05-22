import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from '../api/axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      history.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;