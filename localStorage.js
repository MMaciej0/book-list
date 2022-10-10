export const getItemsFromLocalStorage = (storageKey) => {
  return localStorage.getItem(storageKey)
    ? JSON.parse(localStorage.getItem(storageKey))
    : [];
};

export const addItemsToLocalStorage = (storageKey, items) => {
  localStorage.setItem(storageKey, JSON.stringify(items));
};
