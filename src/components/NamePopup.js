import React, { useState } from 'react';

function NamePopup({ onSubmit }) {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (name === '') {
      alert('Please enter your name');
      return;
    }
    onSubmit(name);
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '8px',
        textAlign: 'center',
        width: '300px'
      }}>
        <h2>Welcome to Viral!</h2>
        <p>Please enter your name to continue</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name here"
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '15px',
              boxSizing: 'border-box'
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#EE802F',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Enter Site
          </button>
        </form>
      </div>
    </div>
  );
}

export default NamePopup;