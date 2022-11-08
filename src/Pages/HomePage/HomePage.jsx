import { useEffect, useState } from 'react';
import { fetchFilms } from 'components/ServiceApi/ServiceApi';
import { Loading } from "notiflix/build/notiflix-loading-aio";
import FilmsItems from 'components/FilmsItems/FilmsItems';
import styles from './HomePage.module.css'

export default function HomePage() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchFilms()
      .then((data) => {
        Loading.pulse({
          svgColor: "#32c682",
          svgSize: '100px',
          cssAnimationDuration: 800,
        });
        setFilms(data);
      })
      .finally(() => {
        Loading.remove();
      });
  }, []);


  return (
    <>
    <h1>Trending today</h1>
      <FilmsItems films={films} />
    </>
  );
}
