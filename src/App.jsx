import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation"
import { lazy, Suspense } from "react";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import MovieReviews from "./components/MovieReviews/MovieReviews";


const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));

function App() {

  return (
    <>
      <Navigation />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movie/:filmId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App
