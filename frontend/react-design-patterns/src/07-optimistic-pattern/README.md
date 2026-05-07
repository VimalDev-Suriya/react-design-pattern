# Optimistic Pattern

Ability to render the temporary value in the UI untill any side effects completed, so that it imporves the UI / Interactivity.

- This is a temporary, means the value of this might be updated based on the result - whether the promise might be resolved or rejected.

## Hook Anatomy

```js
const stateUpdateFunction = (currentState, input) => optimisticValue;

const [optimisticValue, setOptimisticValue] = useOptimistic(
  currentState,
  stateUpdateFunction,
);
```

- `currentState` - it holds the current state of the UI - Actual State.
- `stateUpdateFunction` - think as the reducer function, it is a pure function which returns the optimistic value - We will handle the logic for it on how it should it act
- `optimisticValue` - actual Optimistic value - that will be updated once OptmisitcstateUpdate function gets updated.
- `setOptimisticValue` - a optimistic state updater function - Think as dispatch function
