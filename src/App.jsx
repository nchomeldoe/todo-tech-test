// import { useState } from "react";

// import Header from "./containers/Header/Header";
// import Main from "./containers/Main/Main";
// import "./App.scss";

// const App = () => {
//   const [todos, setTodos] = useState([]);

//   const handleReset = () => {
//     setTodos([]);
//   };

//   const handleAddTodo = (e) => {
//     e.preventDefault();
//     const todoItem = e.target[0].value;
//     if (todoItem) {
//       setTodos([...todos, todoItem]);
//     } else {
//       alert("please enter a todo");
//     }
//     e.target[0].value = "";
//   };

//   const handleRemoveTodo = (e) => {
//     e.preventDefault();
//     const indexToRemove = todos.indexOf(e.target[0].name);
//     const updatedTodos = [...todos];
//     updatedTodos.splice(indexToRemove, 1);
//     setTodos(updatedTodos);
//   };
//   return (
//     <div className="app">
//       <Header handleReset={handleReset} />
//       <Main
//         handleAddTodo={handleAddTodo}
//         handleRemoveTodo={handleRemoveTodo}
//         todos={todos}
//       />
//     </div>
//   );
// };

// export default App;

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
    console.log(todos);
  };

  console.log(todos);

  const handleRemoveTodo = (e) => {
    e.preventDefault();
    const indexToRemove = todos.indexOf(e.target[0].name);
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
