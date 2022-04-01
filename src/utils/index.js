const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const setLocalStorage = (key, value) => {
  const newValue = JSON.stringify(value);
  localStorage.setItem(key, newValue);
};

export { getLocalStorage, setLocalStorage };
