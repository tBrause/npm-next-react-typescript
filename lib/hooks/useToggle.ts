import { useState } from 'react';

export function useToggle(initialState: boolean) {
  const [state, setState] = useState(initialState);

  const toggle = () => setState((currentState) => !currentState);

  const setTrue = () => setState(true);
  const setFalse = () => setState(false);

  return [state, toggle, setState, setTrue, setFalse] as const;
}
