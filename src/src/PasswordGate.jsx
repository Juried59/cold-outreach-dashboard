import { useState, useEffect } from 'react';

const CORRECT_PASSWORD = 'coldlaunch2024'; // You can change this

export default function PasswordGate({ children }) {
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('access_granted');
    if (saved === 'true') setAuthenticated(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === CORRECT_PASSWORD) {
      localStorage.setItem('access_granted', 'true');
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (authenticated) return children;

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Enter Access Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Password"
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <button type="submit" style={{ marginLeft: '10px', padding: '10px' }}>
          Enter
        </button>
      </form>
    </div>
  );
}
