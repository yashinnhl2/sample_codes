import { useSyncExternalStore } from 'react';

let currentBreakpoint = 'sm';
const subscribers = new Set();

const getSnapshot = () => currentBreakpoint;

const subscribe = callback => {
  subscribers.add(callback);
  return () => subscribers.delete(callback);
};

const notify = () => subscribers.forEach(callback => callback());

export const setBreakpoint = newValue => {
  if (newValue === currentBreakpoint) return;
  currentBreakpoint = newValue;
  notify();
};

const useBreakpoint = () => {
  return useSyncExternalStore(subscribe, getSnapshot);
};

export default useBreakpoint;
