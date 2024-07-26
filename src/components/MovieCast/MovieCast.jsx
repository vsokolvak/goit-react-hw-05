import { useParams } from "react-router-dom";
import style from "./MovieCast.module.css";
import { useEffect, useState } from 'react';
import { getCast } from "../../axios/axios";


function MovieCast() {

  const [cast, setCast] = useState(null)

  const id = Number(useParams().filmId)

  useEffect (() => {
    const getFilmCast = async () => {
      if (typeof(id) !== 'number') return
      try {
        const cast = await getCast(id)
        setCast(cast)
        console.log(cast)
      }
      catch {}
    }
    getFilmCast()
  }, [id])

  return (
    <div className={style.wrapper}>
      {cast && <ul className={style.actorList}>
        {cast.map(({ id, profile_path, name, character }) => {
          return (
            <li key={id} className={style.actoritem}>
              <img
                className={style.actorPhoto}
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={`photo ${name}`}
              />
              <p className={style.actoName}>{name}</p>
              <p className={style.actoCharacter}>Character: {character}</p>
            </li>
          );
        })}
      </ul>}
    </div>
  );
}

export default MovieCast;