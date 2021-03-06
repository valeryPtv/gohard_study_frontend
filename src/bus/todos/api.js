const todosUrl = `${process.env.REACT_APP_API_URL}/todos`;

export const getTodosAsync = async ({ setTodos, loadingAction }) => {
  loadingAction(true);

  try {
    const response = await fetch(todosUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error('Todos fetch failed');
    }

    const data = await response.json();

    setTodos(data);
  } catch (error) {
    console.log(error);
  } finally {
    loadingAction(false);
  }
};

export const createTodoAsync = async ({ body, setTodo, loadingAction }) => {
  loadingAction(true);

  try {
    const response = await fetch(todosUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    });

    if (response.status !== 201) {
      throw new Error('Todo create failed');
    }

    const data = await response.json();

    setTodo(data);
  } catch (error) {
    console.log(error);
  } finally {
    loadingAction(false);
  }
};

export const updateTodoAsync = async ({
  todoId, body, updateTodo, loadingAction,
}) => {
  loadingAction(true);

  try {
    const response = await fetch(`${todosUrl}/${todoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    });

    if (response.status !== 200) {
      throw new Error('Todo update failed');
    }

    const data = await response.json();

    updateTodo(data);
  } catch (error) {
    console.log(error);
  } finally {
    loadingAction(false);
  }
};

export const deleteTodoAsync = async ({
  todoId, deleteTodo, loadingAction,
}) => {
  loadingAction(true);

  try {
    const response = await fetch(`${todosUrl}/${todoId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (response.status !== 200) {
      throw new Error('Todo delete failed');
    }

    const data = await response.json();

    if (data) {
      deleteTodo(todoId);
    }
  } catch (error) {
    console.log(error);
  } finally {
    loadingAction(false);
  }
};
