# Custom Hooks

A Custom hook is the utility function for our React components which perform and maintain the state management in the corresponding component.

- All rules applied for in built hooks will be applied for custom hooks also
  - Always starts "use" keyword
  - Do not use them as nested
- All the Business logic might be present in Custom Hooks and the Presentational logic like UI should be in actual component.

**Notes**:
Here the custom hook is `not the global state manager`, instead this is just the utility, so whenever there is the state changes the custom hook will also be executed, so we should be aware of re-rendering.

- In the following `ProductList` & `PorductAnalytics` component we called custom hooks 2 times. So there will be 2 set of API calls.k
