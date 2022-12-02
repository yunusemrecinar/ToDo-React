import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("")
  const [todo, setTodo] = useState(["A Item"])

  function eventHandler(event) {
    let temp = event.target.value
    setInputText(temp)
  }

  function handleClick(event) {
    setTodo(prevItems => {
      return [...prevItems, inputText]
    })
    setInputText("")
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
        type="text"
        name="inputText"
        value={inputText}
        onChange={eventHandler} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todo.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
