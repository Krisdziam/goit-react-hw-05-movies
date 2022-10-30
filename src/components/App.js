import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const SearchFilm = lazy(() =>
  import('../Pages/SearchFilm/SearchFilm')
);
const Layout = lazy(() => import('./Layout/Layout'));
const FilmInfoPage = lazy(() =>
  import('Pages/FilmInfoPage/FilmInfoPage')
);
const FilmsCast = lazy(() =>
  import('./FilmsCast/FilmsCast')
);
const FilmsReview = lazy(() =>
  import('./FilmsReview/FilmsReview')
);

export function App() {
  const loading = Loading.circle({
    svgColor: '#ff6b01',
    cssAnimationDuration: 800,
  });
  return (
    <>
      <Suspense fallback={loading}>
        {Loading.remove()}
      

        <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="movies" element={<SearchFilm />} />
          <Route path="/movies/:id" element={<FilmInfoPage />}>
            <Route path="cast" element={<FilmsCast />} />
            <Route path="reviews" element={<FilmsReview />}
            />
            <Route path="*" element={<HomePage />} />
          </Route>
          </Route>
          
        </Routes>
      </Suspense>
    </>
  );
}
