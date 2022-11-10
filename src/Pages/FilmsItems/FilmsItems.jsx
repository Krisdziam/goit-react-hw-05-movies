import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './FilmsItems.module.css';

export default function FilmsItems({ films }) {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {films.map(film => (
          <li className={styles.item} key={film.id}>
            <Link
              to={`/movies/${film.id}`}
              state={{ from: location }}
            >
              <img className={styles.image}
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                width="250"
                height="300"
                alt={film.title}
              />
            
            </Link>
            <div className={styles.wrapper}>
               <h3 className={styles.title}>{film.title}</h3>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
