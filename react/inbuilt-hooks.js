let stateIndex = 0,
  effectIndex = 0;
let states = [],
  effects = [];

const React = {
  useState: (initialValue) => {
    const index = stateIndex++;
    states[index] = initialValue;

    const state = states[index];
    const updateState = (nextState) => {
      states[index] = nextState;
      // logic to rerender...
    };

    return [state, updateState];
  },
};
