# State and Reducer

- State is the memory of the component
- Reducer is the pure function (Plain JS), which updates the state based on the action

```js
const [currentState, dispatch] = useReducer(reducerFunction, initialState);

// reducerFunction - a pure function which holds the state update logic
// CurrentState - A actual and latest state of the app
// Dispatch - A way/ability to update the state, which helps to dispatch the action
```

**This Pattern help us to move the State Update logic outside the component, So that the consumer of the application can handle how the state logic should be there**