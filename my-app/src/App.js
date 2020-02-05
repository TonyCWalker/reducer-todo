import React from "react";
import "./App.css";
import Store from "./components/store";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";


function App() {
  return (
    <Store>
    <h2>Welcome to your Todo App!</h2>
    <div className="App">
      <ToDoList />
      <ToDoForm />
    </div>
  </Store>
  );
}

export default App;
