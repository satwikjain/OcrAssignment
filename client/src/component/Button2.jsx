import React from 'react';

const Button2 = ({ onClick, children, style }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '15px 25px',
        margin: '5px',
        fontSize: '18px',
        fontWeight: 'bold',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: 'orange', // Default background color
        color: 'white', // Default text color
        ...style, // Allow custom styles to be passed
      }}
    >
      {children}
    </button>
  );
};

export default Button2;
