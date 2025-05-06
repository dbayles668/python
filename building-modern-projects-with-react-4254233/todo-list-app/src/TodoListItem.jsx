import { useDispatch } from "react-redux";
import { deleteTodo, markTodoAsCompleted } from "./thunks";
import styled from "styled-components";

const getBackgroundColor = ({important}) => {
  if(important){
    return 'background-color: yellow;';
  }else{
    return 'background-color: white;';
  }

}

const CardCont = styled.div`
${getBackgroundColor}
  border-radius: 10px;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, 0.6);
  padding: 16px;
`;

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <CardCont important>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted
        ? <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete Item</button>
        : <button onClick={() => dispatch(markTodoAsCompleted(todo.text))}>Mark as Completed</button>}
    </CardCont>
  );
}

