import { useState, useEffect } from 'react';

// https://dmitripavlutin.com/controlled-inputs-using-react-hooks/
export function useDebouncedValue<Type>(value: Type, wait: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedValue(value), wait);
    return () => clearTimeout(id);
  }, [value]);

  return debouncedValue;
}
