import Checkcircle from "./CheckCircle";
import crossIcon from "../images/icon-cross.svg";

const TodoListItem = ({ todo, markAsCompleted, deleteTodo}) => {
  return (
    <li className="list-item d-flex align-items-center justify-content-between" onClick={() => markAsCompleted(todo.id)}>
      <Checkcircle todoCompleted={todo.completed} className="pointer"/>
      <p className="my-0 mx-3 flex-grow-1 pointer">{todo.title}</p>
      <img src={crossIcon} alt="cross" className="pointer" onClick={(e) => {e.stopPropagation(); deleteTodo(todo.id)}} />
    </li>
  );
};

export default TodoListItem;
