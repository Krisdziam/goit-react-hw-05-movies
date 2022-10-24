import React from 'react';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form({onSubmit}) {
  const [query, setQuery] = useState('');


  const handleSubmitForm = e => {
    e.preventDefault();
    if (query.trim() === '') {
      const error = toast.error(
        `Please, enter the name of image`,
        {
          autoClose: 2000,
        }
      );
      return error;
    }
    onSubmit(query);
    setQuery('');
  };


  return (
    <form onSubmit={handleSubmitForm}>
      <label>
        <input
          type="text"
          value={query}
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          onChange={e =>
            setQuery(
              e.currentTarget.value.toLowerCase()
            )
          }
        />
      </label>
      <button>Search</button>
    </form>
  );
}
