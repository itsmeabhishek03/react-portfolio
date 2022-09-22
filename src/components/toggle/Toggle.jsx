import "./toggle.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio-website/src/img/sun.png" alt="" className="t-icon" />
      <img src="https://raw.githubusercontent.com/safak/youtube/react-portfolio-website/src/img/moon.png" alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;