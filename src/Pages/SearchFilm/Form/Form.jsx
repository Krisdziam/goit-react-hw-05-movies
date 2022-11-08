import React from 'react';
import { useState } from 'react';
import styles from './Form.module.css';
import { MdTravelExplore } from 'react-icons/md';

import 'react-toastify/dist/ReactToastify.css';

export default function Form({
  handleInputChange,
  handleSubmitForm,
}) {
  return (
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
  
        <MdTravelExplore className={styles.formIcon} />
      </button>
    </form>
  );
}
