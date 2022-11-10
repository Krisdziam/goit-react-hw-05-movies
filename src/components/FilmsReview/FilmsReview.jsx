import React, { useState } from 'react';
import { useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { fetchReviews } from 'ServiceApi/ServiceApi';
import styles from './FilmsReview.module.css'

export default function FilmsReview() {
  const [film, setFilm] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchReviews(id)
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

  if (film.length === 0) {
    return (
      <h3 className={styles.reviews}>
        There are no reviews yet, you can be first who write
        it!
      </h3>
    );
  }
  if (film) {
    return (
      <ul className={styles.list}>
        {film.map(({ id, author, content }) => (
          <li className={styles.item} key={id}>
            <h3 className={styles.author}>Author: <span className={styles.authorName}> {author}</span></h3>
            <p className={styles.content}>{content}</p>
          </li>
        ))}
      </ul>
    );
  }
}
