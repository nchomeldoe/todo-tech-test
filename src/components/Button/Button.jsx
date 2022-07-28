import "./Button.scss";

const Button = ({ type, handleReset }) => {
  return (
    <button className="button" onClick={handleReset}>
      {type}
    </button>
  );
};

export default Button;
