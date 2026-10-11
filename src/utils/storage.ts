/**
 * Safe localStorage wrapper that gracefully handles SSR, disabled cookies/storage, and corrupt JSON.
 */

export function getStorageItem<T>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") {
    return defaultValue;
  }
  try {
    const item = window.localStorage.getItem(key);
    if (!item) return defaultValue;
    return JSON.parse(item) as T;
  } catch (error) {
    console.warn(`[TechmiyaStorage] Failed to read key "${key}":`, error);
    return defaultValue;
  }
}

export function setStorageItem<T>(key: string, value: T): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn(`[TechmiyaStorage] Failed to save key "${key}":`, error);
    return false;
  }
}

export function removeStorageItem(key: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.warn(`[TechmiyaStorage] Failed to remove key "${key}":`, error);
  }
}
