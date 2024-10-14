import "./Header.scss";
import HeaderIcon from "../../assets/icons/header-logo.svg";
const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="header-wrap">
        <img src={HeaderIcon} alt="Ensemble Enabler Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
