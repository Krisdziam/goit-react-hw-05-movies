import FilmsItems from 'components/FilmsItems/FilmsItems';
import Form from 'components/Form.jsx/Form';
import { fetchSearchFilms } from 'components/ServiceApi/ServiceApi';
import { useState,useEffect } from 'react';
import { Outlet } from 'react-router-dom';


export default function SearchFilm() {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState("")

  const formSubmitHandler = inputValueName => {
    setQuery(inputValueName);
    setFilms([]);
   
  };


useEffect(() => {
    query && fetchSearchFilms(query).then(response => { setFilms(response); console.log(response) });
}, [query])


  return (
    <>

    <Form onSubmit={formSubmitHandler}/>
    {query && <FilmsItems films={films} />}
    <Outlet/>
    </>
  );
}
