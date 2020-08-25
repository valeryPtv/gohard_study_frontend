import React, { useState } from 'react';

// Redux
import { useTodosQuery, useTodosMutations } from '../../bus/todos';

// Elements
import { Button } from '../../elements';

// Styles
import { Header, Todo } from './styles';

export const Main = () => {
  const [text, setText] = useState('');
  const { data, loading } = useTodosQuery();
  const { createMutation, updateMutation, deleteMutation } = useTodosMutations();

  if (!data || loading) {
    return <div>Loading...</div>;
  }

  const onCreate = () => {
    if (text !== '') {
      createMutation({ text });
      setText('');
    }
  };

  return (
    <section>
      <Header>
        <input
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <Button onClick={onCreate}>Create</Button>
      </Header>
      <main>
        {
          data.map((todo, index) => (
            <Todo key={todo.id} isColor={Boolean(index % 2)}>
              <p>{todo.text}</p>
              <Button onClick={() => void updateMutation({ isCompleted: !todo.isCompleted }, todo.id)}>
                {todo.isCompleted ? 'Done' : 'In progress'}
              </Button>
              <Button onClick={() => void deleteMutation(todo.id)}>
                Delete
              </Button>
            </Todo>
          ))
        }
      </main>
    </section>
  );
};
