import { Toaster } from "react-hot-toast"
import { Routes, Route } from "react-router-dom"
import { Layout } from "./Layout/Layout";
import { Home } from "pages/Home/Home";
import { lazy } from "react";
// import { Movies } from "pages/Movies/Movies";
// import { MovieDetails } from 'components/MovieDetails/MovieDetails';
const Movies = lazy(() => import('pages/Movies/Movies'))
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'))
const Cast = lazy(() => import('components/Cast/Cast'))
const 

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails/>}>
             {/* <Route path="cast" element={<Cast />} />
             <Route path="reviews" element={<Reviews />} /> */}
          </Route>
        </Route>
      </Routes>
      <Toaster position="top-right" reverseOrder={false}/>
    </div>
  );
};
