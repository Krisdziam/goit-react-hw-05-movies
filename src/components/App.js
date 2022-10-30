import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from '../Pages/HomePage';
import SearchFilm from './SearchFilm/SearchFilm';
import { Loading } from "notiflix/build/notiflix-loading-aio";
import MovieInfoPage from 'Pages/MovieInfoPage';
import FilmsCast from './FilmsCast/FilmsCast';
import FilmsReview from './FilmsReview/FilmsReview';





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
      <Header />
      <Routes>
 
          <Route index element={<HomePage />}/>
          <Route path = "movies" element={<SearchFilm />}/> 
          <Route path= "/movies/:id" element = {<MovieInfoPage/>}>
            <Route path='cast' element ={<FilmsCast/>}/>
            <Route path='reviews' element ={<FilmsReview/>}/>
            
            </Route>
        
      
      
      </Routes>
      </Suspense>
   
    </>
  );
}
