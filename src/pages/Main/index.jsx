import React, { useState } from 'react';

// Redux
import { useTodosQuery, useTodosMutations } from '../../bus/todos';

// Styles
import { Todo } from './styles';

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
      <header>
        <input
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <button onClick={onCreate}>Create</button>
      </header>
      <main>
        {
          data.map((todo, index) => (
            <Todo key={todo.id} isColor={Boolean(index % 2)}>
              <p>{todo.text}</p>
              <button onClick={() => void updateMutation({ isCompleted: !todo.isCompleted }, todo.id)}>
                {todo.isCompleted ? 'Done' : 'In progress'}
              </button>
              <button onClick={() => void deleteMutation(todo.id)}>
                Delete
              </button>
            </Todo>
          ))
        }
      </main>
    </section>
  );
};
