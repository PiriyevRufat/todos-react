import React,{ useState } from 'react'
import ToDoList from "./ToDoList";

function App() {
  const [todos, setToDos] = useState([
    {
      id : 0,
      content : "task hazirlamaq",
      isDelete : false
    }
  ])
  return (
    <div className="App">
    <ToDoList todos={todos} setToDos={setToDos}/>
    </div>
  )
}

export default App
