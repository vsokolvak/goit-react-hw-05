import { Link } from "react-router-dom";
import style from "./HomePage.module.css";
import { getTrendingMovie } from "../../axios/axios";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

function HomePage() {

    const [movieList, setMovieList] = useState(null)

    useEffect(() => {
        async function getMovieList() {
        const movieList = await getTrendingMovie();
        setMovieList(movieList);
        }
        getMovieList()
    },[])

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Trending today</h2>
      <MovieList movieList={movieList} />
    </div>
  );
}

export default HomePage;