import { useState } from "react";
import "./App.css";
import lightModeIcon from "./images/icon-sun.svg";
import darkModeIcon from "./images/icon-moon.svg";
import checkIcon from "./images/icon-check.svg";
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";

function App() {
  const todosDefault = [
    {
      id: 0,
      title: "todo 1",
      completed: false,
    },
    {
      id: 1,
      title: "todo 2",
      completed: false,
    },
    {
      id: 2,
      title: "todo 3",
      completed: true,
    },
  ];
  const [darkMode, setDarkMode] = useState(true);
  const [todos, setTodos] = useState(todosDefault);

  const addNewTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, id: todos.length }]);
  };

  const markAsCompleted = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      })
    );
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId ));
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => todo.completed !== true));
  }
  return (
    <div
      className={`App container-fluid ${
        darkMode === true ? "App-dark" : "App-light"
      }`}
    >
      <div className="wrapper row justify-content-center pt-5">
        <div className="col-md-7">
          {/* TITLE + DARK MODE CONTROLLER */}
          <div className="row mb-3">
            <div className="col-9">
              <h2 className="title">TODO</h2>
            </div>
            <div className="col-3 text-end">
              <button
                className="btn ml-auto"
                onClick={() => setDarkMode(!darkMode)}
              >
                <img
                  src={darkMode ? lightModeIcon : darkModeIcon}
                  alt="light-mode"
                />
              </button>
            </div>
          </div>

          {/* ADD NEW TODO */}
          <div className="row my-3">
            <div className="col-12">
              <AddTodo addNewTodo={addNewTodo} />
            </div>
          </div>

          {/* TODOS LIST */}
          <div className="row">
            <div className="col-12">
              <TodosList todos={todos} markAsCompleted={markAsCompleted} deleteTodo={deleteTodo} clearCompleted={clearCompleted}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
