import StandardButton from "../../components/StandardButton/StandardButton";
import "./Header.scss";

const Header = ({ handleReset }) => {
  return (
    <div className="header">
      <h1 className="header__heading">My Todos</h1>
      <StandardButton text="Reset" handleReset={handleReset} />
    </div>
  );
};

export default Header;
