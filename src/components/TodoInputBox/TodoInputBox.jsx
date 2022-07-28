import "./TodoInputBox.scss";

const TodoInputBox = ({ handleSubmit }) => {
  return (
    <form className="todo-input-box" onSubmit={handleSubmit}>
      <input
        className="todo-input-box__input"
        type="text"
        placeholder="Add your task here..."
        name="todo-input"
        id="todo-input"
      />
      <button className="todo-input-box__button" type="submit" value="submit">
        <label htmlFor="todo-input" className="todo-input-box__label">
          +
        </label>
      </button>
    </form>
  );
};

export default TodoInputBox;
