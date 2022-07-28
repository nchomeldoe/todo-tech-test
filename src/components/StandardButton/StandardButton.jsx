import "./StandardButton.scss";

const StandardButton = ({ text, handleReset }) => {
  return (
    <button className="standard-button" onClick={handleReset}>
      {text}
    </button>
  );
};

export default StandardButton;
