import FilmsItems from 'Pages/FilmsItems/FilmsItems';
import Form from 'components/Form/Form';
import { fetchSearchFilms } from 'ServiceApi/ServiceApi';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export default function SearchFilm() {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const onChangeQuery = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    {
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
  }, [query]);

  return (
    <>
      <Form onSubmit={onChangeQuery} />
      <FilmsItems films={films} />
    </>
  );
}
