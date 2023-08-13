import type { State, Reducer, Action } from './types';
import { reducer, initialState } from './reducer';

const createStore = (reducer: Reducer, initialState: State) => {
  let state = initialState;
  let listeners: VoidFunction[] = [];

  function getState() {
    // Returns the current state
    return state;
  }

  function dispatch(action: Action) {
    // Dispatches the action
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener: VoidFunction) {
    // Holds the listeners
    // and returns a function to unsubscribe from the listeners
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
};

export const store = createStore(reducer, initialState);
