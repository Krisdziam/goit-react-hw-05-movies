import { fetchInfo } from 'ServiceApi/ServiceApi';
import { useState, useEffect } from 'react';
import {
  useParams,
  useLocation,
  Outlet,
  Link,
} from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import FilmDetails from './FilmDetails/FilmDetails';
import styles from './FilmInfoPage.module.css'

export default function FilmInfoPage() {
  const [film, setFilm] = useState();
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchInfo(id)
      .then(data => {
        Loading.pulse({
          svgColor: '#32c682',
          svgSize: '100px',
          cssAnimationDuration: 800,
        });
        setFilm(data);
      })
      .finally(() => {
        Loading.remove();
      });
  }, [id]);

  return (
    <div className={styles.container}>
  
      {film && (
        <FilmDetails
          location={location.state ?? '/'}
          data={film}
        />
      )}
      <Outlet />
    </div>
  );
}
