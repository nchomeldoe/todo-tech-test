import "./FormSubmitButton.scss";

const FormSubmitButton = ({ content }) => {
  return (
    <button className="form-submit-button" type="submit" value="submit">
      {content}
    </button>
  );
};

export default FormSubmitButton;
