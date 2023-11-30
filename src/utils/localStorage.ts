import { isBrowser } from ".";

export const getLocalStorageItem = (name: string) => {
  const value = !isBrowser ? null : localStorage.getItem(name);
  if (value === null) return null;
  try {
    return JSON.parse(value);
  } catch (_e) {
    return value;
  }
};

export const setLocalStorageItem = (name: string, value: any) => {
  if (!isBrowser) return;
  localStorage.setItem(
    name,
    typeof value === "object" ? JSON.stringify(value) : value,
  );
};

export const removeLocalStorageItem = (name: string) => {
  if (!isBrowser) return;
  localStorage.removeItem(name);
};

export const clearLocalStorage = () => {
  if (!isBrowser) return;
  localStorage.clear();
};
