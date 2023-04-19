import { useState } from "react";
import TodoListItem from "./TodoListItem";
import Filters from "./Filters";

const TodosList = ({ todos, markAsCompleted, deleteTodo, clearCompleted }) => {
  const [todosFilter, setTodosFilter] = useState('all');

  let filteredTodos = todos;
  if(todosFilter === 'active')
    filteredTodos= todos.filter(todo => todo.completed === false);
  if(todosFilter === 'completed')
    filteredTodos= todos.filter(todo => todo.completed === true);
  
  const listItems = filteredTodos.map((todo, index) => (
    <TodoListItem key={index} todo={todo} markAsCompleted={markAsCompleted} deleteTodo={deleteTodo}/>
  ));

  let leftTodos = todos.filter(todo => todo.completed === false).length;

  return (
    <div className="drop-shadow">
      <ul className="todos-list p-0 m-0">{listItems}</ul>

      <div className="todos-list-controller d-flex justify-content-between align-items-baseline list-item">
        <p className="m-0">{ leftTodos } items left</p>
        <span className="d-none d-lg-inline-block">
          <Filters setTodosFilter={setTodosFilter} todosFilter={todosFilter}/>
        </span>
        <a className="" onClick={clearCompleted}>Clear Completed</a>
      </div>
      {/* Filters for mobile view */}
      <div className="todos-list-controller d-lg-none d-block text-center list-item mt-3">
        <Filters setTodosFilter={setTodosFilter} todosFilter={todosFilter}/>
      </div>
    </div>
  );
};

export default TodosList;
