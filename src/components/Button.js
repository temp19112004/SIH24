import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className='px-4 py-2 text-white bg-blue-500 rounded'>
      {children}
    </button>
  );
};

export default Button;