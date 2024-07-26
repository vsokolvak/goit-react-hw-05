
import { useEffect, useState } from "react";
import style from "./MovieDetailsPage.module.css";
import { Outlet, useParams } from "react-router-dom";
import { getFilmById } from "../../axios/axios";
import FilmInfo from "../../components/FilmInfo/FilmInfo";


function MovieDetailsPage() {

  const [filmInfo, setFilmInfo] = useState(null)
  const [error, setError] = useState(false)

  const id = Number(useParams().filmId);

  useEffect(() => {
    const getFilmInfo = async () => {
      if (typeof(id) !== 'number') return
      try {
        setError(false)
        setFilmInfo(null)
        const filmInfo = await getFilmById(id)
        setFilmInfo(filmInfo)
      }
      catch{
        setError(true)
      }
    }
    getFilmInfo()
  }, [])

  return (
    <div className={style.wrapper}>
      {error && <p>Film not found</p>}
      {filmInfo && <FilmInfo filmInfo={filmInfo} />}
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;