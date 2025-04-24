import './App.css';
import TodoList from './TodoList';

function App() {

  function CreateTodo(text){
    setIncompleteTodos([...incompleteTodos, {text, isCompleted: false}])

  }

  return (
    <>
   <TodoList />
    </>
  );
}

export default App
