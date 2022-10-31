import React from 'react';
import { useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';

export default function Form({
  handleInputChange,
  handleSubmitForm,
}) {
  return (
    <form onSubmit={handleSubmitForm}>
      <label>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          onChange={handleInputChange}
        />
      </label>
      <button type='submit'>Search</button>
    </form>
  );
}
