import type { Reducer, State } from './types';

// Initial State - Build here your App's state
export const initialState: State = {
  count: 0,
};

export const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return state.count < 1
        ? {
            ...state,
            count: 0,
          }
        : {
            ...state,
            count: state.count - 1,
          };
    case 'RESET':
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};
