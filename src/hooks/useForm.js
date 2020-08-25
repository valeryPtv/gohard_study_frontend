/* eslint-disable no-nested-ternary */

// Core
import { useState } from 'react';

export const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const handleChange = (event, isNumber) => {
    if (event === null) {
      return void setForm(initialValue);
    }

    let { value } = event.target;

    if (isNumber) {
      value = value !== '' && parseInt(value, 10) >= 0 ? parseInt(value, 10) : 0;
    }

    return void setForm({ ...form, [event.target.name]: value });
  };

  const setInitialForm = (newInitialValue) => void setForm(newInitialValue);

  const resetForm = () => void setForm(initialValue);

  return [form, handleChange, setInitialForm, resetForm];
};
