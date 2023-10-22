import React, { useState, useEffect, useCallback } from 'react';
import { Todo } from '../models/todo';

type TodoContext = {
  todoItems: Todo[];
  onAddNewTodo: (newTodo: Todo) => void;
  onRemoveClick: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContext>({
  todoItems: [],
  onAddNewTodo: () => {},
  onRemoveClick: () => {},
});

interface Props {
  children: React.ReactNode;
}

const TodoContextProvider: React.FC<Props> = (props) => {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);
  

  const fetchTodoItems = useCallback(async () => {
    const response = await fetch(
      'https://react-http-todos-e3f56-default-rtdb.firebaseio.com/todos.json',
      { method: 'GET' }
    );
    const data = await response.json();
    const loadedTodoItems: Todo[] = [];

    for (const key in data) {
      loadedTodoItems.push({
        id: key,
        name: data[key].name,
      });
    }
    setTodoItems(loadedTodoItems);
  }, []);

  useEffect(() => {
    fetchTodoItems();
  }, [fetchTodoItems]);

  const addTodoItemToApi = async (newTodo: Todo) => {
    const response = await fetch(
      'https://react-http-todos-e3f56-default-rtdb.firebaseio.com/todos.json',
      { method: 'POST', body: JSON.stringify(newTodo) }
    );
    console.log(response);
  };

  const onAddNewTodo = (newTodo: Todo) => {
    addTodoItemToApi(newTodo);
    // setTodoItems((previous) => {
    //   return [...previous, newTodo];
    // });
  };

  const onRemoveClick = (id: string) => {
    setTodoItems((previous) => {
      const updatedList = previous.filter((item) => item.id !== id);
      return [...updatedList];
    });
  };

  const todoContextValue: TodoContext = {
    onAddNewTodo: onAddNewTodo,
    onRemoveClick: onRemoveClick,
    todoItems: todoItems,
  };

  return (
    <TodosContext.Provider value={todoContextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
