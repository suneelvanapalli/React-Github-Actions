import { useState } from 'react';
import NewTodo from './components/NewTodo/NewTodo';
import TodoList from './components/TodoList/TodoList';
import { Todo } from './models/todo';

const App: React.FC = () => {
  let initialState: Todo[] = [
    new Todo('1', 'React Js'),
    new Todo('2', 'Azure'),
  ];
  const [todoItems, setTodoItems] = useState<Todo[]>(initialState);

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

  return (
    <div className='App'>
      {/* <Provider store={store}>
        <Counter></Counter>
      </Provider> */}
      <NewTodo onAddTodo={onAddNewTodo}></NewTodo>
      <TodoList onRemoveClick={onRemoveClick} items={todoItems}></TodoList>
    </div>
  );
};

export default App;
