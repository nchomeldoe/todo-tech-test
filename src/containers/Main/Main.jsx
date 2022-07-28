import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";

import TodoInputBox from "../../components/TodoInputBox/TodoInputBox";
import TodoDisplayBox from "../../components/TodoDisplayBox/TodoDisplayBox";
import "./Main.scss";

const Main = ({
  handleAddTodo,
  handleRemoveTodo,
  handleToggleCrossedOut,
  todos,
  handleInput,
  inputValue,
}) => {
  return (
    <div className="main">
      <TodoInputBox
        handleSubmit={handleAddTodo}
        handleInput={handleInput}
        inputValue={inputValue}
      />
      {!todos.length ? (
        <p className="main__no-todos-message">
          Nothing to see here yet... Add a task in the field above!
          <FontAwesomeIcon className="main__point-icon" icon={faHandPointUp} />
        </p>
      ) : (
        todos.map((todo) => {
          const { name, crossedOut, todoId } = todo;
          return (
            <TodoDisplayBox
              key={todoId}
              todoId={todoId}
              text={name}
              handleSubmit={handleRemoveTodo}
              crossedOut={crossedOut}
              handleToggleCrossedOut={handleToggleCrossedOut}
            />
          );
        })
      )}
    </div>
  );
};

export default Main;
