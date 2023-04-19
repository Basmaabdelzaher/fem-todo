import React from "react";

const Filters = ({todosFilter, setTodosFilter}) => {
  return (
    <div>
      <a
        style={{ color: todosFilter === "all" ? "#3A7BFD" : "gray" }}
        className="mx-2 pointer"
        onClick={() => setTodosFilter("all")}
      >
        All
      </a>
      <a
        style={{ color: todosFilter === "active" ? "#3A7BFD" : "gray" }}
        className="mx-2 pointer"
        onClick={() => setTodosFilter("active")}
      >
        Active
      </a>
      <a
        style={{ color: todosFilter === "completed" ? "#3A7BFD" : "gray" }}
        className="mx-2 pointer"
        onClick={() => setTodosFilter("completed")}
      >
        Completed
      </a>
    </div>
  );
};

export default Filters;
