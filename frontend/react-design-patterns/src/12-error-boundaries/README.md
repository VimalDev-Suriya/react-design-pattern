# Error boundary:

A Error boundary is a react component, which captures the error from its **rendering child tree** and replaces that subtree with the fallback UI.

- Can be created only using Class Components (React provided suggestion), as we use multiple life cycle methods, which will be called by react internally.
- `static getDerivedStateFromError`, can accept the error from its child component, during render
- `componentDidCatch`, will run after the commit phase, so we can implement the side effects like API call, analytics etc
- Always make sure to wrap the error boudaries with the non-dependant sibling components
