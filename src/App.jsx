import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation"
import { lazy, Suspense } from "react";
import LoadingPage from "./components/LoadingPage/LoadingPage";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

function App() {

  return (
    <>
      <Navigation />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<></>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App
