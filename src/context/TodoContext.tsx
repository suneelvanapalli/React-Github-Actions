import React, { useState } from 'react';
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

  const onAddNewTodo = (newTodo: Todo) => {
    setTodoItems((previous) => {
      return [...previous, newTodo];
    });
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
