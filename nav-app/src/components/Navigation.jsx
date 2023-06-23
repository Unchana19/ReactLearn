import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import MenuData from "../data/MenuData";
import "./Navigation.css";

export default function Navigation({showMenu, setShowMenu}) {
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <aside>
      <div
        className={`${
          showMenu ? "active" : ""
        } fixed text-black z-10 top-5 left-5`}
      >
        <Link className="text-3xl hover:text-amber-600" to="#">
          <FaBars onClick={toggleMenu} />
        </Link>
      </div>
      <nav
        className={`${
          showMenu ? "active" : ""
        } bg-gray-950 h-screen w-4/12 text-white flex flex-col pt-20 pl-7 fixed top-0`}
      >
        <ul className="">
          {MenuData.map((menu, index) => {
            return (
              <li key={index} className="text-xl font-semibold mt-3">
                <Link className="flex items-center justify-start hover:text-amber-600" to={menu.path}>
                  {menu.icon}
                  <span className="pl-3">{menu.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
