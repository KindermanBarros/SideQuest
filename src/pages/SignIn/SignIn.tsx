// src/pages/SignIn/SignIn.tsx
import React, { useState } from 'react';

interface Credentials {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({ username: '', password: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  const handleLogin = () => {
    // Add your authentication logic here
    console.log('Logging in with:', credentials);
  };

  return (
    <div className="SignIn">
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;