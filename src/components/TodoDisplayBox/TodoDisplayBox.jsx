import "./TodoDisplayBox.scss";

const TodoDisplayBox = ({
  text,
  handleSubmit,
  handleToggleCrossedOut,
  crossedOut,
}) => {
  const crossedOutModifier = crossedOut ? "crossed-out" : "";

  return (
    <form className="todo-display-box" onSubmit={handleSubmit}>
      <input
        className="todo-display-box__input"
        type="checkbox"
        name={text}
        id={text}
        onChange={handleToggleCrossedOut}
      />
      <label
        className={`todo-display-box__label todo-display-box__label--${crossedOutModifier}`}
        htmlFor={text}
      >
        {text}
      </label>
      <button className="todo-display-box__button" type="submit" value="submit">
        -
      </button>
    </form>
  );
};

export default TodoDisplayBox;
