import React from 'react';

const Button = () => {
  const isVariableTrue = true;

  
  const getButtonStyle = () => {
    if (isVariableTrue) {
      return {
        backgroundColor: 'red',
        color:'blue'
      };
    } else {
      return {
        backgroundColor: 'blue',
        color:'red'
      };
    }
  };

  return <button style={getButtonStyle()}>My Button</button>;
};

export default Button;
