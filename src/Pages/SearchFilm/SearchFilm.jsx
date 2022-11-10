import FilmsItems from 'components/FilmsItems/FilmsItems';
import Form from 'components/Form/Form';
import { fetchSearchFilms } from 'ServiceApi/ServiceApi';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export default function SearchFilm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState(
    searchParams.get('query') ?? ''
  );
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (!query){
      return
    } {
      
      fetchSearchFilms(query)
        .then(data => {
          if (data.length > 0) {
            Loading.pulse({
              svgColor: '#32c682',
              svgSize: '100px',
              cssAnimationDuration: 800,
            });
            setFilms(data);
            console.log(data);
          } else {
            setFilms([]);
            return Notify.failure(
              `We did not find movies with ${query} name`
            );
          }
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
    if (searchValue === '') {
      Notify.failure('Please enter the name!');
      return;
    }
setSearchParams(`query=${searchValue}`);
    setQuery(searchValue);
  };

  return (
    <>
      <Form
        handleSubmitForm={handleSubmitForm}
        handleInputChange={handleInputChange}
        query={query}
      />
      <FilmsItems films={films} />
    </>
  );
}
