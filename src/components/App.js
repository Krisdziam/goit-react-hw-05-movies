import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
const HomePage = lazy(() => import('Pages/HomePage'));
const SearchFilm = lazy(() =>
  import('./SearchFilm/SearchFilm')
);
const Header = lazy(() => import('./Header/Header'));
const FilmInfoPage = lazy(() =>
  import('Pages/FilmInfoPage')
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
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route />
          <Route
            path="movies"
            element={<SearchFilm />}
          />{' '}
          <Route />
          <Route
            path="/movies/:id"
            element={<FilmInfoPage />}
          >
            <Route path="cast" element={<FilmsCast />} />
            <Route
              path="reviews"
              element={<FilmsReview />}
            />
          </Route>
          <Route path="*" element={<HomePage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}
