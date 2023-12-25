import React from 'react';

const Button = ({ onClick, children, style }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        margin: '5px',
        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '5px',
        cursor: 'pointer',
        ...style, // Allow custom styles to be passed
      }}
    >
      {children}
    </button>
  );
};

export default Button;
