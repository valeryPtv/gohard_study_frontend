// Core
import React, { useRef } from 'react';

// Components
import { Modal, Todo } from '../../components';

// Elements
import { AdaptiveScroll, Button } from '../../elements';

// Redux
import { useTodosQuery, useTodosMutations } from '../../bus/todosNew';

// Styles
import { Header, Footer } from './styles';

export const TodoModal = ({ closeHandler }) => {
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const { data } = useTodosQuery();
  const { updateMutation, deleteMutation } = useTodosMutations();

  return (
    <Modal closeHandler={closeHandler}>
      <Header ref={headerRef}>
        <h2>Todos</h2>
      </Header>
      <AdaptiveScroll
        backgroundColor="gray"
        minHeight
        refs={[headerRef, footerRef]}
      >
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
      </AdaptiveScroll>
      <Footer ref={footerRef}>
        <Button onClick={() => void closeHandler()}>
          Close
        </Button>
      </Footer>
    </Modal>
  );
};
