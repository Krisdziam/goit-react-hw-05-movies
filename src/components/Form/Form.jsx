import React from 'react';
import styles from './Form.module.css';
import { BiCameraMovie } from 'react-icons/bi';

import 'react-toastify/dist/ReactToastify.css';

export default function Form({
  handleInputChange,
  handleSubmitForm,
}) {
  return (
    <div className={styles.container}>
    <form className={styles.form} onSubmit={handleSubmitForm}>
      <label>
        <input className={styles.formInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          onChange={handleInputChange}
        />
      </label>
      <button className={styles.formBtn} type="submit">
  
        <BiCameraMovie className={styles.formIcon} />
      </button>
    </form></div>
  );
}
