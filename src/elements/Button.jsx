// Core
import React from 'react';
import styled from 'styled-components';

// Styles
export const Container = styled.button`
      font-size: 20px;
      margin-right: 10px;
      width: 150px;
      height: 30px;

      background-color: ${({ isActive }) => isActive ? 'green' : 'white'};
      border: 1px solid #000;
      box-sizing: border-box;

      &:hover {
          background-color: lightcoral;
      }

      &:active {
          background-color: coral;
      }
`;

export const Button = ({ children, isActive, ...otherProps }) => {
  return (
    <Container isActive={isActive} {...otherProps}>
      {children}
    </Container>
  );
};
