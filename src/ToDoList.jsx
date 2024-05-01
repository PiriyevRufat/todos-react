import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, setToDos }) => {
  const [id, setId] = useState(1);
  const [newToDo, setNewToDo] = useState("");

  const addToDo = () => {
    if (newToDo.trim() !== "") {
        const newItem = {
          id: id,
          content: newToDo,
          isDeleted: false
        };
        setId(id + 1);
        setToDos([...todos, newItem]);
        setNewToDo("");
      }
  };

  return (
    <div>
      <input style={{marginLeft:"10px"}} type="text" placeholder="Add ToDo" value={newToDo} onChange={(e) => setNewToDo(e.target.value)} />
      <button onClick={addToDo}>Add ToDo</button>
      <ul>
        {todos.map((todo, index) => {
          return <ToDoItem key={index} todo={todo} todos={todos} setToDos={setToDos} />;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
