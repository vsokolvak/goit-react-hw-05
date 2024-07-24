import { Link } from "react-router-dom";
import style from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={style.wrapper}>
      <p className={style.title}>Page not found</p>
      <Link to="/" className={style.link}>
        Go Home
      </Link>
    </div>
  );
}

export default NotFoundPage;