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
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                width="300"
                height="450"
                alt={film.title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
