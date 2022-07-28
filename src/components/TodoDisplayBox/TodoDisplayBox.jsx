import { useState } from "react";

import "./TodoDisplayBox.scss";

const TodoDisplayBox = ({ text, handleSubmit }) => {
  const [checked, setChecked] = useState(false);
  return (
    <form className="todo-display-box" onSubmit={handleSubmit}>
      <input
        className="todo-display-box__input"
        type="checkbox"
        name={text}
        id={text}
      />
      <label className="todo-display-box__label" htmlFor={text}>
        {text}
      </label>
      <button className="todo-display-box__button" type="submit" value="submit">
        -
      </button>
    </form>
  );
};

export default TodoDisplayBox;
