import React, { useState } from 'react';

// Components
import { Todo } from '../../components';

// Elements
import { Button } from '../../elements';

// Redux
import { useTodosQuery, useTodosMutations } from '../../bus/todosNew';

// Styles
import { Header } from './styles';

export const Main = () => {
  const [text, setText] = useState('');
  const { data } = useTodosQuery();
  const { createMutation, updateMutation, deleteMutation } = useTodosMutations();

  if (!data) {
    return <div>Loading...</div>;
  }

  const onCreate = () => {
    if (text !== '') {
      createMutation({ body: { text } });
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
            <Todo
              key={todo.id}
              isColor={Boolean(index % 2)}
              {...todo}
              deleteHandler={() => void deleteMutation({ todoId: todo.id })}
              updateHandler={() => void updateMutation({
                todoId: todo.id, body: { isCompleted: !todo.isCompleted },
              })}
            />
          ))
        }
      </main>
    </section>
  );
};
