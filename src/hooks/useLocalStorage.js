// Core
import { useState } from 'react';

const APP_NAME = process.env.REACT_APP_NAME || 'AwesomeApp';

export const useLocalStorage = (key, innitialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.get(`${APP_NAME}:${key}`);

      return typeof value !== 'undefined' ? value : innitialValue;
    } catch (error) {
      console.log(`local storage error by key: ${APP_NAME}:${key}. Npm package store error.`);

      return innitialValue;
    }
  });

  const setValue = (value) => {
    try {
      window.localStorage.set(`${APP_NAME}:${key}`, value);
      setStoredValue(value);
    } catch (error) {
      console.log(`local storage error by key: ${APP_NAME}:${key}. Dont forget about KEY and VALUE arguments.`);
    }
  };

  return [
    storedValue,
    setValue,
  ];
};
