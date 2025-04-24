import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";

export default function TodoList(){
    
    const todos = useSelector(state => state.todos.value);
    return (
        <div>
            <h1>My Todos</h1>
            <NewTodoForm />
            <h3>Complete:</h3>
            { todos.map((todo, index) => (<TodoListItem todo={todo} key={index} />)) }
            <h3>Incomplete:</h3>
            { todos.map((todo, index) => (<TodoListItem todo={todo} key={index} />)) }
        </div> 
    )

}