import  { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/users');
      const users = await response.json();

      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        setLoginStatus('Login successful! Welcome back.');
      } else {
        setLoginStatus('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold text-center mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mt-4">
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md">
            Login
          </button>
        </div>
      </form>

      {loginStatus && (
        <div className={`mt-4 p-2 text-center font-semibold ${loginStatus.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
          {loginStatus}
        </div>
      )}
    </div>
  );
};

export default LoginForm;
