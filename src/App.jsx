import { useState } from "react";

import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import "./App.scss";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [uniqueId, setUniqueId] = useState(1);

  const handleReset = () => {
    setTodos([]);
    setInputValue("");
    setUniqueId(1);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const todoItem = { name: inputValue, crossedOut: false, todoId: uniqueId };
    if (todoItem.name) {
      setTodos([...todos, todoItem]);
    } else {
      alert("please enter a todo");
    }
    setInputValue("");
    setUniqueId(uniqueId + 1);
  };

  const handleToggleCrossedOut = (e) => {
    const indexToToggle = todos.findIndex(
      (todo) => todo.todoId === Number(e.target.id),
    );
    const crossedOutStatus = todos[indexToToggle].crossedOut;
    const updatedTodos = [...todos];
    todos[indexToToggle].crossedOut = !crossedOutStatus;
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (e) => {
    e.preventDefault();
    const indexToRemove = todos.findIndex(
      (todo) => todo.todoId === Number(e.target[0].id),
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
