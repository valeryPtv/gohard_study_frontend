// Core
import React from 'react';
import { useHistory } from 'react-router';

// Elemetnts
import { Button } from '../../elements';

// Styles
import { Container } from './styles';

export const Header = ({ isOnline }) => {
  const { push } = useHistory();

  return (
    <Container isOnline={isOnline}>
      <div>
        <Button onClick={() => void push('/')}>Main</Button>
        <Button onClick={() => void push('/info')}>Info</Button>
      </div>
      <h2>{isOnline ? 'Online' : 'Offline'}</h2>
    </Container>
  );
};
