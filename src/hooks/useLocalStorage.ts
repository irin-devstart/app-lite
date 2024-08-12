const useLocalStorage = () => {
  const setItem = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const getItem = (key: string) => {
    return localStorage.getItem(key);
  };

  const hasItem = (key: string) => {
    return localStorage.getItem(key) !== null;
  };

  const removeItem = (key: string) => {
    localStorage.removeItem(key);
  };

  return { getItem, setItem, removeItem, hasItem };
};

export default useLocalStorage;
