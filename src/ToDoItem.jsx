import React from 'react';

const ToDoItem = ({ todo, todos, setToDos }) => {
  const deleteToDo = (id) => {
    const target = todos.find(item => item.id === id);
    target.isDeleted = true;
    setToDos([...todos.filter(item => !item.isDeleted)]);
  };
  return (
    <li style={{padding:"10px",background:"green",width:"200px",display:"flex",gap:"20px",marginTop:"10px" ,marginLeft:"10px"}}>
      {todo.content}
      <button onClick={() => deleteToDo(todo.id)} style={{padding:"5px",background:"red",color:"white"}}
      >Delete</button>
    </li>
  );
};

export default ToDoItem;
