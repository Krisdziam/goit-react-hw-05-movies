import FilmsItems from 'components/FilmsItems/FilmsItems';
import Form from 'components/Form.jsx/Form';
import { fetchSearchFilms } from 'components/ServiceApi/ServiceApi';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export default function SearchFilm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState(
    searchParams.get('query') ?? ''
  );
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (query) {
      setSearchParams(`query=${query}`);
      fetchSearchFilms(query)
        .then((data) => {
          Loading.circle({
            svgColor: "#ff6b01",
          });
          setFilms(data);
        })
        .finally(() => {
          Loading.remove();
        });
    }
  }, [query, setSearchParams]);


  const handleInputChange = e => {
    setSearchValue(e.target.value.toLowerCase().trim());
  };
  const handleSubmitForm = e => {
    e.preventDefault();
    if (searchValue === "") {
      Notify.failure("Please enter the name!");
      return;
    }

    setQuery(searchValue);
  };


  return (
    <>
      <Form   handleSubmitForm={handleSubmitForm}
          handleInputChange={handleInputChange}
          query={query} />
    <FilmsItems films={films} />

    </>
  )
}
