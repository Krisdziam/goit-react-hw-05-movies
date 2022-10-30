import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FilmsItems.module.css';
export default function FilmsItems({ films }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {films.map(film => (
          <li className={styles.item} key={film.id}>
            <Link to={`/movies/${film.id}`}>
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
