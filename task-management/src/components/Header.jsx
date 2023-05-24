import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  const { theme, setTheme } = props;

  function toggleTheme(){
    if(theme == "light"){
        setTheme("dark");
    } else {
        setTheme("light");
    }
  }
  
  return (
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
        <span onClick={toggleTheme}>{theme == "light" ? "Light Mode" : "Dark Mode"}</span>
        <span className="icon-toggle" onClick={toggleTheme}>
          {theme == "light" ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </span>
      </div>
    </header>
  );
}
