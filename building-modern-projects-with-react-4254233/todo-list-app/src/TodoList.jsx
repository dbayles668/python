import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { getCompletedTodos, getIncompleteTodos, getTodosAreLoading } from "./selectors";

export default function TodoList(){
    const todosAreloading = useSelector(getTodosAreLoading);
    const CompletedTodos = useSelector(getCompletedTodos);
    const InompleteTodos = useSelector(getIncompleteTodos);
    return (
        <div>
            <h1>My Todos</h1>
            <NewTodoForm />
            { todosAreloading ? <p>Loading...</p>
            : (
                <>
                <h3>Complete:</h3>
                { CompletedTodos.map((todo) => (<TodoListItem todo={todo} key={todo.id} />)) }
                <h3>Incomplete:</h3>
                { InompleteTodos.map((todo) => (<TodoListItem todo={todo} key={todo.id} />)) }
                </>
            )}
        </div> 
    )

}