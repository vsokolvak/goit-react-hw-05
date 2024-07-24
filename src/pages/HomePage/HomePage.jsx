import { Link } from "react-router-dom";
import style from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Trending today</h2>
      <ul className={style.list}>
        <li className={style.item}>
          <Link className={style.link}>link1</Link>
        </li>
        <li className={style.item}>
          <Link className={style.link}>link1</Link>
        </li>
        <li className={style.item}>
          <Link className={style.link}>link1</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;