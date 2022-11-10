import React from 'react';
import styles from './Form.module.css';
import { useState } from 'react';
import { BiCameraMovie } from 'react-icons/bi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import 'react-toastify/dist/ReactToastify.css';

export default function Form({ onSubmit }) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = e => {
    setSearchValue(e.target.value.toLowerCase().trim());
  };
  const handleSubmitForm = e => {
    e.preventDefault();
    if (searchValue.trim() === '') {
      Notify.failure('Please enter the name!');
      return;
    }

    onSubmit(searchValue);
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmitForm}
      >
        <label>
          <input
            className={styles.formInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
            onChange={handleInputChange}
            value={searchValue}
          />
        </label>
        <button className={styles.formBtn} type="submit">
          <BiCameraMovie className={styles.formIcon} />
        </button>
      </form>
    </div>
  );
}
