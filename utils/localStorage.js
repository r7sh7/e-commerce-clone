export const setLocalStorageData = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageData = function (key) {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return false;
  }
};
