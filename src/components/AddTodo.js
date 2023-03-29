import { useState } from "react";
import Checkcircle from "./CheckCircle";

const AddTodo = ({ addNewTodo }) => {
    const [newTodo, setNewTodo] = useState('');
    
    const handleNewTodo = (e) => {
        e.preventDefault();
        addNewTodo({
          title: newTodo,
          completed: false
        });
        setNewTodo('');
    }
  return (
    <form onSubmit={handleNewTodo} className="drop-shadow">
         <div className="list-item d-flex align-items-center justify-content-between">
            <Checkcircle />
            <input type="text" className="form-control flex-grow-1 p-0 mx-3" placeholder="Add New Todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        </div>
    </form>
   
  );
};

export default AddTodo;
