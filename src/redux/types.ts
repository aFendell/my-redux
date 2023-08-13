// Type the shape of the App's state
export type State = {
  count: number;
};

// Can add here actions for multiple reducers
export type Action = {
  type: 'INCREMENT' | 'DECREMENT' | 'RESET';
};

export type Reducer = (state: State, action: Action) => State;
