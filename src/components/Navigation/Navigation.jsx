import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import clsx from "clsx";

function Navigation() {
    
    const buildLinkClass = ({ isActive }) => {
    return clsx(style.link, isActive && style.active);
    };

  return (
    <nav className={style.wrapper}>
      <ul className={style.list}>
        <li>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;