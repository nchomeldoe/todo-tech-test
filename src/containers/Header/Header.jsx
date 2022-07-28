import Button from "../../components/Button/Button";
import "./Header.scss";

const Header = ({ handleReset }) => {
  return (
    <div className="header">
      <h1 className="header__heading">My Todos</h1>
      <Button type="Reset" handleReset={handleReset} />
    </div>
  );
};

export default Header;
