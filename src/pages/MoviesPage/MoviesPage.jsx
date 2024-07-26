import { useEffect, useState } from "react";
import MoviesSerchForm from "../../components/MoviesSerchForm/MoviesSerchForm";
import style from "./MoviesPage.module.css";
import { getFIlmsByName } from "../../axios/axios";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

function MoviesPage() {

  const [listFilm, setListFilm] = useState(null);
  const [error, setError] = useState(false);

  const [serchParams, setSerchParams] = useSearchParams()
  const film = serchParams.get("film") ?? "";
  const setParams = (film) => {
    setSerchParams({
      film: film,
    });
  }

  useEffect(() => {
    const getFilmByName = async () => {
      if (film.length < 3) return;
      try {
        setListFilm(null);
        setError(false);
        const listFilm = await getFIlmsByName(film);
        if (listFilm.length === 0) {
          setError(true);
          return;
        }
        setListFilm(listFilm);
      } catch {
        setError(true);
      }
    };
    getFilmByName();
  }, [film]);

  return (
    <div className={style.wrapper}>
      <MoviesSerchForm setSerchText={setParams} />

      {error && <p>Serch error, please refresh serch</p>}
      {listFilm && <MovieList movieList={listFilm} />}
    </div>
  );
}

export default MoviesPage;