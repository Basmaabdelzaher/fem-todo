import { useState } from "react";
import TodoListItem from "./TodoListItem";

const TodosList = ({ todos, markAsCompleted, deleteTodo, clearCompleted }) => {
  const [todosFilter, setTodosFilter] = useState('all');

  let filteredTodos = todos;
  if(todosFilter === 'active')
    filteredTodos= todos.filter(todo => todo.completed == false);
  if(todosFilter === 'completed')
    filteredTodos= todos.filter(todo => todo.completed == true);
  
  const listItems = filteredTodos.map((todo, index) => (
    <TodoListItem key={index} todo={todo} markAsCompleted={markAsCompleted} deleteTodo={deleteTodo}/>
  ));

  let leftTodos = todos.filter(todo => todo.completed === false).length;

  return (
    <div className="drop-shadow">
      <ul className="todos-list p-0 m-0">{listItems}</ul>

      <div className="todos-list-controller d-flex justify-content-between align-items-baseline list-item">
        <p className="m-0">{ leftTodos } items left</p>
        <div>
          <a style={{color: todosFilter === 'all'? 'blue' : 'inherit'}} className="mx-2" onClick={() => setTodosFilter('all')}>All</a>
          <a style={{color: todosFilter === 'active'? 'blue' : 'inherit'}} className="mx-2" onClick={() => setTodosFilter('active')}>Active</a>
          <a style={{color: todosFilter === 'completed'? 'blue' : 'inherit'}}className="mx-2" onClick={() => setTodosFilter('completed')}>Completed</a>
        </div>
        <a className="" onClick={clearCompleted}>Clear Completed</a>
      </div>
    </div>
  );
};

export default TodosList;
