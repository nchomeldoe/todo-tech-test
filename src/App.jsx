import { useState } from "react";

import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import "./App.scss";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  console.log(inputValue);

  const handleReset = () => {
    setTodos([]);
    setInputValue("");
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todos.some((todo) => todo.name === inputValue)) {
      alert("this item already exists");
      setInputValue("");
      return;
    }
    const todoItem = { name: inputValue, crossedOut: false };
    if (todoItem.name) {
      setTodos([...todos, todoItem]);
    } else {
      alert("please enter a todo");
    }
    setInputValue("");
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
        inputValue={inputValue}
        handleInput={handleInput}
        handleToggleCrossedOut={handleToggleCrossedOut}
        handleAddTodo={handleAddTodo}
        handleRemoveTodo={handleRemoveTodo}
        todos={todos}
      />
    </div>
  );
};

export default App;
