import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import FormSubmitButton from "../FormSubmitButton/FormSubmitButton";
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
        checked={crossedOut}
      />
      <label
        className={`todo-display-box__label todo-display-box__label--${crossedOutModifier}`}
        htmlFor={text}
      >
        {text}
      </label>
      <FormSubmitButton
        content={
          <FontAwesomeIcon
            className="todo-input-box__plus-icon"
            icon={faTrashCan}
          />
        }
      />
    </form>
  );
};

export default TodoDisplayBox;
