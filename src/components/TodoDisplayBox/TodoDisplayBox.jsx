import { useState } from "react";

import "./TodoDisplayBox.scss";

const TodoDisplayBox = ({ text, handleSubmit }) => {
  const [crossedOutModifier, setCrossedOutModifier] = useState("");

  const toggleCrossedOutModifier = () => {
    if (!crossedOutModifier) {
      setCrossedOutModifier("crossed-out");
    } else {
      setCrossedOutModifier("");
    }
  };

  return (
    <form className="todo-display-box" onSubmit={handleSubmit}>
      <input
        className="todo-display-box__input"
        type="checkbox"
        name={text}
        id={text}
        onChange={toggleCrossedOutModifier}
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
