import Counter from './components/Counter';
import Greeting from './components/Greeting/Greeting';
import NewTodo from './components/NewTodo/NewTodo';
import TodoList from './components/TodoList/TodoList';
import TodoContextProvider from './context/TodoContext';

const App: React.FC = () => {
  // let initialState: Todo[] = [
  //   new Todo('1', 'React Js'),
  //   new Todo('2', 'Azure'),
  // ];

  return (
    <div className='App'>
      {/* <Provider store={store}>
        <Counter></Counter>
      </Provider> */}
      <Counter></Counter>
      <Greeting></Greeting>
      <TodoContextProvider>
        <NewTodo></NewTodo>
        <TodoList></TodoList>
      </TodoContextProvider>
    </div>
  );
};

export default App;
