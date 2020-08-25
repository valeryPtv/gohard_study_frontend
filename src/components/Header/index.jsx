// Core
import React from 'react';
import { useHistory } from 'react-router';

// Styles
import { Container } from './styles';

export const Header = ({ isOnline }) => {
  const { push } = useHistory();

  return (
    <Container isOnline={isOnline}>
      <div>
        <button onClick={() => void push('/')}>Main</button>
        <button onClick={() => void push('/info')}>Info</button>
      </div>
      <h2>{isOnline ? 'Online' : 'Offline'}</h2>
    </Container>
  );
};
