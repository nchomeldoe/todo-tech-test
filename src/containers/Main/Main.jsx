import { useState } from "react";

import TodoInputBox from "../../components/TodoInputBox/TodoInputBox";
import TodoDisplayBox from "../../components/TodoDisplayBox/TodoDisplayBox";
import "./Main.scss";

const Main = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos.length);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const todoItem = e.target[0].value;
    if (todoItem) {
      setTodos([...todos, todoItem]);
    } else {
      alert("please enter a todo");
    }
    e.target[0].value = "";
  };

  const handleRemoveTodo = (e) => {
    e.preventDefault();
    const indexToRemove = todos.indexOf(e.target[0].name);
    const updatedTodos = [...todos];
    updatedTodos.splice(indexToRemove, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="main">
      <TodoInputBox handleSubmit={handleAddTodo} />
      {!todos.length ? (
        <p className="main__no-todos-message">
          Nothing to see here yet... Add a task in the field above!
        </p>
      ) : (
        todos.map((todo, i) => (
          <TodoDisplayBox key={i} text={todo} handleSubmit={handleRemoveTodo} />
        ))
      )}
    </div>
  );
};

export default Main;
