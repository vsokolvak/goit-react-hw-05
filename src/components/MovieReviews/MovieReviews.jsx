import { useParams } from "react-router-dom";
import style from "./MovieReviews.module.css";
import { useEffect, useState } from 'react';
import { getReview } from "../../axios/axios";


function MovieReviews() {
  const [reviews, setReviews] = useState(null);

  const id = Number(useParams().filmId);

  useEffect(() => {
    const getFilmReviews = async () => {
      if (typeof id !== "number") return;
      try {
        const reviews = await getReview(id);
        setReviews(reviews);
      } catch {}
    };
    getFilmReviews();
  }, [id]);

  return (
    <div className={style.wrapper}>
      {reviews && (
        <ul className={style.reviewsList}>
          {reviews.map(({ id, author, content, created_at }) => {
            return (
              <li key={id} className={style.reviewsitem}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
                <p>Created at: {created_at}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default MovieReviews;