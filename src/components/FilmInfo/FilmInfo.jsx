import { Link, useLocation } from "react-router-dom";
import style from "./FilmInfo.module.css";

function FilmInfo({filmInfo}) {
  const {
    poster_path,
    title,
    popularity,
    overview,
    genres,
  } = filmInfo;

  const location = useLocation()

  return (
    <div className={style.wrapper}>
      <Link to={location.state ?? "/movies"} className={style.btn}>
        GO BACK
      </Link>
      <div className={style.filmInfo}>
        <img
          className={style.filmPoster}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <div className={style.filDescription}>
          <h1 className={style.descriptionTitle}>{title}</h1>
          <p>popularity {popularity}</p>
          <h2 className={style.categoryTitle}>overview</h2>
          <p>{overview}</p>
          <h3 className={style.categoryTitle}>genres</h3>
          <p className={style.genres}>
            {genres.map((el) => (
              <span key={el.id}>{el.name}</span>
            ))}
          </p>
        </div>
      </div>
      <div className={style.aditional}>
        <p>Aditional information</p>
        <ul>
          <li>
            <Link to="cast" className={style.btn}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={style.btn}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilmInfo;