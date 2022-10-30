import { useEffect, useState } from 'react';
import { fetchFilms } from 'components/ServiceApi/ServiceApi';

import styles from './HomePage.module.css';

import FilmsItems from 'components/FilmsItems/FilmsItems';

export default function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchFilms().then(data => setFilms(data));
  }, []);

  return (
    <>
      <FilmsItems films={films} />
    </>
  );
}
