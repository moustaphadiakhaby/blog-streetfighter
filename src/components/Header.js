import Title from "./Title";
import Baseline from "./Baseline";
import logo from "../assets/img/sfvlogo.png";

const Header = () => {
  return (
    <div className="header container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="headertext">
        <Title name="Street Fighter" />
        <Baseline text="An awesome game" />
      </div>
    </div>
  );
};

export default Header;
