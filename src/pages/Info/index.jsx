// Core
import React from 'react';
import { useHistory, Route } from 'react-router-dom';

// Containers
import { TodoModal } from '../../containers';

// Elements
import { Button } from '../../elements';

export const Info = () => {
  const { push } = useHistory();

  return (
    <section>
      <Route path="/info/todos-modal">
        <TodoModal
          closeHandler={() => void push('/info')}
        />
      </Route>
      <h1>Info</h1>
      <Button onClick={() => void push('/info/todos-modal')}>Call modal</Button>
    </section>
  );
};
