import { Link, useLocation } from "react-router-dom";
import style from "./MovieList.module.css";

function MovieList({ movieList }) {

  const location = useLocation()

  return (
    <div className={style.wrapper}>
      {!movieList ? (
        <p className={style.loading}>Movies is loading...</p>
      ) : (
        <ul className={style.list}>
          {movieList.map((film) => (
            <li className={style.item} key={film.id}>
              <Link state={location} className={style.link} to={`/movie/${film.id.toString()}`}>
                <img
                  width="60"
                  height="60"
                  className={style.poster}
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.original_title}
                />
                <p className={style.linkText}>{film.original_title}</p>
                <p className={style.linkText}>{film.release_date}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;