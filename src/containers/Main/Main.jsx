import { useState } from "react";

import TodoInputBox from "../../components/TodoInputBox/TodoInputBox";
import TodoDisplayBox from "../../components/TodoInputBox/TodoInputBox";
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

  return (
    <div className="main">
      <TodoInputBox handleSubmit={handleAddTodo} />
      {!todos.length ? (
        <p className="main__no-todos-message">
          Nothing to see here yet... Add a task in the field above!
        </p>
      ) : (
        todos.map((todo, i) => <TodoDisplayBox key={i} text={todo} />)
      )}
    </div>
  );
};

export default Main;
