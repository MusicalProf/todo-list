import React, { useState } from "react";
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [checklist, setChecklist] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {checklist.map((todo,idx) => (
        <TodoList
          todo={todo}
          setChecklist={setChecklist}
          index={idx}
          checklist={checklist}
        />
      ))}
      <Form checklist={checklist} setChecklist={setChecklist} />
    </div>
  );
}

export default App;
