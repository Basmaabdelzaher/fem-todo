import { useState } from "react";
import TodoListItem from "./TodoListItem";

const TodosList = ({ todos, markAsCompleted, deleteTodo }) => {
  const listItems = todos.map((todo, index) => (
    <TodoListItem key={index} todo={todo} markAsCompleted={markAsCompleted} deleteTodo={deleteTodo}/>
  ));
  let leftTodos = todos.filter(todo => todo.completed === false).length;

  return (
    <div className="drop-shadow">
      <ul className="todos-list p-0 m-0">{listItems}</ul>

      <div className="todos-list-controller d-flex justify-content-between align-items-baseline list-item">
        <p className="m-0">{ leftTodos } items left</p>
        <div>
          <a className="mx-2">All</a>
          <a className="mx-2">Active</a>
          <a className="mx-2">Completed</a>
        </div>
        <a className="">Clear Completed</a>
      </div>
    </div>
  );
};

export default TodosList;
