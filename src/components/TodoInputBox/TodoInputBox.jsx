import FormSubmitButton from "../FormSubmitButton/FormSubmitButton";
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
      <FormSubmitButton content="+" />
    </form>
  );
};

export default TodoInputBox;
