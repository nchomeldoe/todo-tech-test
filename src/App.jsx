import { useState } from "react";

import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import "./App.scss";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleReset = () => {
    setTodos([]);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todos.some((todo) => todo.name === e.target[0].value)) {
      alert("this item already exists");
      e.target[0].value = "";
      return;
    }
    const todoItem = { name: e.target[0].value, crossedOut: false };
    if (todoItem.name) {
      setTodos([...todos, todoItem]);
    } else {
      alert("please enter a todo");
    }
    e.target[0].value = "";
  };

  const handleToggleCrossedOut = (e) => {
    const indexToToggle = todos.findIndex(
      (todo) => todo.name === e.target.name,
    );
    const crossedOutStatus = todos[indexToToggle].crossedOut;
    const updatedTodos = [...todos];
    todos[indexToToggle].crossedOut = !crossedOutStatus;
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (e) => {
    e.preventDefault();
    const indexToRemove = todos.findIndex(
      (todo) => todo.name === e.target[0].name,
    );
    const updatedTodos = [...todos];
    updatedTodos.splice(indexToRemove, 1);
    setTodos(updatedTodos);
  };
  return (
    <div className="app">
      <Header handleReset={handleReset} />
      <Main
        handleToggleCrossedOut={handleToggleCrossedOut}
        handleAddTodo={handleAddTodo}
        handleRemoveTodo={handleRemoveTodo}
        todos={todos}
      />
    </div>
  );
};

export default App;
