import { useCallback } from "react";

/**this is reusable localStorage hook
* to safely handle reading/writing without throwing errors
* (cross-browser friendly, defensive) */
export const useLocalStorage = () => {
  /**quick check if localStorage is usable
    * sets and removes a dummy value
    * if it errors (like in private mode / strict environments), returns false
    * protects from exceptions if the user disables localStorage */
  const isAvailable = () => {
    try {
      localStorage.setItem("test", "test");
      localStorage.removeItem("test");
      return true;
    } catch {
      return false;
    }
  };

  /**safe getter
    * tries to get the value for key, parses JSON, if parsing fails or is missing, gives back defaultValue
    * uses useCallback so the function identity stays stable between renders
  */
  const safelyGet = useCallback((key: string, defaultValue: any) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  }, []);

  /**safe setter
    * serializes any JS value to JSON stores it under the given key
    * if fails (like exceeding quota), logs a warning
    * useCallback ensures stable reference 
  */
  const safelySet = useCallback((key: string, value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.warn(`Failed to save ${key}`);
    }
  }, []);

  /**safe remover
   * removes the item, warns if something breaks, also useCallback stabilized */
  const safelyRemove = useCallback((key: string) => {
    try {
      localStorage.removeItem(key);
    } catch {
      console.warn(`Failed to remove ${key}`);
    }
  }, []);

  /**exports all four helpers
    *now other code (like useQuizProgress) can depend on this hook to
    *store, load, and check localStorage in a consistent, safe, typed, clean way */
  return { isAvailable, safelyGet, safelySet, safelyRemove };
};
