import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { fetchReviews } from 'components/ServiceApi/ServiceApi';

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
      <h3>
        There are no reviews yet, you can be first who write
        it!
      </h3>
    );
  }
  if (film) {
    return (
      <ul>
        {film.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  }
}
