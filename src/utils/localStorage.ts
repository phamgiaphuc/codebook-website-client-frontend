export const setLocalStorageItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStorageItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const deleteLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalStorageItem = () => {
  localStorage.clear();
};
