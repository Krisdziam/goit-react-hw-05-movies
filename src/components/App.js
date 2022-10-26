import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from '../Pages/HomePage';
import SearchFilm from './SearchFilm/SearchFilm';
import { Loading } from "notiflix/build/notiflix-loading-aio";
import MovieInfoPage from 'Pages/MovieInfoPage';


export function App() {
  return (
    <>

<Suspense
      fallback={Loading.circle({
        svgColor: "#ff6b01",
        cssAnimationDuration: 800,
      })}
    >
      {Loading.remove()}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />}/>
          <Route path = "movies" element={<SearchFilm />}/> 
          <Route path= "/movies/:id/" element = {<MovieInfoPage/>}/>
        
      
        </Route>
      </Routes>
      </Suspense>
   
    </>
  );
}
