import TodoInputBox from "../../components/TodoInputBox/TodoInputBox";
import TodoDisplayBox from "../../components/TodoDisplayBox/TodoDisplayBox";
import "./Main.scss";

const Main = ({
  handleAddTodo,
  handleRemoveTodo,
  handleToggleCrossedOut,
  todos,
}) => {
  return (
    <div className="main">
      <TodoInputBox handleSubmit={handleAddTodo} />
      {!todos.length ? (
        <p className="main__no-todos-message">
          Nothing to see here yet... Add a task in the field above!
        </p>
      ) : (
        todos.map((todo, i) => {
          const { name, crossedOut } = todo;
          return (
            <TodoDisplayBox
              key={`${name}-${i}`}
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
