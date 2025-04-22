import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [completedTodos, setCompletedTodos] = useState([
    {text: 'take out garbage', isCompleted: true},
    {text: 'make dinner', isCompleted: true}    
  ]);
  const [incompleteTodos, setIncompleteTodos] = useState([
    {text: 'paint house', isCompleted: false} 
  ]);

  function MarkTodoAsComplete(text){
      setIncompleteTodos(incompleteTodos.filter(t => t.text !== text));
      setCompletedTodos([...completedTodos, {...incompleteTodos.find(t => t.text === text), isCompleted: true}]);
  }

  function DeleteTodo(text){
    setCompletedTodos(completedTodos.filter(t => t.text !== text));

  }

  function CreateTodo(text){
    setIncompleteTodos([...incompleteTodos, {text, isCompleted: false}])

  }

  return (
    <>
   <TodoList completedTodos={completedTodos} incompleteTodos={incompleteTodos}
   onDeleteClicked={DeleteTodo} onCompletedClicked={MarkTodoAsComplete} 
   onCreateClicked={CreateTodo} />
    </>
  );
}

export default App
